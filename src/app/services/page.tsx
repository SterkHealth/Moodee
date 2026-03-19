import Link from "next/link";
import styles from "./services.module.css";

const conditions = [
  {
    id: "pcos",
    icon: "🌀",
    name: "PCOS",
    full: "Polycystic Ovary Syndrome",
    tagline: "You are not alone — and you don't have to just manage.",
    about:
      "PCOS affects up to 1 in 10 women and is one of the most underdiagnosed hormonal conditions. It can cause irregular periods, weight changes, fertility challenges, acne, hair loss and more. At Moodee, we take a comprehensive, personalised approach that goes beyond telling you to 'eat less and exercise more'.",
    treatments: [
      "Hormonal regulation",
      "Cycle tracking & fertility support",
      "Metabolic health management",
      "Nutrition & lifestyle guidance",
      "Mental health support",
    ],
  },
  {
    id: "endometriosis",
    icon: "🩸",
    name: "Endometriosis",
    full: "Endometriosis",
    tagline: "Your pain is real. It's time for real answers.",
    about:
      "On average, women wait 7 years to receive an endometriosis diagnosis. We think that's unacceptable. Moodee's specialists understand endometriosis deeply — the pain, the impact on daily life, and the emotional toll. We work to get you answers quickly and create a management plan that actually helps.",
    treatments: [
      "Diagnostic pathway support",
      "Pain management strategies",
      "Hormonal & medical treatment",
      "Surgical referrals when needed",
      "Chronic condition long-term care",
    ],
  },
  {
    id: "menopause",
    icon: "🌿",
    name: "Menopause",
    full: "Menopause & Perimenopause",
    tagline: "This transition deserves expert support.",
    about:
      "Hot flushes, brain fog, sleep disturbance, mood swings, low libido — menopause symptoms can significantly impact your quality of life. Perimenopause can start years before your periods stop. Moodee offers evidence-based hormone replacement therapy (HRT), as well as holistic and lifestyle-based approaches tailored to your needs and health history.",
    treatments: [
      "Hormone replacement therapy (HRT)",
      "Sleep & mood support",
      "Bone & cardiovascular health",
      "Libido & sexual wellness",
      "Lifestyle & nutrition plans",
    ],
  },
  {
    id: "hormones",
    icon: "⚡",
    name: "Hormonal Health",
    full: "Hormonal Imbalance",
    tagline: "When something feels off — it usually is.",
    about:
      "Fatigue, weight changes, irregular periods, mood fluctuations, hair changes — these can all be signs of hormonal imbalance. Our specialists investigate the root cause through comprehensive testing and create a personalised plan to restore your balance naturally and medically.",
    treatments: [
      "Comprehensive hormone testing",
      "Thyroid health",
      "Adrenal fatigue support",
      "Cycle regulation",
      "Integrative hormone balancing",
    ],
  },
  {
    id: "pmdd",
    icon: "🧠",
    name: "PMDD",
    full: "Premenstrual Dysphoric Disorder",
    tagline: "Severe PMS is not something you should just push through.",
    about:
      "PMDD causes severe emotional and physical symptoms in the days before your period. It's often dismissed as 'just bad PMS' — but it's a recognised medical condition that significantly impacts life. Our doctors understand PMDD and offer effective, evidence-based treatments.",
    treatments: [
      "Cycle tracking & symptom mapping",
      "Hormonal therapy options",
      "Antidepressant treatment when appropriate",
      "Psychological support",
      "Lifestyle-based strategies",
    ],
  },
  {
    id: "menstrual",
    icon: "💗",
    name: "Menstrual Health",
    full: "Menstrual Health & Period Pain",
    tagline: "Heavy, painful periods are not something you just have to live with.",
    about:
      "Dysmenorrhea (period pain), heavy bleeding, irregular cycles and spotting can all affect quality of life and signal underlying conditions. Moodee investigates the cause and provides targeted treatment — not just painkillers.",
    treatments: [
      "Period pain treatment",
      "Heavy bleeding management",
      "Cycle regulation",
      "Contraceptive options",
      "Investigation for underlying conditions",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.tag}>Conditions We Treat</div>
            <h1 className={styles.title}>
              Care built around<br /><em>your</em> health
            </h1>
            <p className={styles.sub}>
              We specialise in women's hormonal health across every stage of life.
              Our doctors don't just treat symptoms — they investigate root causes
              and build long-term care plans that actually work.
            </p>
            <Link href="/book" className="btn-primary">Book a free consult →</Link>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className={styles.quickNav}>
        <div className="container">
          <div className={styles.quickNavInner}>
            {conditions.map((c) => (
              <a key={c.id} href={`#${c.id}`} className={styles.quickLink}>
                <span>{c.icon}</span> {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      {conditions.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className={`${styles.condition} ${i % 2 === 1 ? styles.conditionAlt : ""}`}
        >
          <div className="container">
            <div className={styles.conditionInner}>
              <div className={styles.conditionLeft}>
                <div className={styles.conditionIcon}>{c.icon}</div>
                <div className={styles.conditionTag}>{c.name}</div>
                <h2 className={styles.conditionTitle}>{c.full}</h2>
                <p className={styles.conditionTagline}>{c.tagline}</p>
                <p className={styles.conditionAbout}>{c.about}</p>
                <Link href="/book" className="btn-primary" style={{ marginTop: 16 }}>
                  Book a consult for {c.name} →
                </Link>
              </div>
              <div className={styles.conditionRight}>
                <div className={styles.treatmentBox}>
                  <h4 className={styles.treatmentTitle}>How we help</h4>
                  <ul className={styles.treatmentList}>
                    {c.treatments.map((t) => (
                      <li key={t} className={styles.treatmentItem}>
                        <span className={styles.treatmentCheck}>✓</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Not sure where to start?</h2>
            <p>Book a free 15-minute consultation and let our specialists guide you.</p>
            <Link href="/book" className="btn-primary">Book your free consult →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
