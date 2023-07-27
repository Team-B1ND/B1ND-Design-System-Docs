"use strict";(self.webpackChunkdesigndocs=self.webpackChunkdesigndocs||[]).push([[7922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},l="useThrottle",c={unversionedId:"b1nd-react-util/useThrottle",id:"b1nd-react-util/useThrottle",title:"useThrottle",description:"useThrottle\uc740 lodash/throttle\uc744 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\ub294 \uc720\ud2f8 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/b1nd-react-util/useThrottle.md",sourceDirName:"b1nd-react-util",slug:"/b1nd-react-util/useThrottle",permalink:"/B1ND-Design-System/docs/b1nd-react-util/useThrottle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b1nd-react-util/useThrottle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePreventScroll",permalink:"/B1ND-Design-System/docs/b1nd-react-util/usePreventScroll"},next:{title:"useTimeout",permalink:"/B1ND-Design-System/docs/b1nd-react-util/useTimeout"}},s={},i=[{value:"Examples",id:"examples",level:2}],u={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usethrottle"},"useThrottle"),(0,o.kt)("p",null,"useThrottle\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash/throttle"),"\uc744 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\ub294 \uc720\ud2f8 \ud6c5\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const handleClick = useThrottle\uc740(() => {\n  console.log("\ud074\ub9ad");\n}, 5000);\n')))}d.isMDXComponent=!0}}]);