
import styles from '../../componentStyles/layout.module.css'

export default function Paragraph({children}) {

    return (
    <div className={styles.mainContent}>{children}</div>);
}