import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Contact Section */}
      <div className={styles.footerSection}>
        <h2>Our Office</h2>
        <p>📍 30 Central Avenue, Salinas, CA 93901</p>
        <p>📧 Email: <a href="mailto:Luz.svma@gmail.com">Luz.svma@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:8319754175">831-975-4175</a></p>
      </div>
      {/* Quick Links Section */}
      <div className={styles.footerSection}>
        <h2>Quick Links</h2>
        <ul className={styles.footerLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/store">Online Store</Link></li>
          <li><Link href="/financing">Financing</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* Logo Section (Centered) */}

      <div className={`${styles.footerSection} ${styles.logoContainer}`}>
        <Image
          src="/images/logoHD.jpeg"
          alt="SVMA Logo"
          width={450}
          height={150}
          className={styles.logo}
        />
      </div>
    </footer>
  );
}
