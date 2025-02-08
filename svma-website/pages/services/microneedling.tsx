import React from "react";
import styles from "../../styles/ServicePage.module.css"; // Import CSS file

export default function Microneedling() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>Microneedling</h1>
        <p>Experience the next level of skin rejuvenation with microneedling using the CosmoPen.</p>
      </section>

      {/* Introduction Section */}
      <section className={styles.contentSection}>
        <h2>What is Microneedling?</h2>
        <p>
          This advanced, FDA-approved treatment stimulates your skin’s natural healing process by creating tiny 
          micro-channels. It boosts collagen production, improving skin texture, reducing fine lines, and minimizing 
          acne scars and pores.
        </p>
        <p>
          Whether you want to refresh your complexion or address specific skin concerns, microneedling with the 
          CosmoPen delivers effective, long-lasting results with minimal downtime.
        </p>
      </section>

      {/* Collagen Induction Therapy Section */}
      <section className={styles.contentSection}>
        <h2>Collagen Induction Therapy</h2>
        <p>
          Also known as collagen induction therapy, microneedling stimulates your skin to produce its own natural 
          collagen by creating <strong>3 million micro-channels per treatment</strong>. As you age, collagen and elastin 
          naturally decrease, leading to fine lines and wrinkles. Microneedling is a safe and effective way to boost 
          collagen production, leaving your skin glowing and youthful.
        </p>
        <p>
          This highly effective treatment not only reduces signs of aging but enhances your skin’s overall appearance.
        </p>
      </section>

      {/* Who is it for? Section */}
      <section className={styles.contentSection}>
        <h2>Who is Microneedling For?</h2>
        <p>
          Microneedling is <strong>safe for all skin types</strong> and promotes natural healing to address:
        </p>
        <ul>
          <li>Acne scars</li>
          <li>Fine lines & wrinkles</li>
          <li>Uneven skin texture</li>
          <li>Enlarged pores</li>
        </ul>
        <p>
          It’s a fast and safe method that stimulates collagen and elastin production, resulting in healthier, 
          more radiant skin.
        </p>
      </section>

      {/* How It Works Section */}
      <section className={styles.contentSection}>
        <h2>How Does It Work?</h2>
        <p>
          Our bodies naturally respond to injury by producing new cells and extracellular materials like collagen 
          and elastin to heal. The CosmoPen initiates this process by creating <strong>hundreds of micro-sized openings</strong> 
          in your skin, allowing for deep skin rejuvenation.
        </p>
        <p>
          These micro-channels are created using a <strong>disposable needle cartridge</strong> to ensure safety and hygiene.
        </p>
      </section>

      {/* Results & Side Effects Section */}
      <section className={styles.contentSection}>
        <h2>Results & Side Effects</h2>
        <p>
          While multiple sessions may be needed for optimal results, noticeable changes can be seen 
          <strong> just one week after treatment</strong>, with continued improvements as the healing process takes effect.
        </p>
        <p>Common side effects include:</p>
        <ul>
          <li>Mild redness and tenderness (similar to a sunburn)</li>
          <li>Slight swelling</li>
          <li>Temporary dryness for a few days after treatment</li>
        </ul>
      </section>

      {/* PRF Microneedling Section */}
      <section className={styles.contentSection}>
        <h2>Microneedling with PRF (Platelet-Rich Fibrin)</h2>
        <p>
          PRF (Platelet-Rich Fibrin) is a cutting-edge, natural treatment that utilizes your own blood’s proteins, 
          stem cells, and growth factors to <strong>rejuvenate and revitalize</strong> your skin. By concentrating these 
          elements, PRF stimulates collagen production and promotes tissue repair.
        </p>
        <p>
          During treatment, red blood cells are removed, and PRF is infused into the micro-punctures, nourishing skin 
          cells and delivering a radiant, glowing complexion.
        </p>
        <p>
          Depending on your specific concerns, your provider may also apply a brightening, hydrating, or 
          anti-aging serum for enhanced results.
        </p>
      </section>

      {/* Call to Action */}
      <section className={styles.contentSection}>
        <h2>Book Your Consultation</h2>
        <p>
          Experience the benefits of microneedling with or without PRF. Contact Salinas Valley Medical Aesthetics today 
          to schedule your consultation and take the next step toward smoother, healthier skin.
        </p>
      </section>
    </div>
  );
}
