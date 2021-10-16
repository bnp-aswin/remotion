(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5185],{3905:function(e,n,r){"use strict";r.r(n),r.d(n,{MDXContext:function(){return s},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return m}});var a=r(2784);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),m=function(e){return function(n){var r=c(n.components);return a.createElement(e,i({},n,{components:r}))}},c=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(r),p=t,v=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return r?a.createElement(v,l(l({ref:n},s),{},{components:r})):a.createElement(v,l({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=v;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},29848:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var a=r(22122),t=r(19756),i=(r(2784),r(3905)),o=["components"],l={id:"env-variables",title:"Environment variables"},d=void 0,s={unversionedId:"env-variables",id:"env-variables",isDocsHomePage:!1,title:"Environment variables",description:"Available from v2.1.2.",source:"@site/docs/env-variables.md",sourceDirName:".",slug:"/env-variables",permalink:"/docs/env-variables",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/env-variables.md",tags:[],version:"current",frontMatter:{id:"env-variables",title:"Environment variables"},sidebar:"someSidebar",previous:{title:"Using legacy Babel transpilation",permalink:"/docs/legacy-babel"},next:{title:"Third party integrations",permalink:"/docs/third-party"}},m=[{value:"Passing variables from the CLI",id:"passing-variables-from-the-cli",children:[]},{value:"Using a dotenv file",id:"using-a-dotenv-file",children:[]},{value:"Setting via <code>renderFrames()</code>",id:"setting-via-renderframes",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:m};function p(e){var n=e.components,r=(0,t.default)(e,o);return(0,i.mdx)("wrapper",(0,a.default)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Available from v2.1.2.")),(0,i.mdx)("p",null,"Remotion supports environment variables being passed directly from the CLI, using a ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file and from the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/render-frames"},(0,i.mdx)("inlineCode",{parentName:"a"},"renderFrames()"))," function."),(0,i.mdx)("h2",{id:"passing-variables-from-the-cli"},"Passing variables from the CLI"),(0,i.mdx)("p",null,"If you want to pass an environment variable from the CLI, you need to prefix it with ",(0,i.mdx)("inlineCode",{parentName:"p"},"REMOTION_"),". This is a security feature to prevent your whole environment which could contain sensitive information being included in a Webpack bundle."),(0,i.mdx)("p",null,"You can pass environment variables in development mode and while rendering. For example:"),(0,i.mdx)("div",{className:"shiki-twoslash-fragment"},(0,i.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"REMOTION_MY_VAR=hello_world npm start"))))),(0,i.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"REMOTION_MY_VAR=hello_world npm start")))))),(0,i.mdx)("p",null,"In your project, you can access the variable using ",(0,i.mdx)("inlineCode",{parentName:"p"},"process.env.REMOTION_MY_VAR"),"."),(0,i.mdx)("h2",{id:"using-a-dotenv-file"},"Using a dotenv file"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"Dotenv")," support is built in. Simply place a ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file in the root of your project and place key-value pairs in it."),(0,i.mdx)("p",null,"For example, if your file contains"),(0,i.mdx)("div",{className:"shiki-twoslash-fragment"},(0,i.mdx)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#fff",color:"#24292e"},title:".env"},(0,i.mdx)("div",{parentName:"pre",className:"code-title"},".env"),(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"ini"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"MY_VAR"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"=hello")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"ANOTHER_VAR"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"=world"))))),(0,i.mdx)("pre",{parentName:"div",className:"shiki github-dark with-title",style:{backgroundColor:"#24292e",color:"#e1e4e8"},title:".env"},(0,i.mdx)("div",{parentName:"pre",className:"code-title"},".env"),(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"ini"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"MY_VAR"),(0,i.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"=hello")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"ANOTHER_VAR"),(0,i.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"=world")))))),(0,i.mdx)("p",null,"in your project you can read ",(0,i.mdx)("inlineCode",{parentName:"p"},"process.env")," to get an object ",(0,i.mdx)("inlineCode",{parentName:"p"},'{"MY_VAR": "hello", "ANOTHER_VAR": "world"}'),"."),(0,i.mdx)("p",null,"You can override the location of your dotenv file using the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/config#setdotenvlocation"},"configuration file setting")," or the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli"},"CLI flag"),"."),(0,i.mdx)("h2",{id:"setting-via-renderframes"},"Setting via ",(0,i.mdx)("inlineCode",{parentName:"h2"},"renderFrames()")),(0,i.mdx)("p",null,"The above two methods only work when rendering from the CLI. To pass environment variables while server-side-rendering, pass an object to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/render-frames#env-variables"},(0,i.mdx)("inlineCode",{parentName:"a"},"envVariables")," option of ",(0,i.mdx)("inlineCode",{parentName:"a"},"renderFrames()")),"."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/render-frames#env-variables"},(0,i.mdx)("inlineCode",{parentName:"a"},"renderFrames()")," - envVariables")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/dotenv"},"dotenv"))))}p.isMDXComponent=!0}}]);