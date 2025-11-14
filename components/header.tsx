'use client'

import Image from "next/image";
import styles from "./header.module.css";
import { useState } from "react";
import Link from "next/link";
import TransitionLink from "./TransitionLink";



export default function Header() {

      // Um estado para saber se está aberto ou não
  const [isOpen, setIsOpen] = useState(false);

  // Função que alterna o estado
  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li><TransitionLink href="/"   className={styles.menuLink} activeClassName={styles.menulinkActive}>Home</TransitionLink></li>
                <li><TransitionLink href="/teste"   className={styles.menuLink} activeClassName={styles.menulinkActive}>Comprar</TransitionLink></li>
                <li><TransitionLink href="/about"   className={styles.menuLink} activeClassName={styles.menulinkActive}>Sobre</TransitionLink></li>
                <li><TransitionLink href="/teste"   className={styles.menuLink} activeClassName={styles.menulinkActive}>Faq</TransitionLink></li>
            </ul>
        </nav>

        <div className={styles.imageWrap}>
            <img className={styles.img} src="/medias/logo-xeque-mate.png" alt="Logo Xeque-Mate" />
        </div>

          <div className={styles.iconsWrap}>
              <nav className={styles.navIcons}>
                  <a className={styles.lupa}>
                      <img src="/medias/lupa.svg" alt="pesquisar" />
                  </a>
                  <a className={styles.user}>
                      <img src="/medias/user.svg" alt="login" />
                  </a>
                  <a className={styles.cart}>
                      <img src="/medias/cart.svg" alt="carrinho" />
                  </a>
                  <a className={`${styles.burguerToggle} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </a>
              </nav>
          </div>
      </header>
  );
}
