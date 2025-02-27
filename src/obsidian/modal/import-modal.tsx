import { App, Modal, Notice, TFile } from "obsidian";

import { Root, createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import ImportApp from "../../react/import-app";

import { serializeState } from "src/data/serialize-state";
import { store } from "src/redux/store";
import { renderDivider, setModalTitle } from "../shared";
import { LoomState } from "src/shared/loom-state/types/loom-state";
import MenuProvider from "src/react/shared/menu-provider";
import ModalMountProvider from "src/react/shared/modal-mount-provider";
import EventManager from "src/shared/event/event-manager";

export default class ImportModal extends Modal {
	root: Root;
	loomFile: TFile;
	loomState: LoomState;

	constructor(app: App, loomFile: TFile, loomState: LoomState) {
		super(app);
		this.loomFile = loomFile;
		this.loomState = loomState;
	}

	onOpen() {
		const { containerEl } = this;
		setModalTitle(containerEl, "DataLoom Import");

		const { contentEl } = this;
		renderDivider(contentEl);
		const appContainerEl = contentEl.createDiv();
		this.renderApp(appContainerEl);
	}

	private async renderApp(contentEl: HTMLElement) {
		const modalEl = contentEl.closest(".modal") as HTMLElement | null;
		if (!modalEl) throw new Error("Modal element not found.");

		this.root = createRoot(contentEl);
		this.root.render(
			<Provider store={store}>
				<ModalMountProvider obsidianApp={this.app} modalEl={modalEl}>
					<MenuProvider>
						<ImportApp
							state={this.loomState}
							onStateChange={this.handleStateChange}
						/>
					</MenuProvider>
				</ModalMountProvider>
			</Provider>
		);
	}

	private handleStateChange = async (state: LoomState) => {
		const serialized = serializeState(state);
		await this.app.vault.modify(this.loomFile, serialized);

		//Trigger an event to refresh the other open views of this file
		EventManager.getInstance().emit(
			"app-refresh",
			this.loomFile.path,
			"", //No app id. Target all views of this file
			state
		);
		new Notice("Success! DataLoom import completed.");
		this.close();
	};

	onClose() {
		if (this.root) this.root.unmount();
	}
}
