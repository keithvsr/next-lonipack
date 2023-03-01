import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Barlow } from "next/font/google";
import styles from "~/styles/Home.module.css";

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to the Loni Pack</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p className={barlow.className}>Welcome to the Loni Pack!</p>
          <div>
            <Link href="/join">
              <code className={styles.code}>care to join?</code>
            </Link>
          </div>
        </div>
        <div className={styles.center}>
          <figure className={styles.headshotfigure}>
            <div className={styles.headshot}>
              <Image
                priority
                fill
                className={styles.logo}
                src="/images/shiloh/bwuh.jpg"
                alt="Shiloh Bear"
              />
            </div>
            <figcaption className={styles.headshotcaption}>
              <p className={styles.homedog}>Shiloh</p>, very serious gentledog
              and chief Loni officer
            </figcaption>
          </figure>
        </div>
        <div className={styles.description}>
          <Link href="/pack">
            <div className={styles.code}>Check out the whole pack!</div>
          </Link>
        </div>
      </main>
    </>
  );
}
