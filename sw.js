/* The first online visit downloads the complete workshop, including all exercises. */
const CACHE='jstutor-v1.2.0';
const FILES=['./','./index.html','./styles.css','./app.js','./storage.js','./runner.js','./vendor/editor.js','./vendor/editor-LICENSES.txt','./icon.svg','./manifest.webmanifest',...Array.from({length:20},(_,i)=>`./data/m${String(i+1).padStart(2,'0')}.js`)];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('jstutor-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));});

self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
