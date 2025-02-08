import React from "react";
import styles from "../../styles/ServicePage.module.css"; // Import CSS file

export default function Neurotoxins() {
  return (
    <div className={styles.serviceContainer}>
      <section className={styles.headerSection}>
        <h1>Neuromodulators: Botox & Dysport</h1>
        <p>
          Smooth and soften lines in the forehead, frown lines, and crow’s feet with neuromodulators.
        </p>
      </section>

      <section className={styles.contentSection}>
        <h2>What Are Botox & Dysport?</h2>
        <p>
          Botox and Dysport are the world’s most popular treatments for wrinkles. These products work by relaxing the muscle
          under the skin, smoothing and softening lines.
        </p>
      </section>

      <section className={styles.contentSection}>
        <h2>The Treatment Process</h2>
        <p>
          The procedure is relatively comfortable and injected with a small needle to treat horizontal lines in the forehead,
          crow’s feet, frown lines between the eyebrows, and other areas. Our experienced providers can help you achieve a
          natural look without looking fake or frozen.
        </p>
      </section>

      <section className={styles.contentSection}>
        <h2>When Will You See Results?</h2>
        <p>
          You will notice the product starting to take effect in <strong>7-14 days</strong>, and the correction will typically
          last for <strong>three months</strong>. Most patients return every three months for maintenance treatment to ensure
          lasting beautiful results.
        </p>
      </section>
    </div>
  );
}
