import Link from "next/link";
import Image from "next/image";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const services = [
  {
    title: "Engineering Consultancy",
    description:
      "End-to-end advisory for industrial, energy, and infrastructure projects with data-driven methodologies and elite talent.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M12 3 3 9l9 6 9-6-9-6Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 15l9 6 9-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9v12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Energy Efficiency",
    description:
      "Comprehensive audits, renewable integrations, and intelligent monitoring systems to optimize consumption and reduce costs.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M6 12a6 6 0 1 1 8.25 5.64L10 22v-5.5l4-4H9l1-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Project Management",
    description:
      "Agile delivery framework and rigorous quality assurance powering ambitious builds from concept to commissioning.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 6h18M3 12h12m-12 6h18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 10v4m-2-2h4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

const testimonials = [
  {
    name: "Amel Ben Salah",
    company: "CEO, Tunisie Énergies",
    quote:
      "Iceem.tn transformed our energy infrastructure with measurable impact. Their engineers deliver precision, transparency, and results.",
    avatar:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Karim Guedri",
    company: "Operations Director, Maghreb Industries",
    quote:
      "The team guided us from feasibility to execution flawlessly. Their project governance removed risks and elevated quality at every stage.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Nadia Farhat",
    company: "Facilities Manager, HealthTech Tunisia",
    quote:
      "A reliable partner who understands complex facilities. They unlocked new efficiencies while maintaining compliance and safety.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-brand-light">
      <a href="#main" className="sr-only sr-only-focusable">
        Skip to main content
      </a>

      <header className="hero-gradient relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            priority
            className="object-cover mix-blend-soft-light"
          />
        </div>
        <div className="section-wrapper relative z-10 grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-brand-light">
              Engineering Excellence
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Sustainable engineering solutions tailored for Tunisia&apos;s visionaries
            </h1>
            <p className="max-w-2xl text-lg text-slate-100 lg:text-xl">
              Iceem.tn blends technical mastery with local insight to deliver smart energy,
              infrastructure, and industrial innovations that unlock long-term value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-green px-8 py-3 text-base font-semibold text-brand-navy shadow-lg shadow-brand-green/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
              >
                Get a Quote
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-base font-semibold text-white transition duration-300 hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
              >
                Explore Services
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2 sm:gap-10">
              <div>
                <dt className="text-sm font-medium uppercase tracking-wide text-slate-200">Years of experience</dt>
                <dd className="mt-2 text-3xl font-semibold">15+</dd>
              </div>
              <div>
                <dt className="text-sm font-medium uppercase tracking-wide text-slate-200">Successful projects</dt>
                <dd className="mt-2 text-3xl font-semibold">200+</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="glass-card relative z-20 space-y-6 rounded-3xl bg-white/90 p-8 text-slate-900 shadow-2xl">
              <h2 className="text-2xl font-semibold text-brand-navy">
                Iceem.tn in numbers
              </h2>
              <p className="text-base text-slate-600">
                From industrial plants to smart buildings, we accompany clients through analysis,
                design, execution, and lifecycle optimization.
              </p>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-green" />
                  <span>Certified energy auditing and renewable integration expertise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-green" />
                  <span>Multidisciplinary engineering teams with on-site responsiveness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-green" />
                  <span>ROI-driven project management that aligns with your KPIs.</span>
                </li>
              </ul>
            </div>
            <div className="absolute -left-10 top-10 z-10 hidden h-32 w-32 rounded-full bg-brand-green/20 blur-3xl lg:block" />
            <div className="absolute -bottom-10 -right-10 z-10 hidden h-52 w-52 rounded-full bg-brand-blue/25 blur-3xl lg:block" />
          </div>
        </div>
      </header>

      <main id="main" className="space-y-24 pb-24">
        <section id="services" className="section-wrapper">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-brand-navy sm:text-4xl">
              Expertise engineered for measurable impact
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We design and execute resilient systems that advance sustainability, operational
              efficiency, and regulatory compliance for our partners.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        <section className="section-wrapper">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-brand-light px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy">
                Why Iceem.tn
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-brand-navy sm:text-4xl">
                Bridge strategic vision with operational excellence
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Each collaboration begins with a deep dive into your goals, constraints, and technical
                stack. The result is an actionable roadmap that fuses engineering rigor with business
                intelligence for long-term value.
              </p>
              <ul className="mt-8 grid gap-4">
                {[
                  "ISO-aligned methodologies for quality, safety, and energy performance.",
                  "Digitized reporting dashboards for transparent project oversight.",
                  "Lifecycle support from strategy to maintenance and continuous improvement."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-slate-600">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-brand-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="glass-card space-y-4 bg-white p-8">
                <h3 className="text-xl font-semibold text-brand-navy">Commitment to sustainability</h3>
                <p className="text-base text-slate-600">
                  The future of engineering in Tunisia is clean, efficient, and human-centered.
                  We align with national and international climate targets while delivering
                  pragmatic solutions tailored to your site realities.
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {[
                    { label: "Emission reductions achieved", stat: "30%" },
                    { label: "Average energy savings", stat: "22%" },
                    { label: "Client satisfaction score", stat: "4.8/5" },
                    { label: "24/7 support availability", stat: "Yes" }
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-brand-light bg-white/80 p-4 text-center shadow-sm">
                      <p className="text-2xl font-semibold text-brand-blue">{item.stat}</p>
                      <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-brand-blue/30 blur-2xl" />
            </div>
          </div>
        </section>

        <section className="section-wrapper">
          <TestimonialsCarousel testimonials={testimonials} />
        </section>

        <section id="contact" className="section-wrapper">
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-14 text-white shadow-xl">
            <div className="absolute inset-y-0 right-0 h-full w-1/2 opacity-10">
              <Image
                src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
                alt=""
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to elevate your next engineering project?
              </h2>
              <p className="text-lg text-slate-100">
                Share your ambitions with our specialists and receive a tailored roadmap within
                48 hours.
              </p>
              <Link
                href="mailto:contact@iceem.tn"
                className="inline-flex items-center rounded-full bg-brand-green px-8 py-3 text-base font-semibold text-brand-navy shadow-lg shadow-brand-green/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-navy text-slate-100">
        <div className="section-wrapper">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-white">Iceem.tn</p>
              <p className="text-sm text-slate-300">
                Engineering consultants delivering energy, industrial, and infrastructure excellence
                across Tunisia.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                Contact
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>
                  <a href="mailto:contact@iceem.tn" className="hover:text-brand-green">
                    contact@iceem.tn
                  </a>
                </li>
                <li>
                  <a href="tel:+21670000000" className="hover:text-brand-green">
                    +216 70 000 000
                  </a>
                </li>
                <li>14 Avenue de Carthage, Tunis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                Services
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {services.map((service) => (
                  <li key={service.title}>{service.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                Follow
              </h3>
              <ul className="mt-4 flex gap-4 text-slate-300">
                <li>
                  <a
                    href="https://www.linkedin.com/company/iceem"
                    className="hover:text-brand-green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/iceem"
                    className="hover:text-brand-green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/iceem"
                    className="hover:text-brand-green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
            © {new Date().getFullYear()} Iceem.tn. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
