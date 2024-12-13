import Link from "next/link";
import Image from "next/image";
import React from "react";
import logoImg from "@/app/assets/logo.png";
import styles from "./Header.module.css";
import HeaderBg from "./HeaderBg";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <>
      <HeaderBg />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="Logo Image" priority />
          NextLevel Foods
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
