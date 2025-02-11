import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuth, UserButton, SignInButton } from "@clerk/nextjs";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const { signOut, isSignedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [coolSculptingDropdown, setCoolSculptingDropdown] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logoHD.PNG" alt="SVMA Logo" width={350} height={150} />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li><Link href="/">Home</Link></li>

          {/* Services Dropdown */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => {
              setServicesDropdown(false);
              setCoolSculptingDropdown(false);
            }}
          >
            <span className={styles.dropdownTitle}>
              <Link href="/services">Services</Link>▾
            </span>
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
          <li><Link href="https://salinas-valley-medical-aesthetics-inc.square.site/">Store</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/galleries">Galleries</Link></li>
          <li><Link href="/contact">Contact</Link></li>

          {/* About Us Dropdown */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <Link href="/about" className={styles.dropdownTitle}>About ▾</Link>
            {aboutDropdown && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/meet-the-team">Meet The Team</Link></li>
              </ul>
            )}
          </li>

          {/* Authentication Buttons */}
          {isSignedIn ? (
            <>
              <li className={styles.logout}>
                <button onClick={() => signOut()} className={styles.logoutButton}>
                  Logout
                </button>
              </li>
              <li><UserButton /></li>
            </>
          ) : (
            <li className={styles.login}>
              <SignInButton mode="modal">
                <button className={styles.loginButton}>Sign In</button>
              </SignInButton>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
