import React from "react";
import styles from "../../styles/ServicePage.module.css"; // Import CSS file

export default function RFMicroneedling() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>Radiofrequency Microneedling</h1>
        <p>Skin tightening & improvement of fine lines and scars with RF Microneedling</p>
      </section>

      {/* Introduction Section */}
      <section className={styles.contentSection}>
        <h2>What is Radiofrequency Microneedling?</h2>
        <p>
          The <strong>VirtueRF Microneedling Platform</strong> is the most advanced RF microneedling 
          device available today. This combination of <strong>radiofrequency energy</strong> and 
          <strong> microneedling</strong> is a clinically proven method to <strong>stimulate collagen production</strong>, 
          reducing fine lines, wrinkles, and skin laxity while improving skin tone and texture.
        </p>
        <p>
          RF Microneedling is also an excellent <strong>preventative treatment</strong> to maintain youthful skin 
          and prevent collagen loss over time.
        </p>
      </section>

      {/* Treatment Areas Section */}
      <section className={styles.contentSection}>
        <h2>What Can Virtue RF Treat?</h2>
        <ul>
          <li>Fine lines and wrinkles</li>
          <li>Under-eye bags</li>
          <li>Skin laxity (on almost any area of the body)</li>
          <li>Scarring and stretch marks</li>
        </ul>
      </section>

      {/* Treatment Process Section */}
      <section className={styles.contentSection}>
        <h2>The Treatment Process</h2>
        <p>
          The <strong>VirtueRF</strong> system features three unique handpieces that allow for customized treatments:
        </p>
        <ul>
          <li><strong>SmartRF:</strong> Treats the face, neck, décolleté, and hands.</li>
          <li><strong>DeepRF:</strong> Targets larger body areas such as the abdomen and arms.</li>
          <li><strong>ExactRF:</strong> Specifically treats delicate areas around the eyes, mouth, and jawline.</li>
        </ul>
        <p>
          The procedure is very comfortable with <strong>no downtime</strong>. Patients may feel mild heat during 
          treatment and experience some redness afterward, which typically subsides within a few hours. 
          A <strong>soothing mask</strong> or aftercare products will be provided for optimal recovery.
        </p>
      </section>

      {/* Recommended Treatment Plan Section */}
      <section className={styles.contentSection}>
        <h2>Recommended Treatment Plan</h2>
        <ul>
          <li><strong>Three treatments</strong>, spaced one month apart, are recommended for optimal results.</li>
          <li>Please arrive at your appointment with a clean face, free of makeup.</li>
        </ul>
        <p>
          Ask your provider what the <strong>Virtue RF</strong> can do for you!
        </p>
      </section>

      {/* Comparison Section */}
      <section className={styles.contentSection}>
        <h2>Virtue RF vs. Morpheus8</h2>
        <p>
          Both <strong>Virtue RF</strong> and <strong>Morpheus8</strong> use <strong>radiofrequency energy</strong> and 
          <strong> microneedling</strong> to stimulate collagen production and remodel tissue. However, Virtue RF offers 
          key advantages over Morpheus8:
        </p>
        <ul>
          <li>
            <strong>Customizable Treatments:</strong> Virtue RF allows for precise energy adjustment, making it more 
            effective for a <strong>wider range of skin concerns</strong>.
          </li>
          <li>
            <strong>Comfort:</strong> Virtue RF uses <strong>insulated needles</strong> and a <strong>robotic needle 
            delivery system</strong> for a more comfortable experience, compared to the "staple-gun" sensation of Morpheus8.
          </li>
          <li>
            <strong>Lower Risk of Side Effects:</strong> Morpheus8 has a higher risk of complications such as 
            <strong> burns, scarring, and hyperpigmentation</strong>. Virtue RF's advanced technology reduces these risks.
          </li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className={styles.contentSection}>
        <h2>Schedule Your Consultation</h2>
        <p>
          If you're ready to experience the latest in <strong>RF Microneedling technology</strong>, 
          contact <strong>Salinas Valley Medical Aesthetics</strong> today to schedule a consultation!
        </p>
      </section>
    </div>
  );
}
