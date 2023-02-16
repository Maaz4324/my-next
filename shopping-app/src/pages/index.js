import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HeroSec from "@/components/HeroSec";
import Category from "@/components/Category";
import Best from "@/components/Best";
import Faq from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title> Shri Venkateswara Trading</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContainer}>
        <HeroSec />
        <Category />
        <Best />
        <Faq />
      </div>
    </>
  );
}
