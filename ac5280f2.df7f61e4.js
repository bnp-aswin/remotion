(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{110:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(a,".").concat(m)]||u[m]||f[m]||i;return t?o.a.createElement(d,c(c({ref:n},l),{},{components:t})):o.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(110)),a={id:"license",title:"License & Pricing"},c={unversionedId:"license",id:"license",isDocsHomePage:!1,title:"License & Pricing",description:"Remotion ships with a separate license for individuals and companies.",source:"@site/docs/license.md",slug:"/license",permalink:"/docs/license",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/license.md",version:"current",sidebar:"someSidebar",previous:{title:"<AbsoluteFill />",permalink:"/docs/absolute-fill"}},s=[],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Remotion ships with a separate license for individuals and companies.\nWhile Remotion is free to use for the former, for some teams a company license is required. Unlike many open source projects, it is not allowed to clone or fork Remotions code for the purpose of creating a competitor."),Object(i.b)("p",null,"Please read the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/blob/main/LICENSE.md"}),"LICENSE file")," before using Remotion and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:hi@jonny.io"}),"contact the author")," for pricing of the company license."))}p.isMDXComponent=!0}}]);