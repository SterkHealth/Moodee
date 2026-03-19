"use client";
import { useState } from "react";
import styles from "./book.module.css";

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.tag}>Free Consultation</div>
            <h1 className={styles.title}>
              Book your free<br /><em>15-minute consult</em>
            </h1>
            <p className={styles.sub}>
              No referral needed. No commitment. Just a chance to speak with a
              specialist who will actually listen — and tell you what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className={styles.main}>
        <div className="container">
          <div className={styles.mainInner}>

            {/* Left: Benefits */}
            <div className={styles.benefits}>
              <h2 className={styles.benefitsTitle}>What to expect</h2>
              {[
                {
                  icon: "🕐",
                  title: "15 minutes, no charge",
                  desc: "A genuine conversation about your symptoms and how we can help — completely free.",
                },
                {
                  icon: "👩‍⚕️",
                  title: "Speak with a specialist",
                  desc: "You'll be matched with a doctor who specialises in your specific condition.",
                },
                {
                  icon: "💻",
                  title: "100% online",
                  desc: "Wherever you are in Australia, we can see you via secure video call.",
                },
                {
                  icon: "📋",
                  title: "Get a clear next step",
                  desc: "Leave the call knowing exactly what to do next — whether that's booking treatment or just learning more.",
                },
              ].map((b) => (
                <div key={b.title} className={styles.benefit}>
                  <div className={styles.benefitIcon}>{b.icon}</div>
                  <div>
                    <div className={styles.benefitTitle}>{b.title}</div>
                    <div className={styles.benefitDesc}>{b.desc}</div>
                  </div>
                </div>
              ))}

              <div className={styles.trustBox}>
                <p className={styles.trustText}>
                  "I booked a free consult not expecting much — and left with more
                  clarity than I'd had in 5 years of GP visits."
                </p>
                <div className={styles.trustAuthor}>— Emma, PCOS patient</div>
              </div>
            </div>

            {/* Right: Form */}
            <div className={styles.formWrap}>
              {submitted ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>🌸</div>
                  <h2 className={styles.successTitle}>You're booked in!</h2>
                  <p className={styles.successText}>
                    We'll send you a confirmation email shortly with your consult
                    details. We can't wait to meet you.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className={styles.formTitle}>Request your free consult</h2>
                  <p className={styles.formSub}>We'll confirm your time within 2 hours.</p>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Full name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="Your name"
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Email address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="hello@email.com"
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Phone number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="0400 000 000"
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>What brings you to Moodee? *</label>
                      <select
                        name="condition"
                        value={form.condition}
                        onChange={handleChange}
                        required
                        className={styles.select}
                      >
                        <option value="">Select a condition</option>
                        <option>PCOS</option>
                        <option>Endometriosis</option>
                        <option>Menopause / Perimenopause</option>
                        <option>Hormonal Imbalance</option>
                        <option>PMDD</option>
                        <option>Menstrual Health</option>
                        <option>Not sure — I need guidance</option>
                      </select>
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Tell us a little more (optional)</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className={styles.textarea}
                        rows={4}
                        placeholder="Any symptoms, history, or questions you'd like to share..."
                      />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "16px 32px" }}>
                      Request my free consult →
                    </button>
                    <p className={styles.formNote}>
                      By submitting, you agree to our privacy policy. We never share your data.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
