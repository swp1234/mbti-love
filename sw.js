const CACHE_PREFIX='mbti-love-';
const CACHE_NAME=`${CACHE_PREFIX}v4`;
const BASE='/mbti-love/';
const LOCALES=['ko','en','ja','es','pt','zh','id','tr','de','fr','hi','ru'];
const ASSETS=[BASE,`${BASE}index.html`,`${BASE}deck.html`,`${BASE}css/style.css`,`${BASE}css/deck.css`,`${BASE}js/app.js`,`${BASE}js/deck.js`,`${BASE}js/data.js`,`${BASE}js/i18n.js`,`${BASE}manifest.json`,`${BASE}icon-192.svg`,`${BASE}icon-512.svg`,...LOCALES.map(lang=>`${BASE}js/locales/${lang}.json`)];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.origin!==self.location.origin||!url.pathname.startsWith(BASE))return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response})))});
