'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "e0924b92e30bce42ded61dc5e0719ccb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9a0042e075e5535a5938be12266708e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b4ce793c046e1ffbdfaac95fc428559b",
".git/logs/refs/heads/main": "76ab0671610ee58e47feccc1987c6b77",
".git/logs/refs/remotes/origin/main": "f5845cbac3af7bf25eb37c38f75e7491",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/05/ea4c08cb8a26dba2e99f137169ae63e572270d": "b2a4eeca28dcba01b1a406de1e5b0fe2",
".git/objects/08/64d5ff43c8e0a4ea0a58f860745acb841d6495": "f883a34bd61606ff66e3cc325d76f692",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/14/9779b6bfb6330e64ff0fa42e6447880d5be3bb": "80185de6bef2df838eb67b5d314eff59",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/4472241fca74c7b26a7f09b5d230c0ccd06ef9": "39979ed2ae98400ef522218eedfdaffe",
".git/objects/6c/c1b0a8669ffe5c2247a9c83cbe29c1c1e5c1b4": "ca77ebf84e675a8e6db64d1b3e4facf8",
".git/objects/70/d599924b87599d627fbd59d11165e5aae6dc18": "43fffeac5574ad359ced622fc52fbf26",
".git/objects/73/201767ba926e41ebf070b3b9242e5eab36aa86": "040eea4e2c5c35e417a61f4eab475c03",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/05a71e8fe8aa6b07466c20b985bb9f669454a5": "6fcea3ac4d2c7d6022ee033155be516c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/9f14a55e3b6065b5e706df671b6fefd6ea94de": "f2680a9856dcd8d729409992fa463233",
".git/objects/9b/d7ec5e1e16fa2a6c12f9f92b869c4a5a07f084": "552a548fdb06e5c637840a237cd2406a",
".git/objects/9e/7a271a47762fd9230a21934a3d2f8e4e73987d": "ec4b2e304426a3cac09a3666be640ef3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/20c1781f75383e317a9905201fb71b4404b557": "6f11f4f61cb5796e1c56a6f6ade359de",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/5ff7d02251c672a22d30ecfb2bc9f36e80ed45": "56fccb6421dc3186de7ab215d636307f",
".git/objects/d3/53d0046ed6d62a1de061d21575263659f3ab25": "c960adec75e2591b45f2e8b99a07a9a8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e2/5709a020207c5f4b204de24e47ed265cda8824": "a56c072156318c805efee4fcb12bd000",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b7cc22149f72fa25c36175ae9f727926371a83": "a4de37fd566f4be93a9e93e001cfa1ba",
".git/objects/ef/e7d5d5aba472bf0e5ab19ebc8a73cf4fa08ca9": "c6550d284852cc6577da427fb4c9e626",
".git/refs/heads/main": "454a574c21a9c740a04d91564f8e4d47",
".git/refs/remotes/origin/main": "454a574c21a9c740a04d91564f8e4d47",
"assets/AssetManifest.json": "614f09a2b90ee51343ae94b7d8d7f177",
"assets/assets/images/1.1.png": "def28a7601ce7107bce21170552d2fa6",
"assets/assets/images/1.jpeg": "8dcb93753f6c2670232143263fb558e0",
"assets/assets/images/2.jpeg": "db6c2eb04a571da98a58a934e765be2d",
"assets/assets/images/3.jpeg": "c35d86e3bc24d4ebbb42f6ea0867d371",
"assets/assets/images/4.jpeg": "a9075ace28591697a958ac6667b78264",
"assets/assets/Jaseem%2520cv.pdf": "ee1f4d56709723c291a24402474cfb72",
"assets/assets/png/dial.png": "b589cee2afb146786e8ddbb96fa2a2b1",
"assets/assets/png/emial.png": "229079c8f5240851cece598cf8eee770",
"assets/assets/png/facebook.jpg": "2d1598db76de23455375d50d41bfaa34",
"assets/assets/png/github.png": "a673672ec53c7dbf907ce9bcba74d1cd",
"assets/assets/png/instagram.png": "7d369fb78ad668867000c0d987a1b70d",
"assets/assets/png/linkedin.png": "f856d3e21e2b8424a7f9b805f91c39bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d9b493e9db4b5f64f855af5b503ad2a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0c4408b0b7c0415232a9911d8d78fe38",
"/": "0c4408b0b7c0415232a9911d8d78fe38",
"main.dart.js": "ef3560a50afeba06845bd2db3dff6039",
"manifest.json": "7cf55f00f8c149f81291dbced4e441c7",
"muhammedjaseem.github.io/.git/config": "cd032371a91df6c84c4ef77d7e77db27",
"muhammedjaseem.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"muhammedjaseem.github.io/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"muhammedjaseem.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"muhammedjaseem.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"muhammedjaseem.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"muhammedjaseem.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"muhammedjaseem.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"muhammedjaseem.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"muhammedjaseem.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"muhammedjaseem.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"muhammedjaseem.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"muhammedjaseem.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"muhammedjaseem.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"muhammedjaseem.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"muhammedjaseem.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"muhammedjaseem.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"muhammedjaseem.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"version.json": "f6ecf241e434f9697a14343414d2e22f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
