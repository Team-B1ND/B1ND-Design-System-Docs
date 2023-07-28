"use strict";(self.webpackChunkdesigndocs=self.webpackChunkdesigndocs||[]).push([[9603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s="B1ndToast",i={unversionedId:"b1nd-toastify/B1ndToast",id:"b1nd-toastify/B1ndToast",title:"B1ndToast",description:"B1ndToast \ud074\ub798\uc2a4\ub294 react-toastify\uc758 \ud568\uc218\ub97c \uc880 \ub354 \uac04\uacb0\ud558\uace0 \ud3b8\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4.",source:"@site/docs/b1nd-toastify/B1ndToast.md",sourceDirName:"b1nd-toastify",slug:"/b1nd-toastify/B1ndToast",permalink:"/B1ND-Design-System-Docs/docs/b1nd-toastify/B1ndToast",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b1nd-toastify/B1ndToast.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@b1nd/b1nd-toastify",permalink:"/B1ND-Design-System-Docs/docs/category/b1ndb1nd-toastify"},next:{title:"B1ndToastContainer",permalink:"/B1ND-Design-System-Docs/docs/b1nd-toastify/B1ndToastContainer"}},c={},l=[{value:"Examples",id:"examples",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"b1ndtoast"},"B1ndToast"),(0,o.kt)("p",null,"B1ndToast \ud074\ub798\uc2a4\ub294 react-toastify\uc758 \ud568\uc218\ub97c \uc880 \ub354 \uac04\uacb0\ud558\uace0 \ud3b8\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ucf00\uc774\uc2a4\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," \uc138\uac00\uc9c0\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"B1ndToastContainer\uac00 \uc0c1\uc704\uc5d0 \uac10\uc2f8\uc838 \uc788\uc5b4\uc57c \uc2a4\ud0c0\uc77c\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { B1ndToast } from "@b1nd/b1nd-toastify";\n\nconst useShowAlert = () => {\n  const execute = () => {\n    B1ndToast.success("\uc131\uacf5");\n  };\n};\n')))}u.isMDXComponent=!0}}]);