import { useState } from "react";
import songs from "../songs.json";
import styles from "../styles/_songs.module.scss";

// container can't be set height

export default function Members() {
  const [curr, setCurr] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      {songs.map((image, i) => {
        const middle = Math.floor(songs.length / 2);
        const offset = curr != null ? i - curr : i - middle;

        const imageStyle =
          curr != null
            ? offset == 0
              ? styles.activeImage
              : offset < 0
                ? styles.leftImage
                : styles.rightImage
            : styles.default;

        const ifActive = offset == 0 && curr != null;

        return (
          <div
            key={i}
            className={`${styles.imageContainer} ${imageStyle}`}
            style={{ "--offset": `${offset}` } as React.CSSProperties}
          >
            <div className={styles.gridContainer}>
              <div className={styles.innerImage} onClick={() => setCurr(i)}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={styles.pos} />
                ))}
                <img src={image.src} />
              </div>
              <a
                id={styles.textContainer}
                className={`${ifActive && styles.showText}`}
                href={image.href}
              >
                <h1 className={styles.title}>{image.title}</h1>
                <h1 className={styles.artist}>by {image.artist}</h1>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
