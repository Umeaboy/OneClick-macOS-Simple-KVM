"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7263:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],a={title:"How to increase disk size"},c=void 0,u={unversionedId:"guide-disk-resizing",id:"guide-disk-resizing",title:"How to increase disk size",description:"Close the VM before starting",source:"@site/docs/guide-disk-resizing.md",sourceDirName:".",slug:"/guide-disk-resizing",permalink:"/docs/guide-disk-resizing",draft:!1,editUrl:"https://github.com/notAperson535/OneClick-macOS-Simple-KVM/tree/docs/docs/guide-disk-resizing.md",tags:[],version:"current",frontMatter:{title:"How to increase disk size"},sidebar:"docs",previous:{title:"Guide to Bridged Networking",permalink:"/docs/guide-networking"},next:{title:"Apple-ID fixing",permalink:"/docs/guide-Apple-ID"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Close the VM before starting"),(0,o.kt)("p",null,"First, on your host machine, run this command to add more space to the disk (warning: you can not make the disk smaller, only bigger, so don't make it to big.)\nIn this case I am adding 100GBs of storage to my disk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo qemu-img resize macOS.qcow2 +100G\n")),(0,o.kt)("p",null,"Now reopen the VM, and then open the terminal in macOS, and run this command to find the main drive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"diskutil list\n")),(0,o.kt)("p",null,"it should look something like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/dev/disk0 (internal, physical):\n   #:                       TYPE NAME                    SIZE       IDENTIFIER\n   0:      GUID_partition_scheme                        *268.4 GB   disk0\n   1:                        EFI \u2068EFI\u2069                     209.7 MB   disk0s1\n   2:                 Apple_APFS \u2068Container disk2\u2069         85.7 GB    disk0s2\n                    (free space)                         182.5 GB   -\n")),(0,o.kt)("p",null,"Next, run these commands, depending on your disk type."),(0,o.kt)("p",null,"For APFS disks (for most people)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"diskutil repairdisk disk0\ndiskutil apfs resizeContainer disk0s2 0\n")),(0,o.kt)("p",null,"For HFS or HFS+ disks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"diskutil repairdisk disk0\ndiskutil resizeVolume / R\n")))}m.isMDXComponent=!0}}]);