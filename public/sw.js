if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>i(e,a),u={module:{uri:a},exports:c,require:r};s[a]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-be0aaab1"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5950gqz5hvCiBBn1jzGvt/_buildManifest.js",revision:"977ff9f0beb07ab1e88b4d3906de3523"},{url:"/_next/static/5950gqz5hvCiBBn1jzGvt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/135-64f34c7a9f2b0277.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/139-134e11cafd4e2cdd.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/173-aab1510e43bddf89.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/350-834aaf5afe581af0.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/455-31e0d6b42233dd64.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/4bd1b696-e476e72964ca679a.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/500-a0e4be91275b0262.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/_not-found/page-40921c7c4126e896.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/api/auth/login/route-7229ab72679e42ac.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/api/auth/signup/route-b6e1f813a0275d7a.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/api/expenses/add/route-931b5194d9522fc5.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/api/expenses/delete/route-fea0fb6fc064a569.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/api/expenses/route-0a4b518f1315cd68.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/api/expenses/update/route-9d98e4b793388252.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/api/offline-fallback/route-3e78a4b4cd1dc07c.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/api/offline-status/route-8e230c932cbb5277.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/dashboard/page-fce28a2285c672b2.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/layout-32def11b7227099e.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/login/page-97fe648aed24cbcf.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/page-cf05cf456c4bfc63.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/signup/page-bdfe6b7f6ecf880e.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/app/~offline/page-7e1ca5c435ab21a0.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/main-app-360b11ee12a1af2e.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/main-dc86970564a20ba8.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ccb7b6d46ecdb025.js",revision:"5950gqz5hvCiBBn1jzGvt"},{url:"/_next/static/css/02684edafe963de7.css",revision:"02684edafe963de7"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/fallback-ce627215c0e4a9af.js",revision:"91c803a0338d914c0e6c4708462b23b4"},{url:"/image.png",revision:"eb8d0dbde178224a36ebe6fd8f3df1cf"},{url:"/manifest.json",revision:"b5bd39f7b9de10511bfaa27f42743fa0"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/~offline",revision:"5950gqz5hvCiBBn1jzGvt"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/api\/expenses/,new e.NetworkFirst({cacheName:"api-cache",networkTimeoutSeconds:10,plugins:[new e.BackgroundSyncPlugin("expenses-queue",{maxRetentionTime:1440}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(css|js)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));
