import styles from './Header.module.css';
import logoTipo from '../assets/logoTipo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoTipo} alt="logo tipo do ToDo" />
            <h1>
                <strong>to</strong>
                <strong>do</strong>
            </h1>
        </header>
    )
}