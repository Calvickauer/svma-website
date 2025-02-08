import React from "react";
import styles from "../../styles/ServicePage.module.css"; // Import CSS file

export default function LaserSkinRejuvenation() {
  return (
    <div className={styles.serviceContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>Laser Skin Rejuvenation</h1>
        <p>Transform your skin with cutting-edge laser technology.</p>
      </section>

      {/* HALO Laser Section */}
      <section className={styles.contentSection}>
        <h2>HALO Laser</h2>
        <p>
          The HALO is the world’s first hybrid fractional laser and has become known for the
          <strong> “HALO-glow”</strong> – a flawless complexion after treatment. This innovative laser
          simultaneously delivers two different wavelengths into the same microscopic treatment zone while leaving
          a portion of the epidermis intact for a <strong>faster recovery</strong>.
        </p>
        <p>
          Each treatment is fully customized for maximum precision, comfort, and effectiveness. The HALO laser is
          ideal for treating:
        </p>
        <ul>
          <li>Fine lines</li>
          <li>Texture irregularities</li>
          <li>Large pores</li>
          <li>Sun damage</li>
          <li>Dull complexion</li>
          <li>Scars</li>
        </ul>
      </section>

      {/* Treatment Process Section */}
      <section className={styles.contentSection}>
        <h2>What to Expect</h2>
        <p>
          <strong>Before Your Treatment:</strong> Arrive with no makeup. A topical numbing agent will be applied
          for <strong>30 minutes</strong> prior to the procedure.
        </p>
        <p>
          <strong>During & After Treatment:</strong> The skin will feel hot during and immediately after the
          treatment for <strong>6-12 hours</strong>. Swelling may occur the next day, and by <strong>days 3-4</strong>,
          the skin will feel rough and dry like sandpaper before flaking off within <strong>1-2 weeks</strong>,
          revealing the signature HALO glow!
        </p>
        <p>
          <strong>Results:</strong> Remarkable results can be achieved in just <strong>1-2 treatments</strong>.
        </p>
      </section>

      {/* Benefits Section */}
      <section className={styles.contentSection}>
        <h2>Benefits of HALO Laser</h2>
        <ul>
          <li>Improved skin texture</li>
          <li>Safe for all skin types</li>
          <li>Reduces fine lines & wrinkles</li>
          <li>Effective for acne scars</li>
          <li>Excellent results in 1-2 treatments</li>
        </ul>
      </section>

      {/* BBL Laser Section */}
      <section className={styles.contentSection}>
        <h2>BBL Laser (BroadBand Light)</h2>
        <p>
          The <strong>BBL Laser</strong> is the most powerful light-based treatment available, offering
          customizable treatments for youthful, even skin. It is highly effective for treating:
        </p>
        <ul>
          <li>Sun damage & hyperpigmentation</li>
          <li>Vascular lesions & redness</li>
          <li>Acne & acne scars</li>
          <li>Signs of aging</li>
        </ul>
        <p>
          Using precise light energy, the BBL gently heats the outer skin layers, stimulating collagen production
          and skin regeneration. The built-in thermoelectric monitoring and sapphire cooling technology ensure
          safety and comfort during treatment.
        </p>
      </section>

      {/* Treatment Expectations */}
      <section className={styles.contentSection}>
        <h2>What to Expect with BBL Laser</h2>
        <p>
          The BBL laser specifically targets dark spots on the <strong>face, neck, chest, hands, and shoulders</strong>.
          Initially, pigmentation may darken before sloughing off in <strong>4-7 days</strong>.
        </p>
        <p>
          Many patients require multiple treatments for the best results. The BBL laser is also used for:
        </p>
        <ul>
          <li>Hair removal</li>
          <li>Redness & broken capillaries</li>
          <li>Bruising reduction</li>
        </ul>
        <p>
          For enhanced results, many patients combine BBL with the HALO laser.
        </p>
      </section>

      {/* Consultation Call-to-Action */}
      <section className={styles.contentSection}>
        <h2>Book Your Consultation</h2>
        <p>
          All patients require a <strong>test spot</strong> prior to treatment, which can be done during your
          consultation. Please avoid unprotected sun exposure for at least <strong>two weeks</strong> before
          your appointment.
        </p>
        <p>
          <strong>Call Salinas Valley Medical Aesthetics today</strong> to schedule your consultation and
          experience the transformative power of BBL and HALO laser treatments!
        </p>
      </section>
    </div>
  );
}
