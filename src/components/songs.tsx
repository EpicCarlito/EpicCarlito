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

        return (
          <div
            key={i}
            className={`${styles.imageContainer} ${styleClass}`}
            style={{ "--offset": `${offset}` } as React.CSSProperties}
            onClick={() => setCurr(i)}
          >
            {offset == 0 && curr != null ? (
              <>
                <MoveImage
                  // src={
                  //   "https://stenna.in/cdn/shop/products/34513-1.jpg?v=1663597043"
                  // }
                  src={image.src}
                />
                  <div id={styles.textContainer}>
                    <h1 className={styles.name}>{image.artist}</h1>
                    <h1 className={styles.desc}>{image.desc}</h1>
                  </div>
              </>
            ) : (
              <img
                // src={
                //   "https://images.unsplash.com/photo-1611242320536-f12d3541249b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVkJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                // }
                src={image.src}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
