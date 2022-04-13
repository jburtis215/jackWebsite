import {useState} from "react";
import styles from '../../componentStyles/navMenu/sideMenu.module.css'


export default function SideMenuCategory({name, childLinks}) {
    const [menuOpen, setMenuOpen] = useState(false)
    function onClickItem() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div  className={styles.topCategory + ' ' + styles.menuItem}>
                <div className="ml-5 pt-7" onClick={onClickItem}>
                    {name}
                    <i className={styles.arrow + ' ' + (menuOpen ? styles.down : styles.side)}/>
                </div>
                {(menuOpen ? childLinks : '')}
            </div>
        </>
    )
}