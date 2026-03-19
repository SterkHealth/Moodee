import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.tag}>Our Story</div>
              <h1 className={styles.title}>
                Born from frustration.<br />
                <em>Built with love.</em>
              </h1>
              <p className={styles.sub}>
                Moodee was founded by women who experienced firsthand the devastating
                gap in women's hormonal healthcare — and decided to do something about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionInner}>
            <div className={styles.missionLeft}>
              <div className={styles.missionStat}>
                <span className={styles.bigNum}>7+</span>
                <span className={styles.bigLabel}>years women wait for an endometriosis diagnosis on average</span>
              </div>
              <div className={styles.missionStat}>
                <span className={styles.bigNum}>75%</span>
                <span className={styles.bigLabel}>of women with PCOS remain undiagnosed</span>
              </div>
              <div className={styles.missionStat}>
                <span className={styles.bigNum}>0</span>
                <span className={styles.bigLabel}>days waitlist at Moodee</span>
              </div>
            </div>
            <div className={styles.missionRight}>
              <div className={styles.missionTag}>Why We Exist</div>
              <h2 className={styles.missionTitle}>
                The gap in women's healthcare is real
              </h2>
              <p className={styles.missionText}>
                Women's hormonal health has historically been dismissed, misunderstood,
                or simply underfunded. Conditions like endometriosis, PCOS, and PMDD
                affect millions of women — yet diagnosis timelines are measured in years,
                not weeks.
              </p>
              <p className={styles.missionText}>
                Too many women are told their pain is "normal," that their exhaustion
                is "just stress," or that they simply need to "lose weight." We built
                Moodee to change that — to create a clinic where women are believed,
                listened to, and given the expert care they deserve.
              </p>
              <p className={styles.missionText}>
                Our name, Moodee, reflects something we deeply believe: that your
                hormones affect everything — your mood, your energy, your clarity,
                your joy. When your hormones are balanced, you feel like yourself.
                That's what we work toward, every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <div className={styles.tag}>What We Believe</div>
            <h2 className={styles.valuesTitle}>Our values</h2>
          </div>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: "💛",
                title: "We believe you",
                desc: "Your symptoms are real. Your pain is valid. We never dismiss, minimise, or gaslight — full stop.",
              },
              {
                icon: "🔬",
                title: "Evidence-based care",
                desc: "We combine the best of conventional medicine with integrative approaches, grounded in research.",
              },
              {
                icon: "🌍",
                title: "Accessible to all",
                desc: "Online, affordable, no referral needed. Quality women's health care shouldn't depend on your postcode.",
              },
              {
                icon: "🤝",
                title: "Long-term partnership",
                desc: "We're not a one-off appointment service. We're a long-term health partner who grows with you.",
              },
            ].map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className={styles.team}>
        <div className="container">
          <div className={styles.teamHeader}>
            <div className={styles.tag}>Our Specialists</div>
            <h2 className={styles.teamTitle}>Doctors who truly specialise</h2>
            <p className={styles.teamSub}>
              Our clinical team specialises exclusively in women's hormonal health.
              They're here because they're passionate — not because it's just another appointment.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {[
              {
                initial: "A",
                name: "Dr. Amelia Rowe",
                role: "Women's Health Physician",
                spec: "PCOS · Endometriosis · Hormonal Health",
              },
              {
                initial: "S",
                name: "Dr. Sophie Chen",
                role: "Reproductive Endocrinologist",
                spec: "Menopause · Fertility · Hormonal Imbalance",
              },
              {
                initial: "L",
                name: "Dr. Lara Mehta",
                role: "Integrative Women's GP",
                spec: "PMDD · Menstrual Health · Holistic Care",
              },
            ].map((doc) => (
              <div key={doc.name} className={styles.docCard}>
                <div className={styles.docAvatar}>{doc.initial}</div>
                <h3 className={styles.docName}>{doc.name}</h3>
                <p className={styles.docRole}>{doc.role}</p>
                <p className={styles.docSpec}>{doc.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to be heard?</h2>
            <p>Book a free 15-minute consultation with one of our specialists today.</p>
            <Link href="/book" className="btn-primary">Book your free consult →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
