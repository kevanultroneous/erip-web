import Link from "next/link";
import styles from "@/styles/components/common/PrimaryButton.module.css";
export default function PrimaryButton({
  title = "button title",
  href = "",
  buttonStyle,
}) {
  return (
    <Link href={href}>
      <div style={buttonStyle} className={styles.ButtonWrraper}>
        {title}
      </div>
    </Link>
  );
}
