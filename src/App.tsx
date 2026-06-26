import { useState } from "react";
import { ArrowUpRight, Award, Crown, X, Github } from "lucide-react";
import Projects from "./components/Projects";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4";

const NAV_LINKS = ["Projects", "Studio", "Offerings", "Inquire"] as const;

const STATS = [
  { value: "20+", label: "Projects Built" },
  { value: "5+", label: "Technologies Used" },
  { value: "2+", label: "Years of Coding" },
];

function Navbar({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <nav className="w-full absolute top-0 left-0 z-40">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 md:py-6 lg:px-16">
        <a
          href="#"
          className="font-podium text-xl font-extrabold uppercase tracking-[0.15em] text-white md:text-2xl"
        >
          KARNA NIRANJAN
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-inter text-sm font-medium uppercase tracking-wider text-white/80 hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={onMenuOpen}
            className="flex flex-col gap-[5px] md:hidden"
          >
            <span className="block h-[2px] w-6 bg-white" />
            <span className="block h-[2px] w-6 bg-white" />
            <span className="block h-[2px] w-6 bg-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-32 md:px-10 md:py-40 lg:px-16">
        <div className="flex items-center gap-2.5">
          <Crown className="h-4 w-4 text-amber-400" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/70">
            Full Stack Developer
          </span>
        </div>

        <h1 className="mt-6 text-6xl font-extrabold uppercase text-white sm:text-7xl md:text-8xl lg:text-[9rem]">
          Code
          <br />
          Create
          <br />
          Deploy
        </h1>

        <p className="mt-8 max-w-xl text-base text-white/70 md:text-lg">
          I build scalable web applications that solve real-world problems.
        </p>

       <a
  href="https://github.com/niran69"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
>
  <Github size={18} />
  GitHub
</a>
      </div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <Navbar onMenuOpen={() => setMenuOpen(true)} />
      <Hero />
      <Projects />

      {/* ✅ FOOTER */}
      <footer className="mt-20 py-10 text-center text-white/60 text-sm border-t border-white/10">
        <p>© 2026 Karna Niranjan</p>
        <p>Built with React & Vite · Full Stack Developer Portfolio</p>
      </footer>
    </div>
  );
}