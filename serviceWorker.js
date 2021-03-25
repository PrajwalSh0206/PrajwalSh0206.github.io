const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/tailwind.css",
  "/js/index.js",
  "/assets/undraw_android_jr64.svg",
  "/assets/undraw_web_developer_p3e5.svg",
  "/assets/undraw_responsive_6c8s.svg",
  "/assets/undraw_responsive_6c8s.svg",
  "/assets/favicon/android-chrome-512x512.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
