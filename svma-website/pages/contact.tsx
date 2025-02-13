import Banner from "../components/Banner"; // Import the Banner component
import styles from "../styles/Contact.module.css"; // Import styles
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa"; // Import Instagram Icon

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
            <p>📧 Email: <a href="mailto:Luz.svma@gmail.com">Luz.svma@gmail.com</a></p>
            <p>📞 Phone: <a href="tel:8319754175">831-975-4175</a></p>

            {/* Instagram Link */}
            <div className={styles.instagramLink}>
              <Link href="https://www.instagram.com/svmedaesthetics" target="_blank">
                <FaInstagram className={styles.instagramIcon} />
                <span>Follow us on Instagram</span>
              </Link>
            </div>
          </div>

          <div className={styles.officeHours}>
            <h2>Office Hours</h2>
            <p>Hours by appointment only. Please call in advance as hours may vary.</p>
            <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
            <p><strong>Saturday & Sunday:</strong> Closed</p>
          </div>
          <p>📍 <strong>30 Central Avenue, Salinas, CA 93901</strong></p>

          {/* Map Images Section (Replaces Google Maps) */}
          <div className={styles.mapContainer}>
            <Link href="https://beta.maps.apple.com/?address=30+Central+Ave%2C+Salinas%2C+CA+93901%2C+United+States&ll=36.6769893%2C-121.6569679&q=30+Central+Ave" target="_blank">
              <Image src="/images/Map.jpg" alt="Location Map" width={500} height={350} className={styles.mapImage} />
            </Link>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className={styles.contactRight}>
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
