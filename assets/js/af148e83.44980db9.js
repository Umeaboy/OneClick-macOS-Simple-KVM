"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[415],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9339:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Disabling Verbose (To make booting faster)"},s=void 0,u={unversionedId:"guide-disabling-verbose",id:"guide-disabling-verbose",title:"Disabling Verbose (To make booting faster)",description:"Warning",source:"@site/docs/guide-disabling-verbose.md",sourceDirName:".",slug:"/guide-disabling-verbose",permalink:"/docs/guide-disabling-verbose",draft:!1,editUrl:"https://github.com/notAperson535/OneClick-macOS-Simple-KVM/tree/docs/docs/guide-disabling-verbose.md",tags:[],version:"current",frontMatter:{title:"Disabling Verbose (To make booting faster)"},sidebar:"docs",previous:{title:"Guide to Performance Tuning (Adding Memory and CPU cores)",permalink:"/docs/guide-performance"},next:{title:"How to increase screen resolution",permalink:"/docs/guide-screen-resolution"}},c={},p=[{value:"Warning",id:"warning",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"warning"},"Warning"),(0,i.kt)("p",null,"If you do this and then there is a problem that causes macOS to not boot, you must redownload the opencore qcow2 file from the github repository."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the macOS Finder, look for ",(0,i.kt)("strong",{parentName:"li"},"EFI")," in the left bar under ",(0,i.kt)("strong",{parentName:"li"},"Volumes"),". If it isn't visible you will have to mount it:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the macOS Terminal and type ",(0,i.kt)("inlineCode",{parentName:"li"},"diskutil list")," and look for the disk/partition location of the EFI. (There may be more than one.)"),(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo diskutil mount diskYsZ"),", using the disk/partition location name where you see EFI. It should look like this:\n",(0,i.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/95918679/152873359-9f3586e9-32f7-411a-8fd7-25c80a94aeec.png",alt:"image"})),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"EFI")," partition will appear in the left Finder bar under ",(0,i.kt)("strong",{parentName:"li"},"Volumes"),"."),(0,i.kt)("li",{parentName:"ul"},"If you don't see anything in that volume after browsing to it, try the other ones that you found in ",(0,i.kt)("inlineCode",{parentName:"li"},"diskutil"),".")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"EFI")," volume, go into the ",(0,i.kt)("inlineCode",{parentName:"li"},"EFI")," directory and then the ",(0,i.kt)("inlineCode",{parentName:"li"},"OC")," directory and open the ",(0,i.kt)("inlineCode",{parentName:"li"},"config.plist")," file in the macOS text editor.")),(0,i.kt)("p",null,"Next, find and change this line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<string>-v keepsyms=1 tlbto_us=0 vti=9</string>\n")),(0,i.kt)("p",null,"to this line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<string>keepsyms=1 tlbto_us=0 vti=9</string>\n")))}m.isMDXComponent=!0}}]);