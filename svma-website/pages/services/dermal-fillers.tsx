import React from "next/link";
import styles from "../../styles/ServicePage.module.css"; // Import the styles

export default function DermalFillers() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>Dermal Fillers</h1>
        <p>Restore a youthful appearance and smooth lines with dermal fillers.</p>
      </section>

      {/* Content Section 1 */}
      <section className={styles.contentSection}>
        <h2>What Are Dermal Fillers?</h2>
        <p>
          Dermal fillers are an easy and convenient way to enhance natural beauty and restore a youthful appearance.
          They address age-related issues, such as fat loss or migration, collagen loss, bone resorption, and fine lines
          and wrinkles. 
        </p>
        <p>
          Hyaluronic acid or calcium-based fillers add volume and hydration and contour the face, providing immediate results.
          Here at <strong>Salinas Valley Medical Aesthetics</strong>, we carry a variety of HA fillers, including
          <strong> Juvederm</strong> and <strong>Restylane</strong> brand fillers, as well as <strong>Radiesse</strong>.
          Talk to your provider to see which product is right for you.
        </p>
        <p><strong>Add neuromodulation to your treatment for total rejuvenation and a beautiful outcome!</strong></p>
      </section>

      {/* Content Section 2 */}
      <section className={styles.contentSection}>
        <h2>What Areas Can Be Treated?</h2>
        <ul>
          <li>Lips</li>
          <li>Smile lines / marionette lines</li>
          <li>Cheek enhancement</li>
          <li>Nose augmentation</li>
          <li>Chin / jawline</li>
          <li>Under eyes</li>
          <li>Temples</li>
          <li>Hands</li>
        </ul>
      </section>

      {/* Content Section 3 */}
      <section className={styles.contentSection}>
        <h2>What to Expect After Treatment?</h2>
        <p>
          Immediately following your treatment, you may experience some tenderness in the area. 
          Bruising is usually minimal but may last up to two weeks. Swelling is common and usually resolves within two weeks.
        </p>
        <p>
          The product is placed in specific areas, so please avoid facials, massages, or excessive pressure for at least 3 days.
        </p>
      </section>
    </div>
  );
}
