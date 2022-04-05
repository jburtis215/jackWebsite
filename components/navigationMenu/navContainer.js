import styles from "../../componentStyles/navMenu/navMenu.module.css"
import Image from "next/image";
import MenuItem from "./menuItem";
import React from "react";

export default function NavContainer() {
        return (
            <div className="pl-5 h-16 bg-light-green py-5">
                <span className="float-left font-sans text-2xl text-gray-100">Jack Burtis</span>
        <span className=" pr-10 flex flex-row-reverse space-x-4 space-x-reverse  ">
            {/*
            <ul className={styles.menuItemList}>
                <MenuItem children={"Previous Work"} link={"/posts/animation"}>
                </MenuItem>
                <MenuItem children={"Previous Work"} link={"/posts/animation"}>
                </MenuItem>
            </ul>
            */}
            <MenuItem children={"Previous Work"} link={"/posts/animation"}>
            </MenuItem>
            <MenuItem children={"Previous Work"} link={"/posts/animation"}>
            </MenuItem>
            <MenuItem children={"Previous Work"} link={"/posts/animation"}>
            </MenuItem>
        </span>
            </div>
    )
}