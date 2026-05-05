import Logo from '@/components/Logo'

const links = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '#' },
  { label: 'Git Platforms', href: '/#features' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo size="sm" />
        <nav className="flex flex-wrap gap-5 text-sm text-slate-500">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-slate-600">&copy; 2026 Comainter</p>
      </div>
    </footer>
  )
}
