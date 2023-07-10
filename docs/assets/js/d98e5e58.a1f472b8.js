"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[687],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8177:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const i={},a="Filtering rows",l={unversionedId:"features/rows/row-filter",id:"features/rows/row-filter",title:"Filtering rows",description:"Click Filter to open the filter menu. When you add a new rule, the body rows will be filtered by rows that only match the criteria for that rule.",source:"@site/docs/features/rows/row-filter.mdx",sourceDirName:"features/rows",slug:"/features/rows/row-filter",permalink:"/features/rows/row-filter",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/features/rows/row-filter.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deleting rows",permalink:"/features/rows/row-delete"},next:{title:"Reordering rows",permalink:"/features/rows/row-reorder"}},c={},s=[],u={toc:s},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"filtering-rows"},"Filtering rows"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," to open the filter menu. When you add a new rule, the body rows will be filtered by rows that only match the criteria for that rule."),(0,o.kt)("p",null,"The following types are supported currently for filtering: ",(0,o.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Tag"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Multi-tag")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Checkbox")))}f.isMDXComponent=!0}}]);