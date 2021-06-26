'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d806ba6fc906df655cb62291c245a424",
"index.html": "2a355856c9cc0b6d883e8c6e91ab4ea7",
"/": "2a355856c9cc0b6d883e8c6e91ab4ea7",
"main.dart.js": "edf59db87969aac755f8fbb216afcebe",
"favicon.png": "6d175d885ddd919829c36d093b5353ea",
"icons/Icon-192.png": "9850f9df8d50f5a52370932acaf9658a",
"icons/Icon-512.png": "1de75e00dfe6ff103dbb102b932c56c5",
"manifest.json": "2bd00afa51e80c9a21edbcaf3a20eca4",
".git/config": "b4ed9dc1e2cab3b11979ac9522d7b15b",
".git/objects/61/65a44be9c3db42180e4dbe03110348d72f39be": "d9b8c56626cf4a80509675c461122e0c",
".git/objects/6f/9279daefbb746564babab403af1204dfbbf2df": "a67c16500511997bd6210b7bf25d7b08",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/5f/bc1935d2934aeb3d9bfc59a94a353171debbf3": "a6edacec3745610f9725e7e1235a8137",
".git/objects/a3/8bf0d2b873e928e841a36f22e2913319e450c1": "d4b06fdfa29d1045978f1e68a2c731ca",
".git/objects/b2/a9bf557a4f15b6b3878624104d4b282bd195ad": "dd25ae5c56b0984fdd181c0433440fc6",
".git/objects/bb/2f764b55ab97425edd088021eade4514cb8789": "d077ac5ed3be758c0a341de254a8a6b2",
".git/objects/d0/e668cd962b2d71d05328ea093c6106878e792a": "3016ae0aaaecda2f5e3039c8dc09cc99",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/d6/06494eca62c32641d8da7d5a6b1f0cfab7d3c2": "372c9d17698b07b7cabf3811dfc3e409",
".git/objects/ae/b02bcb88f0155b87fce7107b346201a84f3ece": "a6d2d31eaeefad6dea6bef2b1e71eac8",
".git/objects/d8/a251c7c46441b9ac1e2c6d176a217c16595460": "87bbd68e89ce9dcc855f173e0802d66b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/e64456c7f8e6b714d699a912bda3fc21583f44": "abcb9efd018b8bc75a096cf323207f04",
".git/objects/eb/fdd707e55e1d050595f4c58c45ae4ab44d000d": "f75fb9db9bc528e1ca887c240e413a32",
".git/objects/ee/6238251f406e932d4d3479d7f1627d1b70bf69": "196937910c1004cc3277e8897c92a3e2",
".git/objects/f5/c0fdd5313d1b65ab554124ba302fca992134ca": "cd7f02aa634edd5f4821629d12367180",
".git/objects/e3/92492abdb3640da80637c8e69d7049e9ed3c41": "457c98db190edf70f51f43c67464a919",
".git/objects/4e/dab12ea6bfc20c83394e33fcab85647416886d": "1b85c4f37b8538db0888570a983d030a",
".git/objects/4e/c55bf4f9543da2cee0e9dda26955b8012a9c6c": "93326934846a4f776f63d1c5672811c2",
".git/objects/11/6483881fcd8fecdc939ae55384ba5d24c7964c": "dc580d2a310fdc1304a7a64fe4b5f2f6",
".git/objects/29/d5f7419bd5a91f113861f1ccd615afdbce712f": "e3ac6ec442953675f750009ff701de51",
".git/objects/7c/fa79e78da00787729517b093943ce30eb5bb8e": "fb1d48e3f394aca107ef5ed92c31766e",
".git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
".git/objects/8f/acda13cddb5c1de4a71ae3122eac7868ed28e6": "dd6d080f1e27a7ef11b20ff302eabe84",
".git/objects/86/53ca30b32ca57d87b97a49e80390724c489c68": "b7edb9ff0d87b932267def9a03e6cc2d",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2a/934213d27c0363f15a99b28602d2f3758673df": "4d959abaff43aca8ea89f95621f772b1",
".git/objects/88/1df7e05c53703dd4be9ca425e8700ba751a1e3": "291937f0878aa0882cb0c815dc70146c",
".git/objects/07/7a6ab64fa121e251f38a23210b3eed65314825": "58a8758374767ec50f9c33ce140fe3b7",
".git/objects/09/aefe9db72e343c5fdce154fe0d6475083588c6": "b30e854bc063be392615b43e85ba296b",
".git/objects/65/98a48810cb2c62869107667d03595fc997ba3c": "fe2a264f8bf41ec2ec382f6e3fa3246f",
".git/objects/3f/abea132c9583d0804e8526b497b5c6b28265e0": "c90ef9bb9a64521de42edad21d850c63",
".git/objects/0f/a1d4c434e3a6735221fcbae6c5b47a741a90cc": "3b9e9048d059d543aa063cb583af3c78",
".git/objects/b8/fcc54d32ec617c1eaac638c5e94b2684b74f8e": "1a9e97fb9d7288bd1694635b9cc89feb",
".git/objects/dc/8813968b5b46e642ddd1ffbc09e7590ef020c6": "fb17fb5f546b3148db61152469405faf",
".git/objects/a9/520b78ac4635319aafe2cc88f1b40c8289b1c8": "f268f08f109671711197a41d2104993e",
".git/objects/a9/f22c3183c9f4725b82653ca73557175fbbf746": "52a03f09696d6e31442ec46a63457760",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/1008931638da058823109b2a5b45fbc96556b7": "5fea84123251ad5eecf5f151fc0b5d63",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f7/2646c52a756cfa3605a1124f5287522f9cf750": "44fac86c4feccbd68ab661aa12223ad2",
".git/objects/c5/1577b47be820f71ea51f7bb10d60094c5a4d49": "610989733a2209dda6e241cde74cd9de",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e7/466b143ceee61c82508e62ea253f2a4bd2652b": "939a876cfd2a8f7b2035d09737b156a1",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/adcedde81d391205c364f0695fa1516dbcb80a": "1e94a89e1f79b2e9968e93c8af2fa07e",
".git/objects/15/ba92edc6528e9c148e490bf57aa5b31615e5ed": "f8bd2ee8f8b6cb52545a746fd69d0ac2",
".git/objects/12/e72909deb84ed071c119cbaee95ec6624a1cf7": "9492446b435b5a0402f78e40b3398a04",
".git/objects/12/ca2a00e8a8c5df83e69cb6939bafeb49db3d76": "8222cb48a3edd18f840317296812a6f8",
".git/objects/47/f2e555419a1cd7e2579079da1494a5a7ad69a6": "da21a302f173746794610beb22f381b6",
".git/objects/13/8a2b4e3b8ca2b08927d879cd234b0be3b52733": "995b3eecf798474eca5002eda296ae92",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "66fa0d932f3a696f6fb8e4696a52965a",
".git/logs/refs/heads/master": "66fa0d932f3a696f6fb8e4696a52965a",
".git/logs/refs/remotes/origin/master": "676a3ab54d5c8ba415bdf462b6fedb54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "97fbbef8ae0316b0c2d54597b8bd5a1e",
".git/refs/remotes/origin/master": "97fbbef8ae0316b0c2d54597b8bd5a1e",
".git/index": "95947ba9fec53d3dc9570efda631df20",
".git/COMMIT_EDITMSG": "395009571924a561c59a9ef551454cb0",
".git/FETCH_HEAD": "e6b3e09b162f37f7cf240e46ccea2699",
"assets/AssetManifest.json": "73d037bb9a227b21ed14ca06c1e6ab95",
"assets/NOTICES": "464b2ededd041a7fa720144b6ea6abb8",
"assets/FontManifest.json": "4834fe0bf3f42f4b7054eede9041eca7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/shape.svg": "bab6ff4cc870eddada284f885cbf4e6f",
"assets/assets/images/tools.svg": "2b8661f0827249fc2ff0cfe11292f829",
"assets/assets/images/illustration.svg": "74c5c283a9a0a1cfd35e9dfe7df9cc2c",
"assets/assets/images/background2.png": "ad1d5b7684b9ce934186a1e29d0515b0",
"assets/assets/images/background.png": "0c3d658170f29297aaee469033109252",
"assets/assets/images/diagram.svg": "184e954c82207b07b5ab4e1e04dafdca",
"assets/assets/images/Gauge.svg": "db3931f5ab476b3ab7febe3086ec18f2",
"assets/assets/images/logo.svg": "a14592b82217eaa24d17c77fd8a95c26",
"assets/assets/images/del.svg": "4fb08cba7fc5cf1bc8b4cb4fcab0f89f",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/fonts/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
