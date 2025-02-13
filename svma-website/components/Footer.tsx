import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Quick Links Section */}
      <div className={styles.officeContainer}>
        <div className={styles.officeInfo}>
          <h2>Our Office</h2>
          <p>📧 Email: <a href="mailto:Luz.svma@gmail.com">Luz.svma@gmail.com</a></p>
          <p>📞 Phone: <a href="tel:8319754175">831-975-4175</a></p>
          <p>📍 30 Central Avenue, Salinas, CA 93901</p>
        </div>
        <div className={styles.mapContainer}>
          <Link href="https://beta.maps.apple.com/?address=30+Central+Ave%2C+Salinas%2C+CA+93901%2C+United+States&ll=36.6769893%2C-121.6569679&q=30+Central+Ave" target="_blank">
            <Image src="/images/Map.jpg" alt="Location Map" width={300} height={200} className={styles.mapImage} />
          </Link>
          <Link href="https://beta.maps.apple.com/?address=30+Central+Ave%2C+Salinas%2C+CA+93901%2C+United+States&ll=36.6769893%2C-121.6569679&q=30+Central+Ave" target="_blank">
            <Image src="/images/extMap.jpg" alt="Exterior Map" width={300} height={200} className={styles.mapImage} />
          </Link>
        </div>
      </div>
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

      {/* Our Office Section */}

        {/* Map Images Section */}

      {/* Logo Section (Centered) */}
      <div className={`${styles.footerSection} ${styles.logoContainer}`}>
        <Image
          src="/images/logoHD.jpeg"
          alt="SVMA Logo"
          width={450}
          height={225}
          className={styles.logo}
        />
      </div>
    </footer>
  );
}
