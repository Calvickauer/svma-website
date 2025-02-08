import React from "react";
import styles from "../../styles/ServicePage.module.css"; // Import CSS file

export default function CoolSculpting() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>CoolSculpting®</h1>
        <p>Non-surgical fat reduction treatment</p>
      </section>

      {/* Introduction Section */}
      <section className={styles.contentSection}>
        <h2>What is CoolSculpting?</h2>
        <p>
          The CoolSculpting procedure is the <strong>safest and most proven non-surgical fat reduction technology</strong> to target unwanted fat.
          Backed by Harvard Science, CoolSculpting has consistently delivered results and continues to stand the test of time.
        </p>
        <p>
          CoolSculpting Elite is an <strong>FDA-cleared, non-invasive procedure</strong> designed for fat reduction and body contouring. It is
          customized to address noticeable bulges, providing tailored treatments for each client.
        </p>
      </section>

      {/* FDA-Cleared Treatment Areas */}
      <section className={styles.contentSection}>
        <h2>FDA-Cleared Treatment Areas</h2>
        <p>CoolSculpting Elite is FDA-cleared to treat <strong>9 areas of the body</strong>, including:</p>
        <ul>
          <li>Abdomen</li>
          <li>Love handles (flanks)</li>
          <li>Bra fat</li>
          <li>Inner and outer thighs</li>
          <li>Banana roll (under the buttocks)</li>
          <li>Upper arms</li>
          <li>Double chin</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className={styles.contentSection}>
        <h2>Why Choose CoolSculpting?</h2>
        <p>
          Say goodbye to stubborn fat pockets that <strong>diet and exercise can’t touch</strong>. CoolSculpting Elite allows
          us to <strong>spot treat problem areas</strong> with precision, utilizing the latest advancements in technology.
        </p>
        <p>
          This treatment has <strong>no downtime</strong>, so you can get right back to living life while enjoying gradual,
          natural-looking fat reduction.
        </p>
      </section>

      {/* Cutting-Edge Technology Section */}
      <section className={styles.contentSection}>
        <h2>Advanced Technology & Expert Care</h2>
        <p>
          At Salinas Valley Medical Aesthetics, you receive the <strong>latest advancements and techniques</strong> in the
          field, including:
        </p>
        <ul>
          <li><strong>CoolSculpting Elite</strong> – The most up-to-date CoolSculpting technology for enhanced results</li>
          <li><strong>CoolTone</strong> – An innovative treatment designed to improve <strong>muscle tone, strength, and definition</strong></li>
        </ul>
      </section>

      {/* In-Office Experience Section */}
      <section className={styles.contentSection}>
        <h2>What to Expect</h2>
        <p>
          This <strong>completely non-surgical treatment</strong> is performed in-office by our certified and highly trained team,
          who have completed <strong>thousands of CoolSculpting treatments</strong>.
        </p>
        <p>Experience the most effective, cutting-edge fat reduction technology in a comfortable and professional setting.</p>
      </section>

      {/* Call to Action Section */}
      <section className={styles.contentSection}>
        <h2>Get Started Today!</h2>
        <p>
          Ready to sculpt your ideal figure? Book a consultation with our specialists today to see how CoolSculpting Elite
          can help you achieve your body goals.
        </p>
      </section>
    </div>
  );
}
