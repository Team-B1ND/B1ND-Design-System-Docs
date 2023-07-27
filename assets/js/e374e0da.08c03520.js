"use strict";(self.webpackChunkdesigndocs=self.webpackChunkdesigndocs||[]).push([[2097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},c=void 0,i={unversionedId:"b1nd-design-core/createPalette",id:"b1nd-design-core/createPalette",title:"createPalette",description:"b1nd palette\ub97c \uae30\uc900\uc73c\ub85c main\uceec\ub7ec\uc640 subMain\uceec\ub7ec\ub97c \ucee4\uc2a4\ud140\ud574\uc11c palette\ub97c \uc0dd\uc131\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/b1nd-design-core/createPalette.md",sourceDirName:"b1nd-design-core",slug:"/b1nd-design-core/createPalette",permalink:"/B1ND-Design-System/docs/b1nd-design-core/createPalette",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b1nd-design-core/createPalette.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"b1ndPalette",permalink:"/B1ND-Design-System/docs/b1nd-design-core/b1ndPalette"},next:{title:"@b1nd/b1nd-dodam-common-ui",permalink:"/B1ND-Design-System/docs/category/b1ndb1nd-dodam-common-ui"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"b1nd palette\ub97c \uae30\uc900\uc73c\ub85c main\uceec\ub7ec\uc640 subMain\uceec\ub7ec\ub97c \ucee4\uc2a4\ud140\ud574\uc11c palette\ub97c \uc0dd\uc131\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const palette = createPalette({ main: "#0067bc" });\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const Container = styled.div`\n  background-color: ${palette.main}; //#0067bc\n`;\n")))}u.isMDXComponent=!0}}]);