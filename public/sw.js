if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),f={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>f[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-e44a38ab"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/BkYjXwetgOpfM6mAU0_aU/_buildManifest.js",revision:"699ab5a0c29e6daafba10ac3856f4533"},{url:"/_next/static/BkYjXwetgOpfM6mAU0_aU/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/135-64f34c7a9f2b0277.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/28-57dcb904676e7397.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/350-834aaf5afe581af0.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/455-cee845b62d47b499.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/4bd1b696-e476e72964ca679a.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/506-7bbadf4e329dc081.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/637-1026a36c3b21af11.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/_not-found/page-40921c7c4126e896.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/api/auth/check/route-299947c67fe7054a.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/api/auth/login/route-c16d07f57650014e.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/api/auth/signup/route-b89dbdaef159ee1f.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/api/expenses/add/route-4966eb0b5543965d.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/api/expenses/delete/route-6be97d01a67cd0c6.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/api/expenses/route-3fd62512900be780.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/api/expenses/update/route-892fe95e86a41ada.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/api/offline-fallback/route-1683ba27dfd312bb.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/api/offline-status/route-7d5a101217ed6fcb.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/dashboard/page-d5600c5491da7d24.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/layout-32def11b7227099e.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/login/page-f5f858c8b7dd55ba.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/page-bd546f6365097d7d.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/signup/page-36950d6f0fbd53ec.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/app/~offline/page-7e1ca5c435ab21a0.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/main-2ae39f7157e403f3.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/main-app-360b11ee12a1af2e.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ccb7b6d46ecdb025.js",revision:"BkYjXwetgOpfM6mAU0_aU"},{url:"/_next/static/css/5e73cafbe593cc28.css",revision:"5e73cafbe593cc28"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/fallback-ce627215c0e4a9af.js",revision:"91c803a0338d914c0e6c4708462b23b4"},{url:"/image.png",revision:"eb8d0dbde178224a36ebe6fd8f3df1cf"},{url:"/manifest.json",revision:"75b3a963c5bcedbb9baba2a44cbfd77c"},{url:"/~offline",revision:"BkYjXwetgOpfM6mAU0_aU"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/dashboard/,new e.NetworkFirst({cacheName:"dashboard-pages",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offline-cache",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js|css)$/i,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|ico)$/i,new e.CacheFirst({cacheName:"static-images",plugins:[{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));
