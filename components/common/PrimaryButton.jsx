import Link from "next/link";
import styles from "@/styles/components/common/PrimaryButton.module.css";
export default function PrimaryButton({
  title = "button title",
  href = "",
  buttonStyle,
  clickHandler,
  otherclass,
}) {
  return (
    <Link href={href}>
      <button
        onClick={clickHandler}
        style={buttonStyle}
        className={`${styles.ButtonWrraper} ${otherclass}`}
      >
        {title}
      </button>
    </Link>
  );
}
