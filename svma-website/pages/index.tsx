import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner title="Salinas Valley Medical Aesthetics" imageUrl="/images/Home.jpg" />

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <h2>Medical Aesthetics Located in Salinas, CA</h2>
        <p>Salinas Valley Medical Aesthetics is a highly respected aesthetics practice, serving the community for over 12 years.</p>
        <p>The SVMA team focuses on natural-looking aesthetic care that highlights your unique features, while gently enhancing your natural beauty.</p>
        <div className={styles.aboutImage}>
          <Image src="/images/Crew.png" alt="Our Clinic" width={500} height={350} />
        </div>
      </section>

      {/* About Us Section with Image */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <p>Our experienced providers can recommend a wide range of treatments including <strong>Botox®, CoolSculpting®, Juvéderm®, microneedling, and laser services</strong>. Treatment plans are fully customized to leave you looking refreshed, rejuvenated, and youthful.</p>
          <p>The **best results** are undetectable and natural.</p>
          <p>The Salinas Valley Medical Aesthetics team understands that aesthetic care is about much more than just looking good—it’s about **feeling good and confident**.</p>
          <p className={styles.callToAction}>To get expert-level care in a friendly, supportive, and welcoming environment, **call our office** to schedule an appointment today.</p>
        </div>
      </section>

      {/* Our Services Section with Images */}
      <section className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <Image src="/images/laser-skin.jpg" alt="Laser Skin Rejuvenation" width={300} height={200} className={styles.serviceImage} />
            <h3>Laser Skin Rejuvenation</h3>
            <p>The latest laser technology for resurfacing, collagen stimulation, and treating dark spots.</p>
            <Link href="/services/laser-skin-rejuvenation">Read More</Link>
          </div>
          <div className={styles.serviceCard}>
            <Image src="/images/laser-hair.jpg" alt="Laser Hair Removal" width={300} height={200} className={styles.serviceImage} />
            <h3>Laser Hair Removal</h3>
            <p>Long-term solution for unwanted hair.</p>
            <Link href="/services/laser-hair-removal">Read More</Link>
          </div>
          <div className={styles.serviceCard}>
            <Image src="/images/dermal-fillers.jpg" alt="Dermal Fillers" width={300} height={200} className={styles.serviceImage} />
            <h3>Dermal Fillers</h3>
            <p>Restore a youthful appearance and smooth lines with dermal fillers.</p>
            <Link href="/services/dermal-fillers">Read More</Link>
          </div>
          <div className={styles.serviceCard}>
            <Image src="/images/botox.jpg" alt="Botox" width={300} height={200} className={styles.serviceImage} />
            <h3>Neuromodulators (Botox)</h3>
            <p>Smooth and soften lines in the forehead, frown lines, and crow’s feet with neuromodulators.</p>
            <Link href="/services/neurotoxins">Read More</Link>
          </div>
          <div className={styles.serviceCard}>
            <Image src="/images/pdo-threads.jpg" alt="PDO Threads" width={300} height={200} className={styles.serviceImage} />
            <h3>PDO Threads</h3>
            <p>Lift and smooth sagging skin and lower face laxity with PDO threads.</p>
            <Link href="/services/pdo-threads">Read More</Link>
          </div>
          <div className={styles.serviceCard}>
            <Image src="/images/microneedling.jpg" alt="Microneedling" width={300} height={200} className={styles.serviceImage} />
            <h3>Microneedling</h3>
            <p>Refresh with microneedling with PRF or serum.</p>
            <Link href="/services/microneedling">Read More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
