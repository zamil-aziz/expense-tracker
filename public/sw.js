if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const c=e=>t(e,i),u={module:{uri:i},exports:r,require:c};s[i]=Promise.all(a.map((e=>u[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-c18c662b"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/135-64f34c7a9f2b0277.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/139-758f9e2ecb2b02e2.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/173-aab1510e43bddf89.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/350-834aaf5afe581af0.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/455-cee845b62d47b499.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/4bd1b696-e476e72964ca679a.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/_not-found/page-40921c7c4126e896.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/api/auth/login/route-a7f9c598a0704e10.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/api/auth/signup/route-dd31c1f513c8dfdf.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/api/expenses/add/route-98201cebe548c402.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/api/expenses/delete/route-0f3c50371a88557e.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/api/expenses/route-095636c9d1f9fb99.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/api/expenses/update/route-7696a19fc949c8b5.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/dashboard/page-9dd75cb5ea549e21.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/layout-32def11b7227099e.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/login/page-95219fb2185f4ef7.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/page-cf05cf456c4bfc63.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/signup/page-855150e9e93f868e.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/app/~offline/page-9ad2b31251e22404.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/main-2ae39f7157e403f3.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/main-app-360b11ee12a1af2e.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ccb7b6d46ecdb025.js",revision:"xSTqPUC49qHOKruJQtyhO"},{url:"/_next/static/css/3ea02a4eee2ba75f.css",revision:"3ea02a4eee2ba75f"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/_next/static/xSTqPUC49qHOKruJQtyhO/_buildManifest.js",revision:"41f6f9322ac86550f057ecdf524bc2a9"},{url:"/_next/static/xSTqPUC49qHOKruJQtyhO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/custom-sw.js",revision:"3435e51fe8a600e57ea55e65ced9704d"},{url:"/fallback-ce627215c0e4a9af.js",revision:"91c803a0338d914c0e6c4708462b23b4"},{url:"/image.png",revision:"eb8d0dbde178224a36ebe6fd8f3df1cf"},{url:"/manifest.json",revision:"b5bd39f7b9de10511bfaa27f42743fa0"},{url:"/~offline",revision:"xSTqPUC49qHOKruJQtyhO"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static\/.*/i,new e.CacheFirst({cacheName:"static-assets",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,maxEntries:100}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/(.*?)\/(api\/expenses|_next\/data\/.*)/,new e.NetworkFirst({cacheName:"api-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:s})=>self.origin===s.origin&&"document"===e.destination),new e.NetworkFirst({cacheName:"pages-cache",networkTimeoutSeconds:3,plugins:[{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(png|svg|jpg|jpeg|gif|webp)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\./,new e.StaleWhileRevalidate({cacheName:"google-fonts",plugins:[{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));
