import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "@/styles/components/common/PrimaryButton.module.css";

export default function PrimaryButton({
  title = "button title",
  href = "",
  buttonStyle,
  variant = "outline-primary",
  customClass,
  buttonSize = "sm",
  clickHandler,
  showIcons = false,
  icon,
}) {
  return (
    <Link href={href ? href : "#"}>
      <Button
        onClick={clickHandler}
        variant={variant}
        style={buttonStyle}
        className={`${customClass} ${styles.primaryButtonStyle}`}
        // size={buttonSize}
      >
        {showIcons && <span className={styles.btnIcons}>{icon}</span>}
        <p>{title}</p>
      </Button>
    </Link>
  );
}
