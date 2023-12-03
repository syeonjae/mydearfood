import Aside from "./Aside";
import Content from "./Content";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Aside />
      <Content />
    </main>
  );
}
