import React from "react";
import styles from "../../../styles/ServicePage.module.css"; // Import CSS file

export default function CoolTone() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>CoolTone: Tone, Strengthen, and Firm Muscles</h1>
        <p>FDA-cleared, non-invasive muscle toning treatment</p>
      </section>

      {/* Introduction Section */}
      <section className={styles.contentSection}>
        <h2>What is CoolTone?</h2>
        <p>
          CoolTone is an <strong>FDA-cleared, non-invasive treatment</strong> that uses magnetic muscle stimulation to tone,
          firm, and strengthen muscles.
        </p>
        <p>
          This revolutionary technology delivers powerful contractions that surpass regular workouts, enhancing your body's
          natural strength and definition.
        </p>
      </section>

      {/* How CoolTone Works */}
      <section className={styles.contentSection}>
        <h2>How Does CoolTone Work?</h2>
        <p>
          CoolTone operates by externally stimulating muscle contractions. The technology induces <strong>maximum muscle contractions</strong> 
          while bypassing sensory nerves. The treatment uses a magnetic field created by an electric current passing through a copper coil 
          at the core of the applicator.
        </p>
        <p>
          By adjusting the intensity, frequency, and duration of these contractions, CoolTone effectively enhances muscle tone, delivering 
          results that go beyond traditional workouts.
        </p>
      </section>

      {/* Benefits Section */}
      <section className={styles.contentSection}>
        <h2>Why Choose CoolTone?</h2>
        <p>CoolTone helps you achieve a stronger and more toned appearance in the following areas:</p>
        <ul>
          <li><strong>Abs</strong> – Sculpt and define your core</li>
          <li><strong>Glutes</strong> – Lift and tone your buttocks</li>
          <li><strong>Thighs</strong> – Strengthen and firm your legs</li>
        </ul>
        <p>
          Whether your goal is to enhance fitness or achieve functional strength, CoolTone can help.
        </p>
      </section>

      {/* Recommended Treatment Plan */}
      <section className={styles.contentSection}>
        <h2>Treatment Plan & What to Expect</h2>
        <p>
          Our recommended treatment plan consists of <strong>6-8 sessions</strong>, performed <strong>2-3 times per week</strong> with a 
          <strong>48-hour interval</strong> for muscle recovery.
        </p>
        <p>Initially, you'll undergo a series of 6-8 treatments, followed by monthly maintenance sessions to ensure long-term results.</p>
        <ul>
          <li>Each session lasts approximately <strong>30 minutes</strong></li>
          <li>Total appointment time is around <strong>45 minutes</strong> (includes signing consents & medical photos)</li>
        </ul>
      </section>

      {/* Long-Term Maintenance */}
      <section className={styles.contentSection}>
        <h2>Maintaining Your Results</h2>
        <p>
          To maintain your CoolTone results, we recommend:
        </p>
        <ul>
          <li><strong>4-8 treatments</strong> over the course of <strong>2-4 weeks</strong></li>
          <li>Treatment durations of <strong>20 minutes to one hour</strong>, depending on targeted areas</li>
          <li>Continuing a <strong>healthy diet and regular exercise</strong></li>
          <li>Scheduling <strong>maintenance treatments</strong> for optimal, long-term results</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className={styles.contentSection}>
        <h2>Ready to Strengthen & Define Your Muscles?</h2>
        <p>
          Book a consultation with our specialists today and take the first step toward a sculpted, toned physique!
        </p>
      </section>
    </div>
  );
}
