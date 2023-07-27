"use strict";(self.webpackChunkdesigndocs=self.webpackChunkdesigndocs||[]).push([[4177],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},i=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),f=l(t),i=o,u=f["".concat(s,".").concat(i)]||f[i]||p[i]||a;return t?r.createElement(u,d(d({ref:n},m),{},{components:t})):r.createElement(u,d({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,d=new Array(a);d[0]=i;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[f]="string"==typeof e?e:o,d[1]=c;for(var l=2;l<a;l++)d[l]=t[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}i.displayName="MDXCreateElement"},9335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},d="b1ndTheme",c={unversionedId:"b1nd-styled-components-theme/b1ndTheme",id:"b1nd-styled-components-theme/b1ndTheme",title:"b1ndTheme",description:"b1ndTheme \ud14c\ub9c8\ub294 Theme-Provider\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ub2e4\ud06c, \ub77c\uc774\ud2b8\ubaa8\ub4dc \uac1d\uccb4\uc785\ub2c8\ub2e4.",source:"@site/docs/b1nd-styled-components-theme/b1ndTheme.md",sourceDirName:"b1nd-styled-components-theme",slug:"/b1nd-styled-components-theme/b1ndTheme",permalink:"/B1ND-Design-System/en/docs/b1nd-styled-components-theme/b1ndTheme",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b1nd-styled-components-theme/b1ndTheme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@b1nd/b1nd-styled-components-theme",permalink:"/B1ND-Design-System/en/docs/category/b1ndb1nd-styled-components-theme"},next:{title:"B1ndThemeProvider",permalink:"/B1ND-Design-System/en/docs/b1nd-styled-components-theme/b1ndThemeProvider"}},s={},l=[],m={toc:l},f="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(f,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"b1ndtheme"},"b1ndTheme"),(0,o.kt)("p",null,"b1ndTheme \ud14c\ub9c8\ub294 Theme-Provider\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ub2e4\ud06c, \ub77c\uc774\ud2b8\ubaa8\ub4dc \uac1d\uccb4\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"b1ndTheme\ub97c B1ndThemeProvider\uc5d0 \uc8fc\uc785\ud558\uc5ec Styled-Components\uc758 \ud14c\ub9c8 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export const lightTheme: B1ndTheme = {\n  backgroundColor: "#f0f2f4",\n  backgroundColor2: "#ffffff",\n  backgroundColor3: "#ffffff",\n  backgroundColor4: "#f0f2f4",\n  desableBackground: "#f7f7f7",\n  borderColor: "#d2d2d2",\n  borderColor2: "#3d3d3d",\n  contrast: "#000000",\n  contrast2: "#5c5c5c",\n  contrast3: "#a1a1a1",\n  hoverColor: "#e2e2e2",\n  headerBoxShadow: "0 1px 1px 0 hsl(0deg 0% 80% / 80%)",\n  darkmodeButtonColor: "#efefef",\n  footerBackground: "#292c33",\n};\n\nexport const darkTheme: B1ndTheme = {\n  backgroundColor: "#1a1a1a",\n  backgroundColor2: "#292929",\n  backgroundColor3: "#1a1a1a",\n  backgroundColor4: "#292929",\n  desableBackground: "#1a1a1a",\n  borderColor: "#3d3d3d",\n  borderColor2: "#1a1a1a",\n  contrast: "#ffffff",\n  contrast2: "#e2e2e2",\n  contrast3: "#ffffff",\n  hoverColor: "#3d3d3d",\n  headerBoxShadow: "0 1px 1px 0 rgba(61,61,61,.8)",\n  darkmodeButtonColor: "#3d3d3d",\n  footerBackground: "#292929",\n};\n')))}p.isMDXComponent=!0}}]);