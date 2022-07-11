import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Taks() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <input type="checkbox" />
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </div>
            <Trash size={20} />
        </div>
    )
}