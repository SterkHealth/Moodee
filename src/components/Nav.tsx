"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            mood<span>ee</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/services">What We Treat</Link></li>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/book">Book Free Consult</Link></li>
          </ul>
          <div className="nav-cta">
            <Link href="/book" className="btn-primary">Book Free Consult</Link>
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <Link href="/services" onClick={() => setOpen(false)}>What We Treat</Link>
        <Link href="/about" onClick={() => setOpen(false)}>Our Story</Link>
        <Link href="/book" onClick={() => setOpen(false)}>Book Free Consult</Link>
      </div>
    </>
  );
}
