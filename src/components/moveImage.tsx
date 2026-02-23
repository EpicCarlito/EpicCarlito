import type { HTMLAttributes } from "react";
import styles from "../styles/_moveImage.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
}

export default function MoveImage({ src, className, ...rest }: Props) {
  return (
    <div className={`${styles.container} ${className ?? ""}`} {...rest}>
      <div className={styles.pos} />
      <div className={styles.pos} />
      <div className={styles.pos} />
      <div className={styles.pos} />
      <div className={styles.pos} />
      <div className={styles.pos} />

      <img className={styles.image} src={src} />
    </div>
  );
}
