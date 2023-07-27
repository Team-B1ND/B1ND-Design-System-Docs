"use strict";(self.webpackChunkdesigndocs=self.webpackChunkdesigndocs||[]).push([[2952],{3905:(e,t,r)=>{r.d(t,{Zo:()=>a,kt:()=>m});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},a=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,u=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),p=o(r),f=c,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},a),{},{components:r})):n.createElement(m,l({ref:t},a))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,l=new Array(i);l[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:c,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=r(7462),c=(r(7294),r(3905));const i={},l="useOutsideClick",s={unversionedId:"b1nd-react-util/useOutsideClick",id:"b1nd-react-util/useOutsideClick",title:"useOutsideClick",description:"useOutsideClick\ub294 \uc9c0\uc815\ud55c \ucee8\ud14c\uc774\ub108 \ubc16\uc758 \uc694\uc18c\uc5d0\uc11c \ud074\ub9ad \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \ud6a8\uacfc\ub97c \uc904 \uc218 \uc788\ub294 \uc720\ud2f8 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/b1nd-react-util/useOutsideClick.md",sourceDirName:"b1nd-react-util",slug:"/b1nd-react-util/useOutsideClick",permalink:"/B1ND-Design-System/docs/b1nd-react-util/useOutsideClick",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b1nd-react-util/useOutsideClick.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useInterval",permalink:"/B1ND-Design-System/docs/b1nd-react-util/useInterval"},next:{title:"usePreventScroll",permalink:"/B1ND-Design-System/docs/b1nd-react-util/usePreventScroll"}},u={},o=[{value:"Examples",id:"examples",level:2}],a={toc:o},p="wrapper";function d(e){let{components:t,...r}=e;return(0,c.kt)(p,(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"useoutsideclick"},"useOutsideClick"),(0,c.kt)("p",null,"useOutsideClick\ub294 \uc9c0\uc815\ud55c \ucee8\ud14c\uc774\ub108 \ubc16\uc758 \uc694\uc18c\uc5d0\uc11c \ud074\ub9ad \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \ud6a8\uacfc\ub97c \uc904 \uc218 \uc788\ub294 \uc720\ud2f8 \ud6c5\uc785\ub2c8\ub2e4."),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},'const ref = useRef<HTMLElement>(null);\n\nuseOutsideClickEffect(ref, () => {\n  console.log("outside clicked!");\n});\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},'const ref1 = useRef<HTMLElement>(null);\nconst ref2 = useRef<HTMLElement>(null);\n\nuseOutsideClickEffect([ref1, ref2], () => {\n  console.log("outside clicked!");\n});\n')))}d.isMDXComponent=!0}}]);