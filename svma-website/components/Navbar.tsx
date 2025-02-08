import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css"; // Custom styles

export default function Navbar() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [coolSculptingDropdown, setCoolSculptingDropdown] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">SVMA</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>

        {/* Services Dropdown */}
       {/* Services Dropdown */}
<li
  className={styles.dropdown}
  onMouseEnter={() => setServicesDropdown(true)}
  onMouseLeave={() => {
    setServicesDropdown(false);
    setCoolSculptingDropdown(false);
  }}
>
  <Link href="/services" className={styles.dropdownTitle}>Services ▾</Link> {/* Make Services Clickable */}
  {servicesDropdown && (
    <ul className={styles.dropdownMenu}>
      <li><Link href="/services/neurotoxins">Neuromodulators (Botox)</Link></li>
      <li><Link href="/services/dermal-fillers">Dermal Fillers</Link></li>
      <li><Link href="/services/laser-hair-removal">Laser Hair Removal</Link></li>
      <li><Link href="/services/laser-skin-rejuvenation">Laser Skin Rejuvenation</Link></li>
      <li><Link href="/services/microneedling">Microneedling</Link></li>
      <li><Link href="/services/pdo-threads">PDO Threads</Link></li>

      {/* CoolSculpting Dropdown */}
      <li
        className={styles.subDropdown}
        onMouseEnter={() => setCoolSculptingDropdown(true)}
        onMouseLeave={() => setCoolSculptingDropdown(false)}
      >
      <span className={styles.dropdownTitle}>
        <Link href="/services/coolsculpting">CoolSculpting</Link> ▾
        </span>
        {coolSculptingDropdown && (
              <ul className={styles.dropdownSubMenu}>
            <li><Link href="/services/coolsculpting/cooltone">CoolTone</Link></li>
           </ul>
        )}
      </li>

      <li><Link href="/services/prf-hair-restoration">PRF Hair Restoration</Link></li>
      <li><Link href="/services/biostimulators">Biostimulators</Link></li>
      <li><Link href="/services/rf-microneedling">Radio Frequency Microneedling</Link></li>
    </ul>
  )}
</li>


        <li><Link href="/financing">Financing</Link></li>
        <li><Link href="/store">Store</Link></li>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/gallery">Galleries</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>

        {/* About Us Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
        >
          <Link href="/about" className={styles.dropdownTitle}>About Us ▾</Link>
          {aboutDropdown && (
            <ul className={styles.dropdownMenu}>
              <li><Link href="/meet-the-team">Meet The Team</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
