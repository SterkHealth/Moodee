import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-logo">mood<span>ee</span></Link>
            <p className="footer-desc">
              Specialist women's hormonal health care — accessible, compassionate,
              and designed around you. No waitlists. Real answers.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/services">What We Treat</Link></li>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/book">Book a Consult</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Conditions</h4>
            <ul>
              <li><Link href="/services#pcos">PCOS</Link></li>
              <li><Link href="/services#endometriosis">Endometriosis</Link></li>
              <li><Link href="/services#menopause">Menopause</Link></li>
              <li><Link href="/services#hormones">Hormonal Health</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Moodee. All rights reserved.</p>
          <p>hello@moodee.co</p>
        </div>
      </div>
    </footer>
  );
}
