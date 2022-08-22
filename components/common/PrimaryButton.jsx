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
}) {
  return (
    <Link href={href}>
      <Button
        onClick={clickHandler}
        variant={variant}
        style={buttonStyle}
        className={`${customClass} ${styles.primaryButtonStyle}`}
        // size={buttonSize}
      >
        {title}
      </Button>
    </Link>
  );
}
