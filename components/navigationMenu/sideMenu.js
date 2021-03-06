
import React from "react";
import styles from '../../componentStyles/navMenu/sideMenu.module.css'
import Image from "next/image";
import SideMenuItem from "./sideMenuItem";
import SideMenuCategory from "./sideMenuCategory";
import ChildMenuItem from "./childMenuItem";
import Link from "next/link";
export default function SideMenu({open, onClick}) {
    const extraMenuClass = open ? styles.sideMenuOpen : styles.sideMenuClosed;
    const hamburgerMenuClass = open ? styles.hamburgerMenuOpen: styles.hamburgerMenuClose;

    const fluidSim = (
        <ChildMenuItem open={open} link='/posts/particleSimulation'>Fluid Simulation</ChildMenuItem>
    );
    const rayTracing = (
        <ChildMenuItem open={open} link='/posts/rayTracing'>Ray Tracing</ChildMenuItem>
    );
    return (
       <div className="flex sticky top-0">
           <div className={styles.sideMenu + ' ' + extraMenuClass}>
               <div>
                   <SideMenuCategory name={"Projects"} childLinks={[fluidSim, rayTracing]}/>
                   <SideMenuItem open={open} link='/posts/aboutMe'>About Me</SideMenuItem>
                   <SideMenuItem open={open} link='/posts/dinnerClub'>Dinner Club</SideMenuItem>
               </div>

           </div>
           <div className={'flex ' + styles.hamburgerMenu + ' ' + hamburgerMenuClass}>
               <div className={styles.hamburgerContainer } onClick={() => onClick()}>
                   <Image
                       priority
                       src="/images/hamburgerMenu.png"
                       className={styles.hamburger}
                       height={65}
                       width={65}
                       alt="hamburger"
                   />
               </div>
               <div className={styles.homeContainer + ' cursor-pointer'}>
                   <Link href={'/'} >
                       <Image
                           priority
                           src="/images/home-button.svg"
                           className={styles.hamburger}
                           height={65}
                           width={65}
                           alt="home"
                       />
                   </Link>
               </div>
           </div>

       </div>
        )
}