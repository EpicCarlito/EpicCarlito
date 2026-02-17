import { useState } from "react";
import styles from "../styles/_heading.module.scss";

export default function Heading() {
  const [tab, setTab] = useState<number>(0);

  const tabs = ["Home", "Songs"];

  return (
    <div className={styles.container}>
      {tabs.map((val: String, i: number) => {
        const ifActive = tab == i;

        return (
          <button key={i} className={`${styles.heading} ${ifActive ? styles.active : ""}`} onClick={() => setTab(i)}>
            <h1 className={styles.innerText}>{val}</h1>
          </button>
        );
      })}
    </div>
  );
}
