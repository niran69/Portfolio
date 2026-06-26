import { useState } from 'react'
import { ArrowUpRight, Award, Crown, X } from 'lucide-react'
import Projects from "./components/Projects";

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4'

const NAV_LINKS = ['Projects', 'Studio', 'Offerings', 'Inquire'] as const

const STATS = [
  { value: '20+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies Used' },
  { value: '2+', label: 'Years of Coding' },
]
function Navbar({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
  <nav className="w-full absolute top-0 left-0 z-40">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 md:py-6 lg:px-16">
        {/* Logo */}
        <a
          href="#"
          className="font-podium text-xl font-extrabold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-70 md:text-2xl"
        >
          KARNA NIRANJAN
        </a>

        {/* Center nav (md+) */}
        <ul className="hidden items-center gap-10 md:flex">
        {NAV_LINKS.map((link) => (
  <li key={link}>
    <a
      href={`#${link.toLowerCase()}`}
      className="font-inter text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white"
    >
      {link}
    </a>
  </li>
))}
        </ul>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="group hidden items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-inter text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black md:inline-flex"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>

          {/* Hamburger (<md) */}
          <button
            onClick={onMenuOpen}
            aria-label="Open menu"
            className="flex flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className="block h-[2px] w-6 bg-white" />
            <span className="block h-[2px] w-6 bg-white" />
            <span className="block h-[2px] w-6 bg-white" />
          </button>
        </div>
      </div>
    </nav>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl transition-all duration-500 ${
        open
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-podium text-xl font-extrabold uppercase tracking-[0.15em] text-white">
          VANGUARD
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Centered links */}
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link}
            href="#"
            onClick={onClose}
            className="font-podium text-4xl font-bold uppercase tracking-wide text-white/90 transition-colors hover:text-white sm:text-5xl"
            style={{
              animation: open
                ? `menu-link-in 0.5s ease-out ${0.15 + i * 0.1}s forwards`
                : 'none',
              opacity: open ? undefined : 0,
            }}
          >
            {link}
          </a>
        ))}

        <a
          href="#"
          onClick={onClose}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-inter text-sm font-semibold uppercase tracking-wider text-black transition-transform hover:scale-105"
          style={{
            animation: open
              ? `menu-link-in 0.5s ease-out 0.6s forwards`
              : 'none',
            opacity: open ? undefined : 0,
          }}
        >
          Get in Touch
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
      />
      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-32 md:px-10 md:py-40 lg:px-16">
        {/* Tagline */}
        <div
          className="animate-fade-up flex items-center gap-2.5"
          style={{ animationDelay: '0.2s' }}
        >
          <Crown className="h-4 w-4 text-amber-400 md:h-5 md:w-5" />
          <span className="font-inter text-xs font-medium uppercase tracking-[0.25em] text-white/70 md:text-sm">
           Full Stack Developer
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="animate-fade-up mt-6 font-podium text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[9rem]"
          style={{ animationDelay: '0.4s' }}
        >
          Code
          <br />
          Create
          <br />
          Deploy
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-up mt-8 max-w-xl font-inter text-base font-light leading-relaxed text-white/70 md:text-lg"
          style={{ animationDelay: '0.6s' }}
        >
          I build scalable web applications that solve real-world problems.
        </p>

        {/* CTA row */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 font-inter text-sm font-semibold uppercase tracking-wider text-white ring-1 ring-white/15 transition-all hover:bg-white hover:text-black"
          >
            See Our Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>

          {/* Award badge */}
          <div className="hidden items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-sm sm:inline-flex">
            <Award className="h-5 w-5 text-amber-400" />
            <div className="flex flex-col leading-tight">
              <span className="font-inter text-sm font-semibold text-white">
                Available
              </span>
              <span className="font-inter text-xs font-light uppercase tracking-wider text-white/60">
                For Projects
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-10 sm:gap-12 md:gap-16"
          style={{ animationDelay: '1s' }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-podium text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                {stat.value}
              </span>
              <span className="mt-2 font-inter text-xs font-medium uppercase tracking-wider text-white/60 md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black font-inter text-white">
      <Navbar onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />

      {/* ✅ Add here */}
      <Projects />

    </div>
  )
}
