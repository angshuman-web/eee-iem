// Local asset resolver.
//
// Drop image/video files into src/assets/images (or /videos) and reference them
// by filename via asset('faculty1.png') / video('hero.mp4'). Files are picked up
// automatically by Vite's glob import — no manual import lines needed. If a named
// file isn't present yet, the resolver returns null and the UI falls back to a
// branded placeholder, so the build never breaks on a missing photo.

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp,svg,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const videos = import.meta.glob('../assets/videos/*.{mp4,webm,ogg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

// Downloadable documents (PDFs, etc.). Drop a file into src/assets/docs and
// reference it by filename via doc('routine.pdf'); pages fall back to the live
// portal link when the file isn't present yet, so nothing 404s.
const docs = import.meta.glob('../assets/docs/*.{pdf,doc,docx,ppt,pptx,xls,xlsx}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function pick(map, name) {
  if (!name) return null
  const hit = Object.entries(map).find(([path]) => path.endsWith(`/${name}`))
  return hit ? hit[1] : null
}

export const asset = (name) => pick(images, name)
export const video = (name) => pick(videos, name)
export const doc = (name) => pick(docs, name)
