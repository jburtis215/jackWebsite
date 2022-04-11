import Link from "next/link";

export default function MenuItem({children, link}) {
    return (
    <div className="px-2 text-center rounded bg-light-gray">
        <Link href={link}>
            <button>
                {children}
            </button>
        </Link>
        </div>
    )
}