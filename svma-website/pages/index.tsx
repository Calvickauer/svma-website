import React from "react";
import MeetTheTeam from "../pages/meet-the-team"; // Import MeetTheTeam
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../context/TranslationContext";

export default function Home() {
  const { registerText } = useTranslation();

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className={styles.heroSection}>
        <Image
          src="/images/Storefront2.jpeg"
          alt="Salinas Valley Medical Aesthetics Storefront"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.heroOverlay}>
          <Link href="/contact">
            <button className={styles.heroButton}>{registerText("contact", "Contact")}</button>
          </Link>
          <Link href="/promotions">
            <button className={styles.heroButton}>{registerText("promotions", "Current Promotions")}</button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <h2>{registerText("locationTitle", "SVMA Located in Salinas, CA")}</h2>
        <p>{registerText("intro1", "Salinas Valley Medical Aesthetics is a highly respected aesthetics practice, serving the community for over 12 years.")}</p>
        <p>{registerText("intro2", "The SVMA team focuses on natural-looking aesthetic care that highlights your unique features, while gently enhancing your natural beauty.")}</p>
        <p>
          {registerText("about1", "Our experienced providers can recommend a wide range of treatments including ")}
          <strong>{registerText("about2", "Botox®, CoolSculpting®, Juvéderm®, microneedling, and laser services")}</strong>.
        </p>
        <p>{registerText("about3", "Treatment plans are fully customized to leave you looking refreshed, rejuvenated, and youthful.")}</p>
        <p>{registerText("about4", "The best results are undetectable and natural.")}</p>
        <div className={styles.aboutImage}>
          <Image src="/images/Crew.png" alt="Our Clinic" width={500} height={350} />
        </div>
      </section>

      {/* Our Services Section */}
      <section className={styles.servicesSection}>
        <h2>{registerText("servicesTitle", "Our Services")}</h2>
        <div className={styles.servicesGrid}>
          {[
            { src: "/images/laser-skin.png", title: "Laser Skin Rejuvenation", desc: "The latest laser technology for resurfacing, collagen stimulation, and treating dark spots.", link: "/services/laser-skin-rejuvenation" },
            { src: "/images/laser.png", title: "Laser Hair Removal", desc: "Long-term solution for unwanted hair.", link: "/services/laser-hair-removal" },
            { src: "/images/filler.png", title: "Dermal Fillers", desc: "Restore a youthful appearance and smooth lines with dermal fillers.", link: "/services/dermal-fillers" },
            { src: "/images/Botox.png", title: "Neuromodulators (Botox)", desc: "Smooth and soften lines in the forehead, frown lines, and crow’s feet with neuromodulators.", link: "/services/neurotoxins" },
            { src: "/images/PDO.png", title: "PDO Threads", desc: "Lift and smooth sagging skin and lower face laxity with PDO threads.", link: "/services/pdo-threads" },
            { src: "/images/Micro.png", title: "Microneedling", desc: "Refresh with microneedling with PRF or serum.", link: "/services/microneedling" },
          ].map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <Image src={service.src} alt={service.title} width={300} height={200} className={styles.serviceImage} />
              <h3>{registerText(`serviceTitle${index}`, service.title)}</h3>
              <p>{registerText(`serviceDesc${index}`, service.desc)}</p>
              <Link href={service.link}>{registerText("readMore", "Read More")}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team Section */}
      <MeetTheTeam />
    </div>
  );
}
