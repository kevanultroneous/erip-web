import styles from "@/styles/components/common/Container.module.css";
export default function Container({ children, innerstyle, userdefinedclass }) {
  return (
    <div
      className={`${styles.Container} ${userdefinedclass}`}
      style={innerstyle}
    >
      {children}
    </div>
  );
}
