import styles from "../../componentStyles/navMenu/navMenu.module.css"

export default function NavContainer({children}) {
    return (
        <div className={styles.navContainer}>
            {children}
        </div>
    )
}