import React from "react";
import styles from "../styles/MeetTheTeam.module.css"; // Import CSS file

// Team Members Data
const teamMembers = [
  {
    name: "Dr. Atul Jani",
    title: "Medical Director at Salinas",
    role: "Medical Director",
    image: "/images/team/atul-jani.jpg", // Update with actual image path
  },
  {
    name: "Teresa McMillin",
    title: "PA-C, MPAS, Owner",
    role: "Physician Assistant & Owner",
    image: "/images/team/teresa-mcmillin.jpg",
  },
  {
    name: "Rachel Bojka",
    title: "PA-C, Medical Aesthetic Specialist",
    role: "Medical Aesthetic Specialist",
    image: "/images/team/rachel-bojka.jpg",
  },
  {
    name: "Michael Daniels",
    title: "RN",
    role: "Registered Nurse",
    image: "/images/team/michael-daniels.jpg",
  },
  {
    name: "Veronica Santa Cruz",
    title: "RN at Salinas",
    role: "Registered Nurse",
    image: "/images/team/veronica-santa-cruz.jpg",
  },
  {
    name: "Luz Reules",
    title: "Receptionist & Skincare Product Specialist",
    role: "Office Manager & CoolSculpting Specialist",
    image: "/images/team/luz-reules.jpg",
  },
];

export default function MeetTheTeam() {
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
          <div key={index} className={styles.teamMember}>
            <img src={member.image} alt={member.name} className={styles.teamImage} />
            <h2>{member.name}</h2>
            <p className={styles.memberTitle}>{member.title}</p>
            <p className={styles.memberRole}>{member.role}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
