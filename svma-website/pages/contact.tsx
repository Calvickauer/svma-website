import Banner from "../components/Banner"; // Import the Banner component
import styles from "../styles/Contact.module.css"; // Import styles

export default function Contact() {
  return (
    <div>
      {/* Banner with page title and background image */}
      <Banner title="Contact Us" imageUrl="/images/Contact.jpg" />

      <div className={styles.contactContainer}>
        {/* Left Section - Contact Info */}
        <div className={styles.contactInfo}>
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Whether you have questions about our services or want to schedule a consultation, our team is here to help.</p>

          <h2>Contact Information</h2>
          <div className={styles.contactDetails}>
            <p><i className="fas fa-envelope"></i> Email: <a href="mailto:Luz.svma@gmail.com">Luz.svma@gmail.com</a></p>
            <p><i className="fas fa-phone"></i> Phone: <a href="tel:8319754175">831-975-4175</a></p>
          </div>
          <h2>Our Office</h2>
          <p>📍 <strong>30 Central Avenue, Salinas, CA 93901</strong></p>


          {/* Google Maps */}
          <div className={styles.mapContainer}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=30+Central+Avenue,Salinas,CA"
              allowFullScreen
            />
          </div>
        </div>

        {/* Right Section - Office Hours + Contact Form */}
        <div className={styles.contactRight}>
          {/* Office Hours */}
          <div className={styles.officeHours}>
            <h2>Office Hours</h2>
            <p>Hours by appointment only. Please call in advance as hours may vary.</p>
            <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
            <p><strong>Saturday & Sunday:</strong> Closed</p>
          </div>

          {/* Contact Form */}
          <div className={styles.contactFormContainer}>
            <h2>Get in Touch</h2>
            <form className={styles.contactForm}>
              <label>
                Name:
                <input type="text" name="name" placeholder="Your Name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" placeholder="Your Email" required />
              </label>
              <label>
                Message:
                <textarea name="message" placeholder="Your Message" required></textarea>
              </label>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
