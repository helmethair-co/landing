/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-e6c1df2a698903993a48.js"
  },
  {
    "url": "app-e041b18d4a369fe68e70.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b9f8e16bfa8aab5c3e84.js"
  },
  {
    "url": "index.html",
    "revision": "77b35a512494bff907823c7a8a92e975"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3fe8bb466fabb9a00affa2fc17c02138"
  },
  {
    "url": "0.3177a810a02b5ad5f44e.css"
  },
  {
    "url": "component---src-pages-index-js.83004330df9f00a2fe87.css"
  },
  {
    "url": "component---src-pages-index-js-e0d169f166b3768777aa.js"
  },
  {
    "url": "1-5aeb5c30e0bc77b1c4ee.js"
  },
  {
    "url": "0-5b60a25dbc79a9755886.js"
  },
  {
    "url": "static/d/737/path---index-6a9-1eOGbnxhaj09hSLxuTS2iDtrYEk.json",
    "revision": "236cc6708bc2e8b298f45e85ae88a128"
  },
  {
    "url": "component---src-pages-404-js.83004330df9f00a2fe87.css"
  },
  {
    "url": "component---src-pages-404-js-89cf1b0c13138bf5025c.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "be1ddbb9227313f6373d240f6adc805d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});