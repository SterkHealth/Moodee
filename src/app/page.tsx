"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const wordList = ["PCOS", "Endometriosis", "Menopause", "PMDD"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % wordList.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={styles.rotatingWord}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      {wordList[index]}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Women's Hormonal Health</span>
            <h1 className={`${styles.heroTitle} animate-fade-up delay-2`}>
              A new standard of care for <RotatingWord />
            </h1>
            <p className={`${styles.heroSub} animate-fade-up delay-3`}>
              Personalised, evidence-based care for women's hormonal health — online, accessible, and built around you.
            </p>
            <div className={`${styles.heroCtas} animate-fade-up delay-4`}>
              <Link href="/book" className="btn-light">
                Book free consultation
              </Link>
              <Link href="/services" style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase" as const,
                color: "rgba(0,0,0,0.4)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                paddingTop: 16
              }}>
                What we treat →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          {[
            { num: "1 in 9", label: "Women have Endometriosis" },
            { num: "1 in 10", label: "Women have PCOS" },
            { num: "7+ yrs", label: "Average diagnosis delay" },
            { num: "0 days", label: "Waitlist at Moodee" },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>How it works</div>
            <h2 className={styles.sectionTitle}>Care in three steps</h2>
            <p className={styles.sectionSub}>No referrals, no waitlists. Just expert care, fast.</p>
          </div>
          <div className={styles.stepsGrid}>
            {[
              { num: "01", title: "Book your free consult", desc: "Choose a time that suits you. No GP referral needed — book directly with one of our specialists." },
              { num: "02", title: "Meet your specialist", desc: "Connect via video from wherever you are. Our doctors listen deeply and never dismiss your experience." },
              { num: "03", title: "Get your care plan", desc: "Receive a personalised treatment plan combining evidence-based medicine and holistic care." },
            ].map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.conditions}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>What we treat</div>
            <h2 className={styles.sectionTitle}>Specialist care<br />for every stage</h2>
          </div>
          <div className={styles.conditionsGrid}>
            {[
              { name: "PCOS", desc: "Personalised plans for hormones, cycles, fertility and metabolism.", href: "/services#pcos" },
              { name: "Endometriosis", desc: "Diagnosis support, pain management and long-term specialist care.", href: "/services#endometriosis" },
              { name: "Menopause", desc: "Evidence-based HRT and holistic support for every symptom.", href: "/services#menopause" },
              { name: "Hormonal Health", desc: "Root cause investigation and a plan to restore your balance.", href: "/services#hormones" },
              { name: "PMDD", desc: "Specialist care for severe premenstrual dysphoric disorder.", href: "/services#pmdd" },
              { name: "Menstrual Health", desc: "Treatment for heavy, painful or irregular periods.", href: "/services#menstrual" },
            ].map((c) => (
              <Link key={c.name} href={c.href} className={styles.conditionCard}>
                <h3 className={styles.conditionName}>{c.name}</h3>
                <p className={styles.conditionDesc}>{c.desc}</p>
                <span className={styles.conditionLink}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <div className="container">
          <div className={styles.testimonialInner}>
            <div className={styles.quoteIcon}>"</div>
            <blockquote className={styles.quote}>
              After 6 years of being told my pain was normal, Moodee's doctor
              finally gave me real answers. I was diagnosed with endometriosis
              within weeks and started a treatment plan that changed my life.
            </blockquote>
            <div className={styles.quoteAuthor}>
              <div className={styles.quoteAvatar}>S</div>
              <div>
                <div className={styles.quoteName}>Sarah, 29</div>
                <div className={styles.quoteRole}>Endometriosis patient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className={styles.ctaBox}>
          <div className={styles.ctaOrb} />
          <h2 className={styles.ctaTitle}>
            You deserve care<br />that actually listens
          </h2>
          <p className={styles.ctaDesc}>
            Book your free 15-minute consultation today. No referral needed. Same-week appointments available.
          </p>
          <Link href="/book" className="btn-light">
            Book your free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
