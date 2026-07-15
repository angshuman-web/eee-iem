import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Download, ExternalLink } from 'lucide-react'

// A lightweight popup that previews a PDF in an embedded iframe. Used by the
// shared DownloadLink so every document offers an in-page "View" alongside a
// direct download. Closes on backdrop click or the Escape key and locks the
// body scroll while open. External portal links (that browsers refuse to frame)
// still get an "Open in new tab" fallback in the footer.
export default function PdfModal({ title, href, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="flex h-full max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-surface-line bg-white px-5 py-3.5">
          <p className="min-w-0 flex-1 truncate font-display text-[15px] font-bold text-ink-900">{title}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-blue px-3 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-brand-bluedark"
          >
            <Download size={14} /> Download
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink-400 transition-colors hover:bg-surface-soft hover:text-ink-900"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative flex-1 bg-surface-soft">
          <iframe
            src={href}
            title={title}
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <div className="border-t border-surface-line bg-white px-5 py-2.5 text-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink-500 transition-colors hover:text-brand-blue"
          >
            Trouble viewing? Open in a new tab <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>,
    document.body,
  )
}
