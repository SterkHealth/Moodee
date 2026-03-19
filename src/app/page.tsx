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
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={styles.rotatingWord}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
      }}
    >
      {wordList[index]}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-fade-up delay-1`}>
              <span className={styles.badgeDot} />
              Specialist Women's Hormonal Health
            </div>
            <h1 className={`${styles.heroTitle} animate-fade-up delay-2`}>
              A new standard of care for
              <br />
              <RotatingWord />
            </h1>
            <p className={`${styles.heroSub} animate-fade-up delay-3`}>
              Expert online care for PCOS, Endometriosis, Menopause and hormonal
              health. No waitlists. No dismissal. Just answers — fast.
            </p>
            <div className={`${styles.heroCtas} animate-fade-up delay-4`}>
              <Link href="/book" className="btn-primary">
                Book your free consultation →
              </Link>
              <Link href="/services" className="btn-outline">
                What we treat
              </Link>
            </div>
            <div className={`${styles.heroTrust} animate-fade-up delay-4`}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span> No referral needed
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span> 100% online
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span> Medicare rebates available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { num: "1 in 9", label: "women have Endometriosis" },
              { num: "1 in 10", label: "women have PCOS" },
              { num: "7+ years", label: "average diagnosis delay" },
              { num: "0 days", label: "waitlist at Moodee" },
            ].map((s) => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>Simple & Fast</div>
            <h2 className={styles.sectionTitle}>Care in three easy steps</h2>
          </div>
          <div className={styles.stepsGrid}>
            {[
              {
                num: "01",
                title: "Book your free consult",
                desc: "Choose a time that suits you. No GP referral needed — just book directly with one of our specialists.",
              },
              {
                num: "02",
                title: "Meet your specialist",
                desc: "Connect via video from wherever you are. Our doctors listen deeply, take your symptoms seriously, and never dismiss your experience.",
              },
              {
                num: "03",
                title: "Get your care plan",
                desc: "Receive a personalised treatment plan combining evidence-based medicine and holistic care — delivered straight to you.",
              },
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

      {/* ── CONDITIONS ── */}
      <section className={styles.conditions}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>What We Treat</div>
            <h2 className={styles.sectionTitle}>
              Specialist care for every stage
            </h2>
            <p className={styles.sectionSub}>
              From first symptoms to long-term management — we're with you every step.
            </p>
          </div>
          <div className={styles.conditionsGrid}>
            {[
              {
                icon: "🌀",
                name: "PCOS",
                desc: "Polycystic ovary syndrome affects hormones, cycles, fertility and metabolism. We create plans that actually work.",
                href: "/services#pcos",
              },
              {
                icon: "🩸",
                name: "Endometriosis",
                desc: "Years of being dismissed ends here. We specialise in diagnosis support, pain management and long-term care.",
                href: "/services#endometriosis",
              },
              {
                icon: "🌿",
                name: "Menopause & Perimenopause",
                desc: "Hot flushes, brain fog, mood changes — we offer evidence-based HRT and holistic support for every symptom.",
                href: "/services#menopause",
              },
              {
                icon: "⚡",
                name: "Hormonal Imbalance",
                desc: "Fatigue, weight changes, irregular periods — we investigate the root cause and create a plan to restore balance.",
                href: "/services#hormones",
              },
              {
                icon: "🧠",
                name: "PMDD",
                desc: "Severe premenstrual dysphoric disorder requires specialist care. We take your experience seriously.",
                href: "/services#pmdd",
              },
              {
                icon: "💗",
                name: "Menstrual Health",
                desc: "Heavy, painful or irregular periods are not something you just have to live with. Let us help.",
                href: "/services#menstrual",
              },
            ].map((c) => (
              <Link key={c.name} href={c.href} className={styles.conditionCard}>
                <div className={styles.conditionIcon}>{c.icon}</div>
                <h3 className={styles.conditionName}>{c.name}</h3>
                <p className={styles.conditionDesc}>{c.desc}</p>
                <span className={styles.conditionLink}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className={styles.testimonial}>
        <div className="container">
          <div className={styles.testimonialInner}>
            <div className={styles.quoteIcon}>"</div>
            <blockquote className={styles.quote}>
              After 6 years of being told my pain was normal, Moodee's doctor took
              one look at my history and finally gave me real answers. I was
              diagnosed with endometriosis within weeks and started a treatment plan
              that has changed my life.
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

      {/* ── BOTTOM CTA ── */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaOrb} />
            <h2 className={styles.ctaTitle}>
              You deserve care that<br />actually listens
            </h2>
            <p className={styles.ctaDesc}>
              Book your free 15-minute consultation today. No referral needed.
              Same-week appointments available.
            </p>
            <Link href="/book" className="btn-primary" style={{ fontSize: 16, padding: "16px 40px" }}>
              Book your free consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
