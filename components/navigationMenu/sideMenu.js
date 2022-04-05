
import React from "react";
import styles from '../../componentStyles/navMenu/sideMenu.module.css'
import Image from "next/image";
import Link from 'next/link'
export default function SideMenu({open, onClick}) {
    return open ? (
        <div className={styles.sideMenu}>
            <span className={styles.hamburgerContainer} onClick={() => onClick()}>
                <Image
                    priority
                    src="/images/hamburgerMenu.png"
                    className={styles.hamburger}
                    height={45}
                    width={45}
                    alt="hamburger"
                />
            </span>
            <Link href='/'><div className={styles.category}>hi</div></Link>
            <Link href='/'><div className={styles.category}>hi</div></Link>
            <Link href='/'><div className={styles.category}>hi</div></Link>
            <Link href='/'><div className={styles.category}>hi</div></Link>
        </div>
        ) : (
        <div className={styles.sideMenuClosed}>
            <span className={styles.hamburgerContainer} onClick={() => onClick()}>
                <Image
                    priority
                    src="/images/hamburgerMenu.png"
                    className={styles.hamburger}
                    height={45}
                    width={45}
                    alt="hamburger"
                />
            </span>
        </div>
        )
}