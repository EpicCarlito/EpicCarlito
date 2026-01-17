import { useState } from "react";
import songs from "../../public/songs.json";
import styles from "../styles/_songs.module.scss";
import MoveImage from "./moveImage";

export default function Members() {
  const [curr, setCurr] = useState<number | null>(null);

  return (
    <div className={styles.membersContainer}>
      <div className={styles.membersBackground} />
      <div className={styles.memberContainer}>
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

          return (
            <div
              key={i}
              id={styles.imageContainer}
              className={styleClass}
              style={{ "--offset": `${offset}` } as React.CSSProperties}
              onClick={() => setCurr(i)}
            >
              <div className={styles.hoverContainer}>
                <MoveImage src={image.src} />

                {offset == 0 && curr != null ? (
                  <div id={styles.textContainer}>
                    <h1 className={styles.name}>{image.artist}</h1>
                    <h1 className={styles.desc}>{image.desc}</h1>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
