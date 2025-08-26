export default function Footer() {
  return (
    <footer className="border-t border-white/10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/85">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>© {new Date().getFullYear()} Mr. Burger. All rights reserved.</p>
          <p>
            <span className="sr-only">Address:</span>
            170 E 40th St, San Bernardino, CA 92404 • Open <time dateTime="10:30">10:30 AM</time> – <time dateTime="24:00">Midnight</time>
          </p>
        </div>
      </div>
    </footer>
  )
}
