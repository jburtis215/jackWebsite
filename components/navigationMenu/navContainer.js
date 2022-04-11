import Link from "next/link";
import MenuItem from "./menuItem";
import React from "react";

export default function NavContainer() {
        return (
            <div className="pl-5 h-16 bg-light-green py-5 sticky top-0">
                <Link href={"/"}>
                <div className="cursor-pointer float-left font-sans text-2xl text-gray-100">Jack Burtis</div>
                </Link>
                <span className=" pr-10 flex flex-row-reverse space-x-4 space-x-reverse  ">
                    <MenuItem children={"Previous Work"} link={"/posts/animation"}>
                    </MenuItem>
                    <MenuItem children={"Previous Work"} link={"/posts/animation"}>
                    </MenuItem>
                    <MenuItem children={"Animation Sample"} link={"/posts/animation"}>
                    </MenuItem>
                </span>
            </div>
    )
}