'use client'

import { useRouter } from 'next/navigation'
import {
    ShieldAlert, Code2, Database, Lock, User, Globe,
    ArrowLeft, ExternalLink, AlertTriangle, Info, CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const SECTIONS = [
    {
        icon: AlertTriangle,
        color: 'text-amber-500',
        bg: 'bg-amber-500/10 border-amber-500/20',
        title: 'Not a Real Bank',
        body: `Trustwood is a fictional brand created solely for portfolio and demonstration purposes. It is not a licensed financial institution, does not hold a banking charter, and is not regulated by any financial authority including the FDIC, FCA, or CBN. No real banking services are offered.`,
    },
    {
        icon: Database,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10 border-blue-500/20',
        title: 'No Real Data Collected',
        body: `Any information you enter into this application — including names, email addresses, passwords, or account details — is not transmitted to any third party, is not stored in a production database, and is not used for any commercial purpose. This is a front-end/UI demonstration only.`,
    },
    {
        icon: Lock,
        color: 'text-green-500',
        bg: 'bg-green-500/10 border-green-500/20',
        title: 'No Financial Transactions',
        body: `No real money is moved, stored, or processed through this platform. Any transaction figures, balances, or account numbers displayed are entirely fictitious and exist only as UI placeholders to simulate realistic banking flows.`,
    },
    {
        icon: User,
        color: 'text-purple-500',
        bg: 'bg-purple-500/10 border-purple-500/20',
        title: 'Do Not Enter Real Credentials',
        body: `Please do not enter your real bank account details, social security number, government-issued ID, or any sensitive personal information into this demo. This platform is not secured to the standard required for real financial data.`,
    },
    {
        icon: Code2,
        color: 'text-primary',
        bg: 'bg-primary/10 border-primary/20',
        title: 'Purpose of This Project',
        body: `This project was built as a software engineering and UI/UX portfolio demonstration. It showcases full-stack development skills including Next.js, TypeScript, authentication flows, and responsive design — all within a realistic product context.`,
    },
    {
        icon: Globe,
        color: 'text-rose-500',
        bg: 'bg-rose-500/10 border-rose-500/20',
        title: 'Third-Party Logos & Branding',
        body: `Any third-party logos (Visa, Mastercard, PayPal, etc.) displayed on this site are used purely for visual demonstration of a realistic UI. Their appearance does not imply any partnership, endorsement, or affiliation with those companies.`,
    },
]

const FACTS = [
    { label: 'Site Type', value: 'Portfolio / UI Demo' },
    { label: 'Data Storage', value: 'None (demo only)' },
    { label: 'Real Transactions', value: 'None' },
    { label: 'FDIC Insured', value: 'No — fictional brand' },
    { label: 'Developer', value: 'Independent Software Engineer' },
    { label: 'Frameworks', value: 'Next.js · TypeScript · Tailwind' },
]

export default function DisclaimerPage() {
    const router = useRouter()

    return (
        <main className="min-h-screen bg-background">

            {/* Ambient background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            {/* Top warning banner — very visible for crawlers */}
            <div className="relative z-50 bg-amber-500 text-black text-center py-3 px-4">
                <div className="flex items-center justify-center gap-2 font-bold text-sm md:text-base">
                    <ShieldAlert className="h-5 w-5 shrink-0" />
                    DEMO PROJECT — This is NOT a real bank. No real financial services are provided.
                </div>
            </div>

            <div className="relative mx-auto max-w-4xl px-4 md:px-8 py-12 md:py-20">

                {/* Back button */}
                <button
                    onClick={() => router.push('/')}
                    className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-10 group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-500/15 border border-amber-500/30 mb-6">
                        <ShieldAlert className="h-10 w-10 text-amber-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                        Demo Site
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                            Disclaimer
                        </span>
                    </h1>
                    <p className="text-foreground/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Please read before interacting with this application. Trustwood is a
                        fictional product built for demonstration and portfolio purposes only.
                    </p>

                    {/* At-a-glance badge */}
                    <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-600 dark:text-green-400 font-medium">
                        <CheckCircle2 className="h-4 w-4" />
                        Safe to browse — no malware, no real data collection
                    </div>
                </div>

                {/* Quick facts table */}
                <div className="mb-12 rounded-2xl border border-border bg-card/60 backdrop-blur overflow-hidden">
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-border bg-muted/30">
                        <Info className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">Quick Facts</span>
                    </div>
                    <div className="divide-y divide-border">
                        {FACTS.map(({ label, value }) => (
                            <div key={label} className="flex items-center justify-between px-6 py-4">
                                <span className="text-sm text-foreground/60">{label}</span>
                                <span className="text-sm font-semibold text-foreground">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section cards */}
                <div className="space-y-4 mb-16">
                    {SECTIONS.map(({ icon: Icon, color, bg, title, body }) => (
                        <div
                            key={title}
                            className={`rounded-2xl border p-5 md:p-6 ${bg} transition-all hover:scale-[1.01]`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`mt-0.5 shrink-0 ${color}`}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-foreground mb-2 text-base md:text-lg">{title}</h2>
                                    <p className="text-foreground/70 text-sm md:text-base leading-relaxed">{body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legal boilerplate */}
                <div className="rounded-2xl border border-border bg-muted/20 p-6 md:p-8 mb-10 text-xs md:text-sm text-foreground/50 leading-relaxed space-y-3">
                    <p className="font-semibold text-foreground/70 text-sm md:text-base">Legal Notice</p>
                    <p>
                        "Trustwood" is a fictitious name used exclusively for this demonstration application.
                        Any resemblance to a real banking institution by name, logo, or service description is
                        coincidental. The developer makes no representations that this application is affiliated
                        with or endorsed by any real financial entity.
                    </p>
                    <p>
                        This application is provided "as is" without warranty of any kind. The developer assumes
                        no liability for any damages arising from the use or misuse of this demo application.
                        All statistics, figures, and financial data displayed are fictional and generated for
                        illustrative purposes only.
                    </p>
                    <p>
                        If you arrived here via a security warning from your browser, please be assured this site
                        does not contain malware, collect sensitive data, or engage in phishing activity.
                        This disclaimer page has been created specifically to clarify the non-commercial,
                        non-financial nature of this project.
                    </p>
                </div>

                {/* Footer actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
                    <p className="text-xs text-foreground/40">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <div className="flex gap-3">
                        <Button variant="outline" size="sm" onClick={() => router.push('/')}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Demo
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open('https://transparencyreport.google.com/safe-browsing/search', '_blank')}
                        >
                            Google Safe Browsing
                            <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}