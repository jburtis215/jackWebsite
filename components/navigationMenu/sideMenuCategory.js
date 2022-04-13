import {useState} from "react";
import styles from '../../componentStyles/navMenu/sideMenu.module.css'


export default function SideMenuCategory({name, childLinks}) {
    const [menuOpen, setMenuOpen] = useState(false)
    function onClickItem() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div onClick={onClickItem} className={styles.topCategory}>
                <span className="ml-5 pt-7">
                    {name}
                    <i className={styles.arrow + ' ' + (menuOpen ? styles.down : styles.side)}/>
                </span>
            </div>
            {(menuOpen ? childLinks : '')}
        </>
    )
}