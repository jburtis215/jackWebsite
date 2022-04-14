import Link from "next/link";
import React from "react";

export default function NavContainer() {
        return (
            <div className="pl-5 h-16 bg-gray-700 py-5 sticky top-0 z-50">
                <Link href={"/"}>
                <div className="cursor-pointer float-left font-sans text-2xl text-gray-100">Jack Burtis</div>
                </Link>
            </div>
    )
}