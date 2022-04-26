import Link from "next/link";
import React from "react";

export default function NavContainer() {
        return (
            <div className="pr-5 h-16 py-5 top-0 a z-50">
                <Link href={"/"}>
                <div className="cursor-pointer float-right mr-14 mt-8 font-sans text-2xl text-gray-900">Jack Burtis</div>
                </Link>
            </div>
    )
}