"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from '../../components/header';
import Hero from '../../components/hero';
import Sec02 from '../../components/sec02';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
          <Header />
          <Hero></Hero>
          <Sec02></Sec02>
      </main>
    </>
  );
}
