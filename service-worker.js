"use strict";var precacheConfig=[["/BurgerBuilder/index.html","34c6f9532db0d391d7cbbcff52b2d15b"],["/BurgerBuilder/static/js/0.45b86cad.chunk.js","7001f622178038e7948aa68e346f666a"],["/BurgerBuilder/static/js/2.8ddd5af8.chunk.js","237cbc7e91957158cbce43e7c7956cf0"],["/BurgerBuilder/static/js/3.aeb6eb26.chunk.js","9c5d1881f177dcd5fd8ee81bdb1305e3"],["/BurgerBuilder/static/js/4.4f848fcf.chunk.js","905a985105fb39f6d15baa45358e2e1d"],["/BurgerBuilder/static/js/5.d3eb7b57.chunk.js","d8b0e8faabbd0cff775b65567b757189"],["/BurgerBuilder/static/js/main.77ff9984.js","0132886c37156a25eb963a14480bc52f"],["/BurgerBuilder/static/media/avatar-placeholder.9f07a42a.png","9f07a42a717192b447376c59904166ab"],["/BurgerBuilder/static/media/bacon.66d924e8.svg","66d924e83d3a9457286fff1be412fe22"],["/BurgerBuilder/static/media/burger-logo.b8503d26.png","b8503d262bffbfb7c67fd6762963e7d1"],["/BurgerBuilder/static/media/cheese.309077e3.svg","309077e3442ff38e713bd40a9bc8c3d2"],["/BurgerBuilder/static/media/de.69e304cd.svg","69e304cd3b0332801a4788976c770911"],["/BurgerBuilder/static/media/en.386cc387.svg","386cc387066317cf209c9abf7e98afab"],["/BurgerBuilder/static/media/meat.6bb07f76.svg","6bb07f76ae68c07f096953c75959beb0"],["/BurgerBuilder/static/media/photo_bacon.936b2278.png","936b2278a32debb6429f168041572566"],["/BurgerBuilder/static/media/photo_cheese.ebf89c1f.png","ebf89c1f15046d1e48518bf09e6db415"],["/BurgerBuilder/static/media/photo_meat.ffaa374e.png","ffaa374eade81bf1bc277342c2ae8ba5"],["/BurgerBuilder/static/media/photo_salad.39536cd5.png","39536cd5e8d5a87ba001dd48ecdd7ed3"],["/BurgerBuilder/static/media/roboto-latin-100.5cb7edfc.woff","5cb7edfceb233100075dc9a1e12e8da3"],["/BurgerBuilder/static/media/roboto-latin-100.7370c367.woff2","7370c3679472e9560965ff48a4399d0b"],["/BurgerBuilder/static/media/roboto-latin-100italic.f8b1df51.woff2","f8b1df51ba843179fa1cc9b53d58127a"],["/BurgerBuilder/static/media/roboto-latin-100italic.f9e8e590.woff","f9e8e590b4e0f1ff83469bb2a55b8488"],["/BurgerBuilder/static/media/roboto-latin-300.b00849e0.woff","b00849e00f4c2331cddd8ffb44a6720b"],["/BurgerBuilder/static/media/roboto-latin-300.ef7c6637.woff2","ef7c6637c68f269a882e73bcb57a7f6a"],["/BurgerBuilder/static/media/roboto-latin-300italic.14286f3b.woff2","14286f3ba79c6627433572dfa925202e"],["/BurgerBuilder/static/media/roboto-latin-300italic.4df32891.woff","4df32891a5f2f98a363314f595482e08"],["/BurgerBuilder/static/media/roboto-latin-400.479970ff.woff2","479970ffb74f2117317f9d24d9e317fe"],["/BurgerBuilder/static/media/roboto-latin-400.60fa3c06.woff","60fa3c0614b8fb2f394fa29944c21540"],["/BurgerBuilder/static/media/roboto-latin-400italic.51521a2a.woff2","51521a2a8da71e50d871ac6fd2187e87"],["/BurgerBuilder/static/media/roboto-latin-400italic.fe65b833.woff","fe65b8335ee19dd944289f9ed3178c78"],["/BurgerBuilder/static/media/roboto-latin-500.020c97dc.woff2","020c97dc8e0463259c2f9df929bb0c69"],["/BurgerBuilder/static/media/roboto-latin-500.87284894.woff","87284894879f5b1c229cb49c8ff6decc"],["/BurgerBuilder/static/media/roboto-latin-500italic.288ad9c6.woff","288ad9c6e8b43cf02443a1f499bdf67e"],["/BurgerBuilder/static/media/roboto-latin-500italic.db4a2a23.woff2","db4a2a231f52e497c0191e8966b0ee58"],["/BurgerBuilder/static/media/roboto-latin-700.2735a3a6.woff2","2735a3a69b509faf3577afd25bdf552e"],["/BurgerBuilder/static/media/roboto-latin-700.adcde98f.woff","adcde98f1d584de52060ad7b16373da3"],["/BurgerBuilder/static/media/roboto-latin-700italic.81f57861.woff","81f57861ed4ac74741f5671e1dff2fd9"],["/BurgerBuilder/static/media/roboto-latin-700italic.da0e7178.woff2","da0e717829e033a69dec97f1e155ae42"],["/BurgerBuilder/static/media/roboto-latin-900.9b3766ef.woff2","9b3766ef4a402ad3fdeef7501a456512"],["/BurgerBuilder/static/media/roboto-latin-900.bb1e4dc6.woff","bb1e4dc6333675d11ada2e857e7f95d7"],["/BurgerBuilder/static/media/roboto-latin-900italic.28f91510.woff","28f9151055c950874d2c6803a39b425b"],["/BurgerBuilder/static/media/roboto-latin-900italic.ebf6d164.woff2","ebf6d1640ccddb99fb49f73c052c55a8"],["/BurgerBuilder/static/media/salad.739281a1.svg","739281a178496d5a521e77c79ae8e0f0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var i=new URL(e);return r&&i.pathname.match(r)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),i=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/BurgerBuilder/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});