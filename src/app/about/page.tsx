"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from '../../../components/header';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPage() {
    return (
      <div className={styles.page}>
        <Header></Header>
        <h1 className={styles.h1}>About</h1>
        <p>Página de Sobre</p>
      </div>
    );
  }