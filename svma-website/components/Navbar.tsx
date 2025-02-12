import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useAuth, UserButton, SignInButton } from "@clerk/nextjs";
import styles from "../styles/Navbar.module.css";
import { useTranslation } from "../context/TranslationContext";

export default function Navbar() {
  const { registerText } = useTranslation();
  const { signOut, isSignedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [coolSculptingDropdown, setCoolSculptingDropdown] = useState(false);
  const navRef = useRef(null);

  // Close all dropdowns
  const closeDropdowns = () => {
    setServicesDropdown(false);
    setCoolSculptingDropdown(false);
    setAboutDropdown(false);
    setMenuOpen(false);
  };

  // Close hamburger menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logoHD.PNG" alt="SVMA Logo" width={350} height={150} />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li><Link href="/" onClick={closeDropdowns}>{registerText("home", "Home")}</Link></li>

          {/* Services Dropdown */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <span className={styles.dropdownTitle}>
              <Link href="#">{registerText("services", "Services")}</Link>▾
            </span>
            {servicesDropdown && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/services" onClick={closeDropdowns}>{registerText("allServices", "All Services")}</Link></li>
                <li><Link href="/services/neurotoxins" onClick={closeDropdowns}>{registerText("botox", "Neuromodulators (Botox)")}</Link></li>
                <li><Link href="/services/dermal-fillers" onClick={closeDropdowns}>{registerText("dermalFillers", "Dermal Fillers")}</Link></li>
                <li><Link href="/services/laser-hair-removal" onClick={closeDropdowns}>{registerText("laserHair", "Laser Hair Removal")}</Link></li>
                <li><Link href="/services/laser-skin-rejuvenation" onClick={closeDropdowns}>{registerText("skinRejuvenation", "Laser Skin Rejuvenation")}</Link></li>
                <li><Link href="/services/microneedling" onClick={closeDropdowns}>{registerText("microneedling", "Microneedling")}</Link></li>
                <li><Link href="/services/pdo-threads" onClick={closeDropdowns}>{registerText("pdoThreads", "PDO Threads")}</Link></li>

                {/* CoolSculpting Dropdown */}
                <li
                  className={styles.subDropdown}
                  onMouseEnter={() => setCoolSculptingDropdown(true)}
                  onMouseLeave={() => setCoolSculptingDropdown(false)}
                >
                  <span className={styles.dropdownTitle}>
                    <Link href="/services/coolsculpting">{registerText("coolsculpting", "CoolSculpting")}</Link>▾
                  </span>
                  {coolSculptingDropdown && (
                    <ul className={styles.dropdownSubMenu}>
                      <li><Link href="/services/coolsculpting/cooltone" onClick={closeDropdowns}>{registerText("cooltone", "CoolTone")}</Link></li>
                    </ul>
                  )}
                </li>

                <li><Link href="/services/prf-hair-restoration" onClick={closeDropdowns}>{registerText("prfHair", "PRF Hair Restoration")}</Link></li>
                <li><Link href="/services/biostimulators" onClick={closeDropdowns}>{registerText("biostimulators", "Biostimulators")}</Link></li>
                <li><Link href="/services/rf-microneedling" onClick={closeDropdowns}>{registerText("rfMicroneedling", "Radio Frequency Microneedling")}</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/financing" onClick={closeDropdowns}>{registerText("financing", "Financing")}</Link></li>
          <li><Link href="https://salinas-valley-medical-aesthetics-inc.square.site/" onClick={closeDropdowns}>{registerText("store", "Store")}</Link></li>
          <li><Link href="/testimonials" onClick={closeDropdowns}>{registerText("testimonials", "Testimonials")}</Link></li>
          <li><Link href="/galleries" onClick={closeDropdowns}>{registerText("galleries", "Galleries")}</Link></li>
          <li><Link href="/contact" onClick={closeDropdowns}>{registerText("contact", "Contact")}</Link></li>

          {/* About Us Dropdown */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <Link href="/about" className={styles.dropdownTitle}>{registerText("about", "About")}</Link>▾
            {aboutDropdown && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/meet-the-team" onClick={closeDropdowns}>{registerText("meetTheTeam", "Meet The Team")}</Link></li>
              </ul>
            )}
          </li>

          {/* Authentication Buttons */}
          {/* {isSignedIn ? (
            <>
              <li className={styles.logout}>
                <button onClick={() => signOut()} className={styles.logoutButton}>
                  {registerText("logout", "Logout")}
                </button>
              </li>
              <li><UserButton /></li>
            </>
          ) : (
            <li className={styles.login}>
              <SignInButton mode="modal">
                <button className={styles.loginButton}>{registerText("login", "Login")}</button>
              </SignInButton>
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
}
