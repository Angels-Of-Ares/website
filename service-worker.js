!function(){"use strict";const e=1674490209058,s=`cache${e}`,a=["/client/client.42a65ccb.js","/client/inject_styles.803b7e80.js","/client/index.c7fb1b0d.js","/client/Markdown.91f40cd3.js","/client/membership.e5c4c752.js","/client/ghost.1845b139.js"].concat(["/service-worker-index.html","/CNAME","/browserconfig.xml","/docs/aoa-litepaper.pdf","/favicon.ico","/icons/android-chrome-192x192.png","/icons/android-chrome-384x384.png","/icons/android-chrome-512x512.png","/icons/apple-touch-icon.png","/icons/favicon-16x16.png","/icons/favicon-32x32.png","/icons/mstile-150x150.png","/images/algo-logo.svg","/images/aoa-logo.png","/images/bg-1.svg","/images/bg-2.svg","/images/bg-top-1.svg","/images/ghost-logo-gradient.svg","/images/ghost-logo.svg","/images/ipfs/bafkreifix7qqkbtqpil7phul22aa3f2j2z3ssoadrdqj23b7zpilfkaakq.png","/images/ipfs/bafybeib53ynhtrobfabe5bdjbhlegob32ppifrkz6gc6shf2etg4nrrsi4.png","/images/ipfs/bafybeib7ezk343cfqcekv77rblc7ce7k7bw2xzeub7n6dribx25x72eetu.png","/images/ipfs/bafybeibsh2ldbg5qfyi5qkhbncvoe5xm2o73suojkql26gmz4zqpkjqdx4.png","/images/ipfs/bafybeid5ueasv7ta23kk7cbiyhegum5o3jwbppku7ticc2sfixvt2hqvv4.png","/images/ipfs/bafybeie73ese4rzwghpusl7wuo3wt772ywypx4mgtfsmeryu7qjw6hxtxy.png","/images/ipfs/bafybeiffhty5nizc7yf2kpa4bxwrrxvt2uex7clburdldbtpgmhjqv42ty.png","/images/ipfs/bafybeigdwwhjdcaygeysvukclxvhqmwlilb2gahbkus6a2vnmly6fklb7m.png","/images/ipfs/bafybeigig4plgfgwhddxjuqkm5honc3b5icn7paba3sj2fr756ll22f3xi.png","/images/ipfs/bafybeih5yr523rmptjmz5zjylciyxxc3orpatjsl55z7nd5ll2bbtjdoau.png","/images/myalgo-logo.png","/images/partners/alchemon.jpg","/images/partners/algo-hands.jpg","/images/partners/algo-leagues.jpg","/images/partners/algo-saiyans.jpg","/images/partners/awols.jpg","/images/partners/big-brain-belugas.jpg","/images/partners/delta-crew.jpg","/images/partners/how-i-make-an-nft.jpg","/images/walletconnect-logo.svg","/images/wings-bg.jpg","/images/wings-small.jpg","/manifest.json","/mstile-150x150.png","/safari-pinned-tab.svg","/scripts/algosdk.1.13.0-beta.2.min.js","/scripts/algosdk.min.js","/scripts/myalgo.min.js"]),i=new Set(a);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(a))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const a of e)a!==s&&await caches.delete(a);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const a=new URL(s.request.url),n=a.protocol.startsWith("http"),t=a.hostname===self.location.hostname&&a.port!==self.location.port,g=a.host===self.location.host&&i.has(a.pathname),c="only-if-cached"===s.request.cache&&!g;!n||t||c||s.respondWith((async()=>g&&await caches.match(s.request)||async function(s){const a=await caches.open(`offline${e}`);try{const e=await fetch(s);return a.put(s,e.clone()),e}catch(e){const i=await a.match(s);if(i)return i;throw e}}(s.request))())}))}();
