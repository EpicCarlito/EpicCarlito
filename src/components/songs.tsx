import { useState } from "react";
import songs from "../../public/songs.json";
import styles from "../styles/_songs.module.scss";
import MoveImage from "./moveImage";

export default function Members() {
  const [curr, setCurr] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      {songs.map((image, i) => {
        const middle = Math.floor(songs.length / 2);
        const offset = curr != null ? i - curr : i - middle;

        const styleClass =
          curr != null
            ? offset == 0
              ? styles.activeImage
              : offset < 0
                ? styles.leftImage
                : styles.rightImage
            : styles.default;

        const ifActive = offset == 0 && curr != null;
        const appearText = ifActive ? styles.show : styles.hide;

        return (
          <div
            key={i}
            className={`${styles.imageContainer} ${styleClass}`}
            style={{ "--offset": `${offset}` } as React.CSSProperties}
          >
            <div className={styles.gridContainer}>
              {ifActive ? (
                <MoveImage src={image.src} onClick={() => setCurr(i)} />
              ) : (
                <img src={image.src} onClick={() => setCurr(i)} />
              )}

              <div className={`${styles.textContainer} ${appearText}`}>
                <h1 className={styles.name}>{image.artist}</h1>
                <h1 className={styles.desc}>{image.desc}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
