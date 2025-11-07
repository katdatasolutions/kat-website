import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function Container({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Provided logo in /public */}
          <img src="/KAT_logo.PNG" alt="KAT SOFTWARE SOLUTIONS" onError={(e)=>{e.currentTarget.style.display='none';}} className="h-10 w-auto object-contain" />
          <div className="hidden h-10 w-10 rounded-2xl bg-[#0B1F4D] text-white grid place-items-center font-bold">K</div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-[#0B1F4D]">KAT SOFTWARE SOLUTIONS</div>
            <div className="text-xs text-gray-500 -mt-1">Data-Driven Solutions for Smart Business Decisions</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" end className={({isActive})=>`hover:text-gray-900 ${isActive?"text-[#0B1F4D] font-semibold":"text-gray-600"}`}>Home</NavLink>
          <NavLink to="/services" className={({isActive})=>`hover:text-gray-900 ${isActive?"text-[#0B1F4D] font-semibold":"text-gray-600"}`}>Services</NavLink>
          <NavLink to="/about" className={({isActive})=>`hover:text-gray-900 ${isActive?"text-[#0B1F4D] font-semibold":"text-gray-600"}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>`hover:text-gray-900 ${isActive?"text-[#0B1F4D] font-semibold":"text-gray-600"}`}>Contact</NavLink>
        </nav>
        <div className="hidden md:block">
          <a href="https://wa.me/27627500582?text=Hello%20KAT%20SOFTWARE%20SOLUTIONS" className="text-sm px-3 py-1.5 rounded-lg border border-[#0B1F4D] text-white bg-[#0B1F4D]">WhatsApp</a>
        </div>
        <div className="md:hidden">
          <a href="#menu" className="text-sm px-3 py-1.5 rounded-lg border">Menu</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs">
        <span className="h-2 w-2 rounded-full" style={{background:'#4285F4'}} />
        <span className="h-2 w-2 rounded-full" style={{background:'#EA4335'}} />
        <span className="h-2 w-2 rounded-full" style={{background:'#FBBC05'}} />
        <span className="h-2 w-2 rounded-full" style={{background:'#34A853'}} />
        Trusted Data Consulting
      </div>
      <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight">
        Turn <span className="underline decoration-4" style={{textDecorationColor:'#0B1F4D'}}>data</span> into decisions
      </h1>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        We help South African businesses design modern data platforms, build reliable pipelines, and deliver actionable analytics using Azure, AWS, and GCP.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a href="https://wa.me/27627500582?text=Hello%20KAT%20SOFTWARE%20SOLUTIONS" className="px-5 py-3 rounded-xl bg-[#0B1F4D] text-white font-semibold">Book a consultation</a>
        <Link to="/services" className="px-5 py-3 rounded-xl border font-semibold">Explore services</Link>
      </div>
    </section>
  );
}

function Logos() {
  const items = ["Azure", "AWS", "GCP", "Power BI", "Tableau", "Qlik", "dbt", "Snowflake"];
  return (
    <section className="mt-14">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 items-center text-xs text-gray-500">
        {items.map((x) => (
          <div key={x} className="px-3 py-2 rounded-lg border bg-white text-center">{x}</div>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, children }) {
  return (
    <div className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg text-[#0B1F4D]">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{children}</p>
    </div>
  );
}

function HomePage() {
  return (
    <Container>
      <Hero />
      <Logos />
      <section className="mt-14">
        <h2 className="text-2xl font-bold">What we do</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">End‑to‑end data services tailored to your business outcomes.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="Data Analysis & Reporting">Executive-ready reports and self-service analytics that drive decisions.</ServiceCard>
          <ServiceCard title="Power BI / Tableau / Qlik Dashboards">Pixel-perfect, performant dashboards with governance best practices.</ServiceCard>
          <ServiceCard title="Data Engineering / ETL / Pipelines">Batch and streaming pipelines, orchestration and quality monitoring.</ServiceCard>
          <ServiceCard title="Database Design & Management">Relational and cloud-native data stores, tuned for performance.</ServiceCard>
          <ServiceCard title="Cloud Data Solutions (Azure / AWS / GCP)">Secure, scalable architectures on your preferred cloud.</ServiceCard>
          <ServiceCard title="Data Strategy Consulting">Roadmaps, operating models, and data governance frameworks.</ServiceCard>
          <ServiceCard title="AI & Predictive Analytics">From forecasting to NLP, deliver models that create value.</ServiceCard>
          <ServiceCard title="Training & Workshops">Upskill your teams on tools, modelling, and best practices.</ServiceCard>
          <ServiceCard title="Advisory Retainers">Ongoing guidance, architecture reviews, and hands-on support.</ServiceCard>
        </div>
      </section>

      <section className="mt-16">
        <div className="p-6 border rounded-2xl bg-gradient-to-br from-white to-gray-50">
          <h3 className="text-xl font-semibold">Need a quick assessment?</h3>
          <p className="text-gray-600 mt-2">Get a free 30‑minute discovery call to map opportunities and quick wins.</p>
          <Link to="/contact" className="mt-4 inline-block px-5 py-3 rounded-xl bg-[#0B1F4D] text-white font-semibold">Request a call</Link>
        </div>
      </section>
    </Container>
  );
}

function ServicesPage() {
  const items = [
    {
      title: "Data Analysis & Reporting",
      bullets: [
        "KPI frameworks and semantic models",
        "Power BI governance and Center of Excellence",
        "Automated reporting and scheduling",
      ],
    },
    {
      title: "Dashboards (Power BI / Tableau / Qlik)",
      bullets: [
        "UX-first dashboard design",
        "Row-level security and governance",
        "Performance optimisation",
      ],
    },
    {
      title: "Data Engineering / ETL / Pipelines",
      bullets: [
        "Modern ELT with dbt / Lakehouse",
        "Orchestration (Airflow, ADF, Step Functions)",
        "Monitoring and data quality (Great Expectations)",
      ],
    },
    {
      title: "Database Design & Management",
      bullets: [
        "Schema design and indexing",
        "Backups, DR and high availability",
        "Cost and performance tuning",
      ],
    },
    {
      title: "Cloud Data (Azure / AWS / GCP)",
      bullets: [
        "Architectures: Lakehouse, Warehouse, Streaming",
        "Security, IAM and compliance",
        "Cost management and FinOps",
      ],
    },
    {
      title: "Data Strategy & Governance",
      bullets: [
        "Data roadmap and operating model",
        "Cataloguing and lineage",
        "Policy, privacy and stewardship",
      ],
    },
    {
      title: "AI & Predictive Analytics",
      bullets: [
        "ML pipelines and MLOps",
        "Forecasting, classification, NLP",
        "Responsible AI and model governance",
      ],
    },
    {
      title: "Training & Workshops",
      bullets: [
        "Executive literacy and data culture",
        "Tooling bootcamps (Power BI, dbt, SQL)",
        "Custom enablement for teams",
      ],
    },
  ];

  return (
    <Container>
      <h1 className="text-3xl font-extrabold tracking-tight">Services</h1>
      <p className="text-gray-600 mt-2 max-w-3xl">
        Flexible engagement models: fixed-scope projects, time-and-materials, or advisory retainers.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((s) => (
          <div key={s.title} className="p-6 rounded-2xl border bg-white shadow-sm">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl border bg-white">
        <h3 className="text-lg font-semibold">Industries</h3>
        <p className="text-sm text-gray-600 mt-2">Financial services, retail, manufacturing, public sector, and SMEs.</p>
      </div>
    </Container>
  );
}

function AboutPage() {
  return (
    <Container>
      <h1 className="text-3xl font-extrabold tracking-tight">About KAT SOFTWARE SOLUTIONS</h1>
      <p className="mt-3 text-gray-700 max-w-3xl">
        KAT SOFTWARE SOLUTIONS is a South Africa–based data consulting firm. We design and build modern data platforms, develop analytics, and enable data-driven decision making. Our team brings deep experience across cloud, engineering, BI, and data strategy.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="p-6 rounded-2xl border bg-white">
          <h3 className="font-semibold">Our Approach</h3>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Business outcomes first</li>
            <li>Secure-by-default architectures</li>
            <li>Incremental value with agile delivery</li>
            <li>Knowledge transfer and enablement</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border bg-white">
          <h3 className="font-semibold">Certifications & Tooling</h3>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Azure/AWS/GCP practitioner experience</li>
            <li>Power BI, Tableau, Qlik</li>
            <li>SQL, Python, dbt, Spark</li>
            <li>Snowflake, BigQuery, Databricks</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

function ContactPage() {
  return (
    <Container>
      <h1 className="text-3xl font-extrabold tracking-tight">Contact</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">Tell us about your data goals and challenges. We'll get back to you within one business day.</p>

      {/* Netlify form compatible */}
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="mt-8 grid gap-4 max-w-xl">
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <div>
          <label className="text-sm font-medium">Name</label>
          <input name="name" required className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" name="email" required className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="you@company.com" />
        </div>
        <div>
          <label className="text-sm font-medium">Company</label>
          <input name="company" className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="Company name" />
        </div>
        <div>
          <label className="text-sm font-medium">How can we help?</label>
          <textarea name="message" rows={5} className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="Briefly describe your needs" />
        </div>
        <button type="submit" className="px-5 py-3 rounded-xl bg-[#0B1F4D] text-white font-semibold">Send message</button>
        <a href="https://wa.me/27627500582?text=Hello%20KAT%20SOFTWARE%20SOLUTIONS" className="px-5 py-3 rounded-xl border font-semibold text-center">Or chat on WhatsApp</a>
      </form>

      <div className="mt-10 text-sm text-gray-600">
        <div className="font-semibold">Business Info</div>
        <div>KAT SOFTWARE SOLUTIONS</div>
        <div>Johannesburg, South Africa</div>
        <div>Email: info@katsoftwaresolutions.co.za</div>
        <div>Phone: +27 62 750 0582</div>
      </div>
    </Container>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} KAT SOFTWARE SOLUTIONS. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <Link to="/services" className="hover:text-[#0B1F4D]">Services</Link>
          <Link to="/about" className="hover:text-[#0B1F4D]">About</Link>
          <Link to="/contact" className="hover:text-[#0B1F4D]">Contact</Link>
          <a href="https://wa.me/27627500582?text=Hello%20KAT%20SOFTWARE%20SOLUTIONS" className="hover:text-[#0B1F4D]">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
