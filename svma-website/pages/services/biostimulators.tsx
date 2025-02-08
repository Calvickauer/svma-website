import React from "react";
import styles from "../../styles/ServicePage.module.css"; // Import CSS file

export default function Biostimulators() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>Biostimulators</h1>
        <p>Enhance your collagen for the most natural-looking results</p>
      </section>

      {/* Introduction Section */}
      <section className={styles.contentSection}>
        <h2>Why Biostimulators?</h2>
        <p>
          Starting in your <strong>20s</strong>, collagen production decreases, leading to thinner skin, 
          increased wrinkles, and reduced elasticity. Biostimulators work by enhancing your body's 
          <strong>natural collagen production</strong>, delivering natural results without adding volume. 
          They are perfect for both prevention and rejuvenation of aging skin.
        </p>
      </section>

      {/* Hyperdilute Radiesse Section */}
      <section className={styles.contentSection}>
        <h2>Hyperdilute Radiesse</h2>
        <p>
          Hyperdilute Radiesse is a diluted version of the commonly used dermal filler, <strong>Radiesse</strong>.
          Radiesse is a calcium-based gel, and when metabolized, it stimulates collagen production, 
          providing smooth, natural-looking results.
        </p>
        <p>
          This treatment is ideal for <strong>thin and lax skin</strong> on areas such as the lower face, 
          neck, chest, and hands. By diluting the Radiesse gel, we can treat a larger surface area 
          with a greater volume of fluid.
        </p>
        <h3>Recommended Treatment Plan</h3>
        <ul>
          <li><strong>Three sessions</strong>, spaced <strong>4-6 weeks apart</strong></li>
          <li>Annual maintenance with <strong>one session</strong></li>
          <li>Results take <strong>2-4 months</strong> to develop as collagen and elastin form</li>
        </ul>
      </section>

      {/* Platelet Rich Fibrin (PRF) Section */}
      <section className={styles.contentSection}>
        <h2>Platelet Rich Fibrin (PRF)</h2>
        <p>
          <strong>PRF (Platelet Rich Fibrin)</strong> is derived from your own blood and contains 
          <strong>growth factors, stem cells, platelets, and fibrin</strong>. These components 
          stimulate healing and promote new collagen and elastin production over time.
        </p>
        <p>
          PRF is especially effective for <strong>delicate, thin skin under the eyes</strong>, 
          improving texture and reducing signs of aging.
        </p>
      </section>

      {/* Procedure Section */}
      <section className={styles.contentSection}>
        <h2>The Procedure</h2>
        <p>
          Both <strong>Hyperdilute Radiesse</strong> and <strong>PRF</strong> are injected using 
          a <strong>cannula</strong>—a small hollow tube with a blunt tip—requiring only minimal 
          needle pokes. Most patients find the procedure comfortable.
        </p>
      </section>

      {/* Treatment Plan Section */}
      <section className={styles.contentSection}>
        <h2>Recommended Treatment Plan</h2>
        <ul>
          <li>To achieve the best results, we recommend <strong>three treatments</strong>, 
              spaced <strong>6-8 weeks apart</strong>.</li>
          <li>Maintenance treatments should be done every <strong>12-15 months</strong> to sustain collagen production.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className={styles.contentSection}>
        <h2>Schedule a Consultation</h2>
        <p>
          Whether you're looking for <strong>correction</strong> or <strong>prevention</strong>, 
          <strong>Salinas Valley Medical Aesthetics</strong> is here to help. Call today 
          to schedule your consultation and discover the benefits of biostimulators!
        </p>
      </section>
    </div>
  );
}
