import React, { useState } from "react";
import styles from "../styles/MeetTheTeam.module.css"; // Import CSS file
import Link from "next/link";

// Team Members Data
const teamMembers = [
  {
    name: "Dr. Atul Jani",
    title: "Medical Director at Salinas",
    role: "Medical Director",
    image: "/images/team/atul-jani.jpg",
    description: "Dr. Jani leads our medical team with expertise in aesthetic medicine, ensuring patient safety and top-tier results.",
    link: "/about/atul-jani",
  },
  {
    name: "Teresa McMillin",
    title: "PA-C, MPAS, Owner",
    role: "Physician Assistant & Owner",
    image: "/images/team/teresa-mcmillin.jpg",
    description: "Teresa specializes in Botox®, Juvéderm®, and laser treatments, focusing on natural and beautiful results.",
    link: "/about/teresa-mcmillin",
  },
  {
    name: "Rachel Bojka",
    title: "PA-C, Medical Aesthetic Specialist",
    role: "Medical Aesthetic Specialist",
    image: "/images/team/rachel-bojka.jpg",
    description: "Rachel is an expert in injectables, PDO Thread lifts, and laser treatments, helping clients achieve natural beauty.",
    link: "/about/rachel-bojka",
  },
  {
    name: "Michael Daniels",
    title: "RN",
    role: "Registered Nurse",
    image: "/images/team/michael-daniels.jpg",
    description: "Michael is our laser specialist with a keen eye for detail, trained in neurotoxins and fillers.",
    link: "/about/michael-daniels",
  },
  {
    name: "Veronica Santa Cruz",
    title: "RN at Salinas",
    role: "Registered Nurse",
    image: "/images/team/veronica-santa-cruz.jpg",
    description: "Veronica brings her artistic eye and extensive knowledge of anti-aging treatments to our practice.",
    link: "/about/veronica-santa-cruz",
  },
  {
    name: "Luz Reules",
    title: "Receptionist & Skincare Product Specialist",
    role: "Office Manager & CoolSculpting Specialist",
    image: "/images/team/luz-reules.jpg",
    description: "Luz manages patient experience and is our CoolSculpting specialist, helping clients achieve their body goals.",
    link: "/about/luz-reules",
  },
];

export default function MeetTheTeam() {
  const [flipped, setFlipped] = useState(Array(teamMembers.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className={styles.teamContainer}>
      {/* Page Header */}
      <section className={styles.headerSection}>
        <h1>Meet The Team</h1>
        <p>Meet the experts behind Salinas Valley Medical Aesthetics.</p>
      </section>

      {/* Team Members Section */}
      <section className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={`${styles.teamMember} ${flipped[index] ? styles.flipped : ""}`}>
            {/* Front Side */}
            <div className={styles.cardFront}>
              <img src={member.image} alt={member.name} className={styles.teamImage} />
              <h2>{member.name}</h2>
              <p className={styles.memberTitle}>{member.title}</p>
              <p className={styles.memberRole}>{member.role}</p>
              <button className={styles.aboutButton} onClick={() => handleFlip(index)}>About</button>
            </div>

            {/* Back Side */}
            <div className={styles.cardBack}>
              <p className={styles.description}>{member.description}</p>
              <div className={styles.buttonGroup}>
                <button className={styles.backButton} onClick={() => handleFlip(index)}>Back</button>
                <Link href={member.link}>
                  <button className={styles.moreButton}>More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
