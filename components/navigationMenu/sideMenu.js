
import React from "react";
import styles from '../../componentStyles/navMenu/sideMenu.module.css'
import Image from "next/image";
import SideMenuItem from "./sideMenuItem";
import SideMenuCategory from "./sideMenuCategory";
import ChildMenuItem from "./childMenuItem";
export default function SideMenu({open, onClick}) {
    const extraMenuClass = open ? styles.sideMenuOpen : styles.sideMenuClosed;
    const hamburgerMenuClass = open ? styles.hamburgerMenuOpen: styles.hamburgerMenuClose;

    const fluidSim = (
        <ChildMenuItem open={open} link='/posts/animation'>Fluid Simulation</ChildMenuItem>
    );
    const rayTracing = (
        <ChildMenuItem open={open} link='/posts/rayTracing'>Ray Tracing</ChildMenuItem>
    );
    const particleSimulation = (
        <ChildMenuItem open={open} link='/posts/particleSimulation'>Particle Simulation</ChildMenuItem>
    );
    return (
       <div className="flex sticky top-0">
           <div className={styles.sideMenu + ' ' + extraMenuClass}>
               <div>
                   <SideMenuCategory name={"Projects"} childLinks={[fluidSim, rayTracing]}/>
                   <SideMenuCategory name={"Interactive"} childLinks={particleSimulation}/>
                   <SideMenuItem open={open} link='/posts/dinnerClub'>Dinner Club</SideMenuItem>
               </div>

           </div>
           <div className={styles.hamburgerMenu + ' ' + hamburgerMenuClass}>
               <div className={styles.hamburgerContainer } onClick={() => onClick()}>
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