import Link from "next/link";
import { FaMapMarkerAlt, FaGlobe, FaConciergeBell } from "react-icons/fa";
import { useTranslation } from "../context/TranslationContext";
import { useState, useEffect } from "react";
import styles from "../styles/FloatingNavbar.module.css";

export default function FloatingNavbar() {
  const { toggleLanguage, isSpanish } = useTranslation();
  const [hydrated, setHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setHydrated(true);

    // Check screen width and update state
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Hide navbar if screen width is >= 800px
  if (!isMobile) return null;

  return (
    <div className={styles.floatingNavbar}>
      <Link href="/services" className={styles.navItem}>
        <FaConciergeBell className={styles.icon} />
        <span>{hydrated ? (isSpanish ? "Servicios" : "Services") : "Loading..."}</span>
      </Link>
      <Link href="/contact" className={styles.navItem}>
        <FaMapMarkerAlt className={styles.icon} />
        <span>{hydrated ? (isSpanish ? "Ubicación" : "Location") : "Loading..."}</span>
      </Link>
      <button onClick={toggleLanguage} className={styles.navItem}>
        <FaGlobe className={styles.icon} />
        <span>{hydrated ? (isSpanish ? "English" : "Español") : "Loading..."}</span>
      </button>
    </div>
  );
}
