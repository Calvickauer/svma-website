import React from "react";
import styles from "../../styles/ServicePage.module.css"; // Import CSS file

export default function PRFHairRestoration() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>PRF Hair Restoration</h1>
        <p>Regrow your hair thicker and stronger with PRF hair treatments</p>
      </section>

      {/* Introduction Section */}
      <section className={styles.contentSection}>
        <h2>What is PRF Hair Restoration?</h2>
        <p>
          Hair loss affects at least <strong>40% of men and women</strong> by the age of 35, which can be frustrating.
          While topical treatments can be irritating and oral medications come with side effects, <strong>PRF hair restoration</strong> 
          offers an effective solution with minimal risks.
        </p>
        <p>
          PRF contains <strong>growth factors and proteins</strong> that stimulate and nourish hair follicles, encouraging dormant 
          follicles to enter the growth phase and leading to thicker, stronger hair.
        </p>
      </section>

      {/* Treatment Process Section */}
      <section className={styles.contentSection}>
        <h2>The PRF Treatment Process</h2>
        <p>
          After a consultation, the procedure takes approximately <strong>30 minutes</strong>:
        </p>
        <ul>
          <li>A small blood sample is drawn and spun down to separate the PRF.</li>
          <li>No additives are used—just pure PRF.</li>
          <li>The PRF is carefully injected into the scalp at the follicle level using a very fine needle.</li>
        </ul>
        <p>
          After just a few sessions, you will notice <strong>thicker, stronger hair with reduced shedding</strong>.
        </p>
      </section>

      {/* Candidate Section */}
      <section className={styles.contentSection}>
        <h2>Are You a Candidate for PRF Hair Restoration?</h2>
        <p>
          The best candidates for PRF therapy are those experiencing <strong>androgenic alopecia</strong> (male/female pattern baldness) 
          or those with <strong>recent hair loss</strong>.
        </p>
        <p>Patients who may NOT be ideal candidates include those with:</p>
        <ul>
          <li>Low platelet count</li>
          <li>Anemia</li>
          <li>Chronic liver disease</li>
          <li>Thyroid disease</li>
          <li>Heavy tobacco smoking</li>
          <li>Use of blood thinners</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className={styles.contentSection}>
        <h2>Benefits of PRF Therapy</h2>
        <ul>
          <li>Hair becomes <strong>thicker and denser</strong></li>
          <li>The appearance of <strong>balding or thinning is reduced</strong></li>
          <li><strong>Receding hairlines</strong> begin to grow back</li>
          <li>Hair roots become <strong>stronger, reducing shedding</strong></li>
        </ul>
      </section>

      {/* Treatment Timeline */}
      <section className={styles.contentSection}>
        <h2>How Many Treatments Do I Need?</h2>
        <p>
          Patients typically need <strong>four sessions</strong>, scheduled <strong>2-4 weeks apart</strong>. 
          After completing the initial series, <strong>maintenance sessions</strong> every six months are recommended 
          to ensure continued hair growth.
        </p>
        <p>
          To maximize hair regrowth, we also recommend using a <strong>topical minoxidil product</strong>, available over the counter.
        </p>
      </section>

      {/* Before the Procedure Section */}
      <section className={styles.contentSection}>
        <h2>Before Your PRF Treatment</h2>
        <ul>
          <li><strong>Shampoo your hair</strong> and avoid applying styling products. Your scalp should be clean before treatment.</li>
          <li><strong>Eat a healthy breakfast</strong> and drink plenty of water.</li>
          <li>If you experience <strong>fainting or dizziness</strong> during blood draws, inform your provider beforehand.</li>
        </ul>
      </section>

      {/* After the Procedure Section */}
      <section className={styles.contentSection}>
        <h2>After Your PRF Treatment</h2>
        <ul>
          <li>Your scalp may feel <strong>tingly, sore, or slightly swollen</strong> for 1-3 days.</li>
          <li>Avoid <strong>hair dye, perms, or harsh chemicals</strong> for 48 hours after treatment.</li>
          <li>These precautions help prevent irritation and allow your scalp to heal properly.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className={styles.contentSection}>
        <h2>Schedule a Consultation</h2>
        <p>
          If you're ready to restore thicker, stronger hair, contact <strong>Salinas Valley Medical Aesthetics</strong> today to 
          schedule a consultation with our experts!
        </p>
      </section>
    </div>
  );
}
