import ReactStars from "react-rating-stars-component";
import styles from "@/styles/components/MyBooking/Ratingbar.module.css";
export default function Ratingbar() {
  return (
    <div className={styles.RatingCard}>
      <p className={styles.RatingTitle}>
        Please rate our service according to your experience
      </p>
      <div>
        <ReactStars
          count={5}
          size={50}
          activeColor="#ffd700"
          onChange={(e) => console.log(e)}
        />
      </div>
    </div>
  );
}
