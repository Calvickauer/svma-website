import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          For over 10 years, Salinas Valley Medical Aesthetics has been helping people look and feel their best.
          With a combination of aesthetic treatments, we will help you achieve a natural rejuvenated result.
        </p>
      </div>

      <div className={styles.footerLinks}>
        <h3>Quick Links</h3>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/store">Online Store</Link></li>
          <li><Link href="/financing">Financing</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className={styles.footerContact}>
        <h3>Our Office</h3>
        <p>30 Central Avenue<br />Salinas, CA 93901</p>
        <p>Email: <a href="mailto:Luz.svma@gmail.com">Luz.svma@gmail.com</a></p>
        <p>Phone: <a href="tel:8319754175">831-975-4175</a></p>
      </div>
    </footer>
  );
}
