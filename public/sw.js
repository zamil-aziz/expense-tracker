if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const u=e=>i(e,a),r={module:{uri:a},exports:n,require:u};s[a]=Promise.all(c.map((e=>r[e]||u(e)))).then((e=>(t(...e),n)))}}define(["./workbox-e44a38ab"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6GvZu2jT-JW-kBMIRY3RJ/_buildManifest.js",revision:"78516c328fa07f5be9358e3a8534cc7e"},{url:"/_next/static/6GvZu2jT-JW-kBMIRY3RJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/135-64f34c7a9f2b0277.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/139-758f9e2ecb2b02e2.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/173-aab1510e43bddf89.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/21-c8e0d581f6c7cf86.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/350-834aaf5afe581af0.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/455-cee845b62d47b499.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/4bd1b696-e476e72964ca679a.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/_not-found/page-40921c7c4126e896.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/api/auth/login/route-a7f9c598a0704e10.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/api/auth/signup/route-dd31c1f513c8dfdf.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/api/expenses/add/route-98201cebe548c402.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/api/expenses/delete/route-0f3c50371a88557e.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/api/expenses/route-095636c9d1f9fb99.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/api/expenses/update/route-7696a19fc949c8b5.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/dashboard/page-f269c33d2963fefc.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/layout-087eb343e7883c8b.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/login/page-95219fb2185f4ef7.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/page-cf05cf456c4bfc63.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/app/signup/page-855150e9e93f868e.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/main-2ae39f7157e403f3.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/main-app-360b11ee12a1af2e.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ccb7b6d46ecdb025.js",revision:"6GvZu2jT-JW-kBMIRY3RJ"},{url:"/_next/static/css/b45fdffdf3128dc9.css",revision:"b45fdffdf3128dc9"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/custom-sw.js",revision:"038b3079cfd31f4bfa5047598eb7d7e0"},{url:"/image.png",revision:"eb8d0dbde178224a36ebe6fd8f3df1cf"},{url:"/manifest.json",revision:"431bbdd27ec567209b2db8299465a789"},{url:"/swe-worker.js",revision:"d7d56bbccd49598cc7e238a6ef2415f7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\./,new e.StaleWhileRevalidate({cacheName:"google-fonts",plugins:[]}),"GET"),e.registerRoute(/\.(png|svg|jpg|jpeg|gif|webp)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
