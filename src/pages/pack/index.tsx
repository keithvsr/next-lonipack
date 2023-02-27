import Link from "next/link";
import Head from "next/head";
import { getSortedPackMembers } from "~/lib/pack";
import Member from "~/components/member";
import styles from "~/styles/Home.module.css";

import type { PackMember } from "~/lib/pack";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const allPackMembers = getSortedPackMembers();
  return {
    props: {
      allPackMembers,
    },
  };
};

export default function Pack({
  allPackMembers,
}: {
  allPackMembers: PackMember[];
}) {
  return (
    <>
      <Head>
        <title>The Loni Pack</title>
      </Head>
      <main>
        <div className={styles.card}>
          <Link href="/">
            <code>Back to main page</code>
          </Link>
        </div>
        <section className={styles.center}>
          <h1>These are the members of the Loni Pack!</h1>
          <p>
            A veritable who&apos;s who of delightfully delinquent doggos, ready
            to go bonkers and steal hearts!
          </p>
        </section>
        <section className={styles.center}>
          <h2>The Pack</h2>
          <div className={styles.grid}>
            {allPackMembers.map((packMember) => (
              <div className={styles.card} key={packMember.id}>
                <Member packMember={packMember} />
                <Link href={`/pack/${packMember.name.toLowerCase()}`}>
                  Go to {packMember.name}&apos;s page
                </Link>
              </div>
            ))}
          </div>
        </section>{" "}
      </main>
    </>
  );
}
