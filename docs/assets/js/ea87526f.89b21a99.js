"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[734],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const l={},i="Creation time cell",a={unversionedId:"features/cells/body/body-cell-creation-time",id:"features/cells/body/body-cell-creation-time",title:"Creation time cell",description:"Description",source:"@site/docs/features/cells/body/body-cell-creation-time.mdx",sourceDirName:"features/cells/body",slug:"/features/cells/body/body-cell-creation-time",permalink:"/features/cells/body/body-cell-creation-time",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/features/cells/body/body-cell-creation-time.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Checkbox cell",permalink:"/features/cells/body/body-cell-checkbox"},next:{title:"Currency cell",permalink:"/features/cells/body/body-cell-currency"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Settings",id:"settings",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creation-time-cell"},"Creation time cell"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This cell renders the creation time of a row."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This value is uneditable. It is set when you create the row."),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../../features/columns/column-settings#linking-table-files#date-format"},"Date format")))}d.isMDXComponent=!0}}]);