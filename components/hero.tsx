"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./hero.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
    const leftRef = useRef<HTMLDivElement | null>(null);
    const rightRef = useRef<HTMLDivElement | null>(null);
    const rightDivRef = useRef<HTMLDivElement | null>(null);
    const heroRef = useRef<HTMLDivElement | null>(null);
    const LataMRef = useRef<HTMLDivElement | null>(null);
    const LataDRef = useRef<HTMLDivElement | null>(null);
    const LataSombraRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animação de entrada dos h1
        if (!heroRef.current) return;
        const titles = heroRef.current.querySelectorAll("h1, button");
        gsap.to(titles, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0,
        });

        // Animação de entrada da lata desktop
        const lataD = LataDRef.current;
        gsap.set(lataD, { opacity: 0, y: 60, rotate: 20, scale: 0.6 });
        gsap.to(lataD, {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.6,
        });

        // Animação de entrada da lata mobile
        const lataM = LataMRef.current;
        gsap.set(lataM, { opacity: 0, y: 60, rotate: 20, scale: 0.6 });
        gsap.to(lataM, {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.6,
        });

        
        // Animação de entrada da sombra
        const LataSombra = LataSombraRef.current;
        gsap.to(LataSombra, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.8,
        });


        const isMobile = window.innerWidth <= 1024;

        // Limpa animações antigas e triggers
        gsap.killTweensOf([leftRef.current, rightRef.current]);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        if (isMobile) {
            // Mobile: animações diferentes
            gsap.to(leftRef.current, {
                x: "200",
                ease: "none",
                scrollTrigger: {
                    trigger: rightDivRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 3,
                },
            });
            gsap.to(rightRef.current, {
                x: "-200",
                ease: "none",
                scrollTrigger: {
                    trigger: rightDivRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 3,
                },
            });
        } else {
            // Desktop: animação paralaxe
            gsap.to(leftRef.current, {
                y: "1000",
                ease: "none",
                scrollTrigger: {
                    trigger: rightDivRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 3,
                },
            });
            gsap.to(rightRef.current, {
                y: "-1000",
                ease: "none",
                scrollTrigger: {
                    trigger: rightDivRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 3,
                },
            });
        }

        // Cleanup ao desmontar componente
        return () => {
            gsap.killTweensOf([leftRef.current, rightRef.current]);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className={styles.wrapSec01}>
            <div className={styles.shadowTop}></div>
            <div className={styles.shadowBottom}></div>
            <section className={styles.hero} ref={heroRef}>
                <div className={styles.divLeft}>
                    <div>
                        <h1>Sabor<span>.</span></h1>
                        <h1>estilo<span>.</span></h1>
                        <h1>liberdade<span>.</span></h1>
                    </div>
                    <button className={styles.button}>
                        <a>
                            Cupom na primeira compra
                            <svg width="21" height="21" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3_1267)">
                                    <path d="M10.7226 17.6055L2.51507 9.39801V11.0747C2.51507 11.5191 2.69112 11.9466 3.0097 12.2568L9.54049 18.7876C10.1944 19.4415 11.2591 19.4415 11.913 18.7876L17.1192 13.5814C17.7731 12.9275 17.7731 11.8628 17.1192 11.2089L10.7226 17.6055Z" fill="#0A200E" />
                                    <path d="M9.54049 14.5958C10.1944 15.2497 11.2591 15.2497 11.913 14.5958L17.1192 9.38959C17.7731 8.73567 17.7731 7.67096 17.1192 7.01704L10.5884 0.486246C10.27 0.175469 9.84294 0.00104403 9.39797 0L4.19178 0C3.26959 0 2.51507 0.75452 2.51507 1.67671V6.8829C2.51507 7.32723 2.69112 7.75479 3.0097 8.06498L9.54049 14.5958ZM6.07808 2.51507C6.35601 2.51507 6.62256 2.62548 6.81909 2.822C7.01562 3.01853 7.12603 3.28508 7.12603 3.56301C7.12603 3.84095 7.01562 4.10749 6.81909 4.30402C6.62256 4.50055 6.35601 4.61096 6.07808 4.61096C5.80015 4.61096 5.5336 4.50055 5.33707 4.30402C5.14054 4.10749 5.03014 3.84095 5.03014 3.56301C5.03014 3.28508 5.14054 3.01853 5.33707 2.822C5.5336 2.62548 5.80015 2.51507 6.07808 2.51507Z" fill="#0A200E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_1267">
                                        <rect width="20.1205" height="20.1205" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                    </button>
                </div>

                {/* Visível apenas no Mobile */}
                <div className={styles.lataMobile} ref={LataMRef}>
                    <Image
                        src="/medias/lata-desktop.png"
                        width={0}
                        height={0}
                        alt="PLata Xeque Mate"
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>

                {/* Visível apenas no Desktop */}
                <div className={styles.lataDesktop} ref={LataDRef}>
                    <Image
                        src="/medias/lata-desktop.png"
                        width={0}
                        height={0}
                        alt="PLata Xeque Mate"
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>

                {/* Sombra da Lata */}
                <div className={styles.lataSombra} ref={LataSombraRef}>
                    <Image
                        src="/medias/sombra-lata.png"
                        width={0}
                        height={0}
                        alt="Sombra Lata Xeque Mate"
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>

                <div className={styles.divRight} ref={rightDivRef}>
                    <div ref={rightRef} className={styles.animatedImagesRight}>
                        <img className={styles.img} src="/medias/imgHero4.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero01.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero2.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero3.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero4.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero01.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero3.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero4.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero01.png" alt="Logo Xeque-Mate" />
                    </div>

                    <div ref={leftRef} className={styles.animatedImagesLeft}>
                        <img className={styles.img} src="/medias/imgHero4.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero01.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero2.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero3.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero4.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero01.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero3.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero4.png" alt="Logo Xeque-Mate" />
                        <img className={styles.img} src="/medias/imgHero01.png" alt="Logo Xeque-Mate" />
                    </div>
                </div>
            </section>
        </div>
    );
}
