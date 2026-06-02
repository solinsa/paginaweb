'use client'

import Link from 'next/link'

const WA_LINK = "https://wa.me/5218123554766";

export default function TopNavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-light-grey">
      <div className="max-w-container-max mx-auto px-margin-desktop py-4 flex justify-between items-center">
        <Link href="/">
          <img
            className="h-12 w-auto object-contain"
            src="/logo-solinsa.png"
            alt="SOLINSA Logo"
          />
        </Link>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-6 py-2.5 rounded font-label-md text-label-md uppercase tracking-tight"
        >
          Pedir Asesoría
        </a>
      </div>
    </nav>
  )
}
