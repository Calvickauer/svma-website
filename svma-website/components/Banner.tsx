import Image from "next/image";
import styles from "../styles/Banner.module.css";

interface BannerProps {
  title: string;
  imageUrl: string;
}

export default function Banner({ title, imageUrl }: BannerProps) {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.overlay}>
        <h1 className={styles.bannerTitle}>{title}</h1>
      </div>
    </div>
  );
}
