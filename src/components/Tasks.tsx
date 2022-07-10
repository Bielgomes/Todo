import styles from './Tasks.module.css';

import { PlusCircle } from 'phosphor-react';

export function Tasks() {
    return (
        <div>
            <header className={styles.header}>
                <form className={styles.wrapper}>
                    <input type="text" placeholder="Adicione uma nova tarefa" required />
                    <button type="submit">
                        <span>Criar</span>
                        <PlusCircle size={16} weight={"bold"}/>
                    </button>
                </form>
            </header>
        </div>
    )
}