import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "~/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to the Loni Pack</title>
        <meta name="description" content="The Loni Pack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Welcome to the Loni Pack!</p>
          <div>
            <code className={styles.code}>care to join?</code>
          </div>
        </div>

        <div className={styles.center}>
          <figure>
            <Image
              className={styles.logo}
              src="/images/shiloh/bwuh.png"
              alt="Shiloh Bear"
              width={378}
              height={391}
              priority
            />
            <figcaption>
              This is Shiloh, very serious gentledog and chief Loni officer
            </figcaption>
          </figure>
          <Link href="/pack">
            <div className={styles.card}>Check out the whole pack!</div>
          </Link>
        </div>
      </main>
    </>
  );
}
