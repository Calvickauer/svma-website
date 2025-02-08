import React from "react";
import styles from "../../styles/ServicePage.module.css"; // Import CSS file

export default function PDOThreads() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>PDO Threads</h1>
        <p>Lift and smooth sagging skin and lower face laxity with PDO threads.</p>
      </section>

      {/* Introduction Section */}
      <section className={styles.contentSection}>
        <h2>What Are PDO Threads?</h2>
        <p>
          PDO (polydioxanone) sutures, or threads, are a revolutionary, non-invasive treatment used for 
          <strong> skin lifting and tightening</strong>. This treatment effectively reduces the appearance of sagging skin and jowls, 
          helping to restore a youthful, contoured appearance.
        </p>
        <p>
          A small injection of local anesthetic ensures a comfortable experience, and the PDO thread is placed 
          under the skin to <strong>gently and securely lift</strong> targeted areas.
        </p>
      </section>

      {/* Treatment Areas Section */}
      <section className={styles.contentSection}>
        <h2>Commonly Treated Areas</h2>
        <ul>
          <li>Lower face (jawline & cheeks)</li>
          <li>Brow lift</li>
          <li>Neck tightening</li>
        </ul>
        <p>
          PDO thread treatments can also be <strong>combined with dermal fillers</strong> for a balanced and natural result.
        </p>
      </section>

      {/* How It Works Section */}
      <section className={styles.contentSection}>
        <h2>How Do PDO Threads Work?</h2>
        <p>
          PDO threads are made of an <strong>absorbable and biodegradable material</strong>, which will naturally dissolve 
          within four to six months. During this time, the threads continuously stimulate <strong>new collagen production</strong>, 
          improving the texture, elasticity, and quality of your skin.
        </p>
      </section>

      {/* Results & Aftercare Section */}
      <section className={styles.contentSection}>
        <h2>What to Expect After Treatment</h2>
        <p>
          After the procedure, you may experience <strong>mild swelling, bruising, and tenderness</strong> for up to two weeks. 
          However, there is minimal to no downtime, allowing you to resume normal activities quickly.
        </p>
        <p>Post-treatment care includes:</p>
        <ul>
          <li>Gently washing your face with light pressure</li>
          <li>Avoiding excessive facial movement for the first few days</li>
          <li>Following up with your provider for optimal results</li>
        </ul>
      </section>

      {/* Treatment Plans Section */}
      <section className={styles.contentSection}>
        <h2>Customized Treatment Plans</h2>
        <p>
          At Salinas Valley Medical Aesthetics, we develop <strong>personalized treatment plans</strong> tailored to your needs.
        </p>
        <p>
          We also offer <strong>package deals</strong> that include three treatments, ensuring optimal long-term results.
        </p>
      </section>

      {/* Call to Action */}
      <section className={styles.contentSection}>
        <h2>Is PDO Thread Treatment Right for You?</h2>
        <p>
          If you're interested in achieving a natural lift without surgery, schedule a consultation with 
          our expert providers today. We'll help determine if a PDO thread treatment is the right solution for you!
        </p>
      </section>
    </div>
  );
}
