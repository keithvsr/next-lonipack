import Head from "next/head";
import Link from "next/link";
import Member from "~/components/member";
import { getAllMemberNames, getPackMember } from "~/lib/pack";
import styles from "~/styles/Home.module.css";

import type { GetStaticPaths, GetStaticProps } from "next";
import type { PackMember } from "~/lib/pack";

export const getStaticProps: GetStaticProps = ({ params }) => {
  const packMember =
    params && params.name && typeof params.name === "string"
      ? getPackMember(params.name)
      : getPackMember("shiloh");
  return {
    props: {
      packMember,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllMemberNames();
  return {
    paths,
    fallback: false,
  };
};

export default function MemberPage({ packMember }: { packMember: PackMember }) {
  const title =
    packMember.name === "Shiloh"
      ? "Shiloh - The Loniest Loni"
      : `${packMember.name} - A Very Good Pack Member`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.card}>
        <Member packMember={packMember} />
        <Link href="/pack">Back to Pack</Link>
        <br />
        <Link href="/">Back Home</Link>
      </div>
    </>
  );
}
