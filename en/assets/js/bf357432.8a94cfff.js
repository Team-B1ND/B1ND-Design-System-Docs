"use strict";(self.webpackChunkdesigndocs=self.webpackChunkdesigndocs||[]).push([[9190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},a=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(y,o(o({ref:t},a),{},{components:n})):r.createElement(y,o({ref:t},a))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const s={},o="ellipsisLine",l={unversionedId:"b1nd-styled-components-util/ellipsisLine",id:"b1nd-styled-components-util/ellipsisLine",title:"ellipsisLine",description:"ellipsisLine \ud568\uc218\ub294 css \uc801\uc73c\ub85c \uc904\uc784(ellipsisLine) ... \uc744 \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/b1nd-styled-components-util/ellipsisLine.md",sourceDirName:"b1nd-styled-components-util",slug:"/b1nd-styled-components-util/ellipsisLine",permalink:"/B1ND-Design-System/en/docs/b1nd-styled-components-util/ellipsisLine",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b1nd-styled-components-util/ellipsisLine.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"b1ndResetStyle",permalink:"/B1ND-Design-System/en/docs/b1nd-styled-components-util/b1ndResetStyle"},next:{title:"skeletonAnimtaion",permalink:"/B1ND-Design-System/en/docs/b1nd-styled-components-util/skeletonAnimtaion"}},c={},p=[],a={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ellipsisline"},"ellipsisLine"),(0,i.kt)("p",null,"ellipsisLine \ud568\uc218\ub294 css \uc801\uc73c\ub85c \uc904\uc784(ellipsisLine) ... \uc744 \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { styled } from "styled-components";\nimport { ellipsisLine } from "@b1nd/b1nd-styled-components-util";\n\nexport const Text = styled.p`\n  font-size: 18px;\n  ${ellipsisLine(2)}\n`;\n')))}d.isMDXComponent=!0}}]);