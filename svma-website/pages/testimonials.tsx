import React, { useState } from "react";
import styles from "../styles/Testimonials.module.css";
import Image from "next/image";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // List of review images
  const reviews = [...Array(11)].map((_, index) => ({
    src: `/images/review${index + 1}.jpg`,
    alt: `Client review ${index + 1}`,
  }));

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  // Toggle full-screen mode
  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className={styles.testimonialsContainer}>
      {/* Page Title */}
      <div className={styles.pageTitle}>
        <h1>Testimonials</h1>
        <p>See what our happy clients have to say about their experience at SVMA.</p>
      </div>

      {/* Review Summary */}

      {/* Image Carousel */}
      <section className={styles.carouselContainer}>
        <button className={styles.carouselButton} onClick={goToPrevious}>‹</button>
        
        <div className={styles.imageContainer} onClick={openFullScreen}>
          <Image
            src={reviews[currentIndex].src}
            alt={reviews[currentIndex].alt}
            layout="fill"
            objectFit="contain"
            className={styles.reviewImage}
          />
        </div>

        <button className={styles.carouselButton} onClick={goToNext}>›</button>
      </section>

      {/* Navigation Dots */}
      <div className={styles.dotsContainer}>
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Full-Screen Image View */}
      {isFullScreen && (
        <div className={styles.fullScreenOverlay} onClick={closeFullScreen}>
          <button className={styles.closeButton} onClick={closeFullScreen}>×</button>
          <Image
            src={reviews[currentIndex].src}
            alt={reviews[currentIndex].alt}
            layout="fill"
            objectFit="contain"
            className={styles.fullScreenImage}
          />
        </div>
      )}

      <section className={styles.reviewSummary}>
        <h2>What Our Clients Are Saying</h2>
        <ul>
          <li><strong>Highly Skilled Staff:</strong> Patients praise the expertise of Rachel and Michael, highlighting their ability to achieve natural-looking results.</li>
          <li><strong>Positive Experience:</strong> Many describe the clinic as welcoming and comfortable.</li>
          <li><strong>Excellent Customer Service:</strong> Staff is appreciated for being attentive and addressing concerns thoroughly.</li>
          <li><strong>Visible Results:</strong> Clients report noticeable improvements with Botox, fillers, and CoolSculpting.</li>
          <li><strong>Highly Recommended:</strong> Many reviewers would gladly recommend SVMA.</li>
        </ul>
      </section>
      {/* Amenities Section */}
      <div className={styles.amenitiesContainer}>
        <h2>Amenities</h2>
        <div className={styles.amenitiesImageWrapper}>
          <Image
            src="/images/Amenities1.jpg"
            alt="Clinic Amenities"
            width={400} // Adjust width as per your styling
            height={600} // Adjust height as per your styling
            className={styles.amenitiesImage}
          />
               <Image
            src="/images/Amenities2.jpg"
            alt="Clinic Amenities"
            width={400} // Adjust width as per your styling
            height={500} // Adjust height as per your styling
            className={styles.amenitiesImage}
          />
        </div>
      </div>
    </div>
  );
}
