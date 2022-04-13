import styles from "../../componentStyles/navMenu/sideMenu.module.css";
import Link from "next/link";

export default function ChildMenuItem({open, children, link}) {
    const extraCategoryClass = open ? styles.categoryOpen: styles.categoryClose;
    return (
        <Link href={link}>
            <div className={styles.subCategory + ' ' + extraCategoryClass + ' hover:bg-blue-200'}>
                <span className="ml-8 pt-7">
                    {children}
                </span>
            </div>
        </Link>
    )
}