
import React from "react";
import styles from '../../componentStyles/navMenu/sideMenu.module.css'
import Image from "next/image";
import Link from 'next/link'
export default function SideMenu({open, onClick}) {
    const extraMenuClass = open ? styles.sideMenuOpen : styles.sideMenuClosed;
    const extraCategoryClass = open ? styles.categoryOpen: styles.categoryClose;
    const extraBurgerClass = open ? styles.hamburgerOpen: styles.hamburgerClose;
    const hamburgerMenuClass = open ? styles.hamburgerMenuOpen: styles.hamburgerMenuClose;
    return (
       <div className="flex">
           <div className={styles.sideMenu + ' ' + extraMenuClass}>
               <div>
                   <div className={styles.category + ' ' + extraCategoryClass + ' hover:bg-blue-200'}><Link href='/posts/animation'><span className="ml-5">Animation Sample</span></Link></div>
                   <div className={styles.category + ' ' + extraCategoryClass + ' hover:bg-blue-200'}><Link href='/'><span className="ml-5">hi</span></Link></div>
               <div className={styles.category + ' ' + extraCategoryClass + ' hover:bg-blue-200'}><Link href='/'><span className="ml-5">hi</span></Link></div>
                   <div className={styles.category + ' ' + extraCategoryClass + ' hover:bg-blue-200'}><Link href='/'><span className="ml-5">hi</span></Link></div>
               </div>

           </div>
           <div className={styles.hamburgerMenu + ' ' + hamburgerMenuClass}>
               <div className={styles.hamburgerContainer + ' ' + extraBurgerClass} onClick={() => onClick()}>
                   <Image
                       priority
                       src="/images/hamburgerMenu.png"
                       className={styles.hamburger}
                       height={45}
                       width={45}
                       alt="hamburger"
                   />
               </div>
           </div>

       </div>
        )
}