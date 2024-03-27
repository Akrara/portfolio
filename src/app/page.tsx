import Image from "next/image";
import styles from "./page.module.css";
const Clock = dynamic(() => import ("@/components/clock"),{ssr:false});
import dynamic from "next/dynamic";

export default function Home() {

  return (
    <main className={styles.main}>
      <Clock />
    </main>
  );
}
