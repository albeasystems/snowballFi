import { AppleLogo } from '@phosphor-icons/react/dist/ssr'
import type { ReactNode } from 'react'
import type { Locale } from '../i18n/copy'
import { APP_STORE_URL, shot } from '../site'

/** Real simulator screenshot inside a CSS device bezel (720x1565 source). */
export function Phone({
  locale,
  name,
  alt,
  className = '',
  eager = false,
  style,
}: {
  locale: Locale
  name: string
  alt: string
  className?: string
  eager?: boolean
  style?: React.CSSProperties
}) {
  return (
    <div className={`phone ${className}`} style={style}>
      <img
        src={shot(locale, name)}
        width={720}
        height={1565}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : undefined}
      />
    </div>
  )
}

export function StoreButton({ label, className = '' }: { label: string; className?: string }) {
  return (
    <a className={`btn btn-primary ${className}`} href={APP_STORE_URL} rel="noopener">
      <AppleLogo weight="fill" size={20} aria-hidden="true" />
      {label}
    </a>
  )
}

export function Section({
  id,
  children,
  className = '',
  labelledBy,
}: {
  id?: string
  children: ReactNode
  className?: string
  labelledBy?: string
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`mx-auto w-full max-w-[1240px] px-5 md:px-8 ${className}`}>
      {children}
    </section>
  )
}
