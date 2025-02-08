// pages/about.tsx
import Link from "next/link";
import styles from "../styles/About.module.css"; // Import styles

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to **Silicon Valley Medical Aesthetics (SVMA)**, where beauty meets innovation. 
        We are committed to providing state-of-the-art aesthetic treatments tailored to your 
        individual needs. Our expert team specializes in a variety of non-surgical procedures 
        designed to enhance your natural beauty and boost your confidence.
      </p>

      <h2>Why Choose SVMA?</h2>
      <ul>
        <li>Cutting-edge technology and advanced medical aesthetic procedures.</li>
        <li>Highly trained and certified professionals with years of experience.</li>
        <li>Personalized treatment plans for optimal results.</li>
        <li>A welcoming and comfortable environment designed for your relaxation.</li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        At SVMA, we believe in **empowering individuals** to look and feel their best. 
        Our mission is to provide **safe, effective, and innovative aesthetic solutions** 
        using the latest advancements in medical technology.
      </p>

      <h2>Meet Our Experts</h2>
      <p>
        Our team consists of experienced professionals who are passionate about 
        helping you achieve your aesthetic goals. Learn more about our specialists on 
        the <Link href="../meet-the-team" className={styles.link}>Meet the Team</Link> page.
      </p>

      <h2>Book a Consultation</h2>
      <p>
        Ready to start your journey to a more confident you? Schedule a consultation with 
        our experts today and discover how we can help you achieve the results you desire.
      </p>
      <Link href="/contact" className={styles.contactButton}>Contact Us</Link>
    </div>
  );
};

export default AboutUs;
