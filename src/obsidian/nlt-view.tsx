import { TextFileView, WorkspaceLeaf } from "obsidian";
import { createRoot, Root } from "react-dom/client";
import { Provider } from "react-redux";
import App from "../react/table-app";
import { store } from "../redux/global/store";
import { TableState } from "../data/types";
import TableStateProvider from "../shared/table-state/useTableState";
import NLTImportModal from "./nlt-import-modal";
import {
	deserializeTableState,
	serializeTableState,
} from "src/data/serialize-table-state";
import MenuProvider from "src/shared/menu";

export const NOTION_LIKE_TABLES_VIEW = "notion-like-tables";

const REFRESH_VIEW_EVENT = "nlt:refresh-view";

export class NLTView extends TextFileView {
	root: Root | null = null;
	data: string;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewData(): string {
		return this.data;
	}

	handleSaveTableState = async (tableState: TableState) => {
		//Only save data if the view is in the active leaf
		//This prevents the data being saved multiple times if we have
		//multiple tabs of the same file opens
		if (this.app.workspace.activeLeaf === this.leaf) {
			const serialized = serializeTableState(tableState);
			this.data = serialized;
			await this.requestSave();

			//Trigger an event to refresh the other open views of this file
			this.app.workspace.trigger(
				REFRESH_VIEW_EVENT,
				this.leaf,
				this.file.path,
				tableState
			);
		}
	};

	setViewData(data: string, clear: boolean): void {
		this.data = data;

		//If a table pane is already open, we need to unmount the old instance
		if (clear) {
			if (this.root) {
				this.root.unmount();
				this.root = createRoot(this.containerEl.children[1]);
			}
		}

		const tableState = deserializeTableState(data);
		this.renderApp(tableState);
	}

	renderApp(tableState: TableState) {
		if (this.root) {
			this.root.render(
				<Provider store={store}>
					<TableStateProvider initialState={tableState}>
						<MenuProvider>
							<App onSaveTableState={this.handleSaveTableState} />
						</MenuProvider>
					</TableStateProvider>
				</Provider>
			);
		}
	}

	clear(): void {
		this.data = "{}";
	}

	getViewType() {
		return NOTION_LIKE_TABLES_VIEW;
	}

	getDisplayText() {
		const fileName = this.file?.name;
		if (fileName) {
			const extensionIndex = fileName.lastIndexOf(".");
			return fileName.substring(0, extensionIndex);
		}
		return "";
	}

	async onOpen() {
		//This is the view content container
		const container = this.containerEl.children[1];
		this.root = createRoot(container);

		//Add settings button to action bar
		this.addAction("settings", "Settings", () => {
			//Open settings tab
			(this.app as any).setting.open();
			//Navigate to Notion-Like-Tables settings
			(this.app as any).setting.openTabById("notion-like-tables");
		});

		//this.addAction("download", "Export", () => {});

		this.addAction("import", "Import", () => {
			new NLTImportModal(this.app).open();
		});

		this.app.workspace.on(
			// @ts-ignore: not invalid event
			REFRESH_VIEW_EVENT,
			(leaf: WorkspaceLeaf, filePath: string, tableState: TableState) => {
				//Make sure that the event is coming from a different leaf but the same file
				//This occurs when we have multiple tabs of the same file open
				if (leaf !== this.leaf && filePath === this.file.path) {
					if (this.root) {
						this.root.unmount();
						this.root = createRoot(this.containerEl.children[1]);
					}

					this.renderApp(tableState);
				}
			}
		);
	}

	async onClose() {
		if (this.root) {
			this.root.unmount();
			this.root = null;
		}
	}
}
