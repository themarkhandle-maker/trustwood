'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import {
  ArrowRight, Lock, TrendingUp, Send, Shield, Smartphone,
  CreditCard, PiggyBank, Users, DollarSign, Star, Menu, X,
  ChevronDown, ChevronUp
} from 'lucide-react'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    headline: 'Banking Reimagined',
    sub: 'Break free from traditional banking. Experience instant transfers, AI-powered insights, and military-grade security.',
  },
  {
    url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80',
    headline: 'Grow Your Wealth',
    sub: 'Smart savings accounts with up to 4.5% APY. Let your money work harder while you focus on what matters.',
  },
  {
    url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&q=80',
    headline: 'Secure Every Transfer',
    sub: 'Military-grade 256-bit encryption on every transaction. Your funds protected around the clock.',
  },
]

const PARTNER_LOGOS = [
  { name: 'Visa', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png' },
  { name: 'Mastercard', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png' },
  { name: 'PayPal', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png' },
  { name: 'Apple Pay', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/200px-Apple_Pay_logo.svg.png' },
  { name: 'Google Pay', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/200px-Google_Pay_Logo.svg.png' },
  { name: 'Stripe', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/200px-Stripe_Logo%2C_revised_2016.svg.png' },
  { name: 'American Express', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/200px-American_Express_logo.svg.png' },
  { name: 'Discover', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Discover_Card_logo.svg/200px-Discover_Card_logo.svg.png' },
]

const FAQS = [
  {
    q: 'Is my money safe with Capital City Bank?',
    a: 'Absolutely. All deposits are FDIC-insured up to $250,000. We use 256-bit AES encryption, multi-factor authentication, and real-time fraud monitoring on every account.',
  },
  {
    q: 'How do I open an account?',
    a: 'Click "Get Started", fill in your details, verify your identity with a government-issued ID, and your account is ready in minutes — no paperwork, no branch visits.',
  },
  {
    q: 'Are there any monthly fees?',
    a: 'Our core checking and savings accounts are completely free with no monthly maintenance fees. Premium tiers unlock advanced features at a transparent flat rate.',
  },
  {
    q: 'How fast are transfers?',
    a: 'Internal transfers between Capital City Bank accounts are instant. ACH transfers to external banks typically arrive within 1–2 business days. Wire transfers are same-day when submitted before 3 PM ET.',
  },
  {
    q: 'Can I use my debit card internationally?',
    a: 'Yes. Your Capital City Bank Visa debit card works in 180+ countries. We charge zero foreign transaction fees on all international purchases and ATM withdrawals.',
  },
  {
    q: 'What is the high-yield savings APY?',
    a: 'Our High-Yield Savings Account currently offers up to 4.5% APY — compared to the national average of 0.47%. Rates are variable and reviewed monthly based on Federal Reserve benchmarks.',
  },
]

const IMAGE_CARDS = [
  {
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    tag: 'Security',
    title: 'Military-Grade Protection',
    desc: '256-bit encryption & real-time fraud detection',
  },
  {
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    tag: 'Analytics',
    title: 'AI-Powered Insights',
    desc: 'Understand your spending with smart dashboards',
  },
  {
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    tag: 'Transfers',
    title: 'Instant Money Moves',
    desc: 'Send & receive funds in seconds, anywhere',
  },
]

/* ─────────────────────────────────────────────
   HERO SLIDESHOW
───────────────────────────────────────────── */
function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), 4000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="absolute inset-0 overflow-hidden">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img src={slide.url} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   INFINITE LOGO SCROLL
───────────────────────────────────────────── */
function LogoScroll() {
  const doubled = [...PARTNER_LOGOS, ...PARTNER_LOGOS]
  return (
    <section className="py-12 bg-muted/30 border-y border-border overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-6">
        Trusted Partners & Networks
      </p>
      <div className="relative">
        <div className="flex gap-16 animate-[marquee_28s_linear_infinite] whitespace-nowrap">
          {doubled.map((logo, i) => (
            <div key={i} className="flex items-center shrink-0 h-10 opacity-60 hover:opacity-100 transition-opacity">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 max-w-[110px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted/30 to-transparent" />
      </div>

      {/* Keyframe injected as a style tag */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-20 md:py-28 px-4 bg-background" id="support">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/60 text-base md:text-lg">
            Everything you need to know about Capital City Bank
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/40 bg-primary/5' : 'border-border bg-card/60'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-semibold text-foreground text-sm md:text-base">{faq.q}</span>
                  <span className="shrink-0 text-primary">
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-5 md:px-6 pb-5 text-foreground/70 text-sm md:text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function HomePage() {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroSlide, setHeroSlide] = useState(0)

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Support', href: '#support' },
  ]

  useEffect(() => {
    const id = setInterval(() => setHeroSlide(c => (c + 1) % HERO_SLIDES.length), 4000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!loading && isAuthenticated) router.push('/dashboard')
  }, [isAuthenticated, loading, router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-foreground/60">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60" />
              <span className="text-xl font-bold text-foreground">Capital City Bank</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex gap-3">
              <Button onClick={() => router.push('/login')}>Sign In</Button>
              <Button onClick={() => router.push('/signup')}>Get Started</Button>
            </div>
            <button
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                {navItems.map(item => (
                  <a key={item.label} href={item.href}
                    className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors px-2 py-2 hover:bg-accent rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button variant="ghost" className="w-full" onClick={() => { setMobileMenuOpen(false); router.push('/login') }}>Sign In</Button>
                  <Button className="w-full" onClick={() => { setMobileMenuOpen(false); router.push('/signup') }}>Get Started</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ── HERO WITH BACKGROUND SLIDESHOW ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: heroSlide === i ? 1 : 0 }}
            >
              <img src={slide.url} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${heroSlide === i ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 w-full pt-24 pb-20">
          <div className="max-w-2xl">
            {/* Animated headline — changes with slide */}
            {HERO_SLIDES.map((slide, i) => (
              <div
                key={i}
                className="transition-all duration-700 absolute"
                style={{
                  opacity: heroSlide === i ? 1 : 0,
                  transform: heroSlide === i ? 'translateY(0)' : 'translateY(20px)',
                  pointerEvents: heroSlide === i ? 'auto' : 'none',
                  position: heroSlide === i ? 'relative' : 'absolute',
                }}
              >
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/20 border border-primary/30 px-3 py-1 rounded-full mb-5">
                  Digital Banking
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
                  {slide.headline.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-amber-400">
                    {slide.headline.split(' ').at(-1)}
                  </span>
                </h1>
                <p className="text-base md:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">{slide.sub}</p>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button size="lg" className="text-base px-10 py-6 shadow-lg shadow-primary/30" onClick={() => router.push('/signup')}>
                Start Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="text-base px-10 py-6 border-white/30 text-white hover:bg-white/10" onClick={() => router.push('/login')}>
                Sign In
              </Button>
            </div>

            {/* Mini Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
              {[['500K+', 'Users'], ['$2B+', 'Volume'], ['99.9%', 'Uptime']].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white">{val}</div>
                  <div className="text-xs text-white/50">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INFINITE LOGO SCROLL ── */}
      <LogoScroll />

      {/* ── IMAGE FEATURE CARDS ── */}
      <section className="py-20 md:py-28 px-4" id="features">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Built for the Modern World
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-base md:text-lg">
              Cutting-edge features that make everyday banking effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {IMAGE_CARDS.map((card, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden h-80 md:h-96 cursor-pointer"
              >
                {/* Background image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{card.tag}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-white/70 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{card.desc}</p>
                  <div className="w-8 h-0.5 bg-primary transition-all duration-300 group-hover:w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO SERVICES SECTION ── */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden" id="products">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 md:mb-16 text-center md:text-left md:ml-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
              Built for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Everyone</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto md:mx-0">From students to businesses, we've got the tools you need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Large image card */}
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden h-72 md:h-auto group">
              <img
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=900&q=80"
                alt="Premium Savings"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-black/60" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Premium Savings</h3>
                <p className="text-white/80 text-base md:text-lg mb-5">Earn up to 4.5% APY. Your money works harder for you.</p>
                <Button variant="secondary" size="sm" className="w-fit">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <Card className="p-6 md:p-8 bg-card/80 backdrop-blur border-primary/10 hover:border-primary/30 transition-all">
              <CreditCard className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Credit Cards</h3>
              <p className="text-sm text-foreground/60">Cashback & rewards on every purchase</p>
            </Card>

            <Card className="p-6 md:p-8 bg-card/80 backdrop-blur border-primary/10 hover:border-primary/30 transition-all">
              <Smartphone className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Mobile First</h3>
              <p className="text-sm text-foreground/60">Bank on the go with our app</p>
            </Card>

            {/* Wide image card */}
            <div className="relative rounded-3xl overflow-hidden h-48 group">
              <img
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80"
                alt="Smart Investments"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <PiggyBank className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-lg font-bold text-white">Smart Investments</h3>
                <p className="text-xs text-white/70">AI-powered portfolio management</p>
              </div>
            </div>

            <Card className="p-6 md:p-8 bg-card/80 backdrop-blur border-primary/10 hover:border-primary/30 transition-all">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-sm text-foreground/60">Always here to help</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <FAQ />

      {/* ── CTA SECTION ── */}
      <section className="relative py-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-foreground text-background p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
            <div className="max-w-lg mx-auto md:mx-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Start Your Journey</h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-80">
                Join 500,000+ users building their financial future with Capital City Bank
              </p>
              <Button size="lg" variant="secondary" className="text-base px-10 py-6 w-full md:w-auto" onClick={() => router.push('/signup')}>
                Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs mt-4 opacity-60">No credit card required • Free forever</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-background p-8 sm:p-12 md:p-16 lg:p-20 flex items-center">
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
              {[
                [DollarSign, '$2B+', 'Transaction Volume'],
                [Users, '500K+', 'Happy Users'],
                [Shield, '99.9%', 'Uptime SLA'],
                [Star, '4.9/5', 'User Rating'],
              ].map(([Icon, val, label], i) => (
                <div key={i} className="text-center p-4 md:p-6 bg-card/50 backdrop-blur rounded-2xl border border-primary/20">
                  {/* @ts-ignore */}
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{val as string}</div>
                  <div className="text-xs md:text-sm text-foreground/60">{label as string}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 grid-cols-2 md:grid-cols-4 py-12 md:py-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60" />
                <span className="text-xl font-bold text-foreground">Capital City Bank</span>
              </div>
              <p className="text-sm text-foreground/70">Modern digital banking for the modern world. Secure, fast, and reliable.</p>
            </div>
            {[
              { heading: 'Products', links: ['Checking', 'Savings', 'Credit Cards', 'Investments'] },
              { heading: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
              { heading: 'Support', links: ['Help Center', 'Contact Us', 'Security', 'Privacy Policy'] },
            ].map(col => (
              <div key={col.heading}>
                <h4 className="font-semibold text-foreground mb-4">{col.heading}</h4>
                <ul className="space-y-3 text-sm text-foreground/70">
                  {col.links.map(l => <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border py-8 text-center text-sm text-foreground/60">
            <p>&copy; {new Date().getFullYear()} Capital City Bank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}