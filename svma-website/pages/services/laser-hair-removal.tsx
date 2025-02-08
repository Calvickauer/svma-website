import React from "react";
import styles from "../../styles/ServicePage.module.css"; // Import CSS file

export default function LaserHairRemoval() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>Laser Hair Removal</h1>
        <p>Long-term solution for unwanted hair.</p>
      </section>

      {/* Content Section 1 */}
      <section className={styles.contentSection}>
        <h2>How Does It Work?</h2>
        <p>
          Laser hair treatments use ultrathin laser light which targets the pigment in the root of the hair, preventing growth.
          The treatments work best on thick, dark hair; it unfortunately will not work on blond or white hair, or peach fuzz.
        </p>
        <p>
          Most patients require <strong>four sessions, 4-6 weeks apart</strong>. We have three different lasers, and your provider
          will determine which one is best suited for your skin and hair type.
        </p>
      </section>

      {/* Content Section 2 */}
      <section className={styles.contentSection}>
        <h2>Preparation & Safety</h2>
        <p>
          All laser treatments require a <strong>test spot</strong> prior to full treatment to ensure safety. 
          Once you begin your laser hair removal sessions, you can no longer pluck, wax, or use hair removal creams or epilators.
        </p>
        <p>
          For best results, we ask that you <strong>shave the area prior to treatment</strong> and avoid unprotected sun exposure.
        </p>
      </section>

      {/* Content Section 3 */}
      <section className={styles.contentSection}>
        <h2>Common Treatment Areas</h2>
        <ul>
          <li>Underarms</li>
          <li>Face / Upper Lip</li>
          <li>Bikini / Brazilian</li>
          <li>Legs</li>
          <li>Back</li>
        </ul>
      </section>

      {/* Content Section 4 */}
      <section className={styles.contentSection}>
        <h2>Get Started Today!</h2>
        <p>
          If you are ready to get rid of unwanted hair, call <strong>Salinas Valley Medical Aesthetics</strong> for a consultation!
          Your provider will help establish a treatment plan that is both cost-effective and convenient.
        </p>
        <p>Ask us about our package pricing discounts!</p>
      </section>
    </div>
  );
}
