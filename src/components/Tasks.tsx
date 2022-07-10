import styles from './Tasks.module.css';

import { PlusCircle } from 'phosphor-react';

export function Tasks() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <header>
                    <form className={styles.wrapper}>
                        <input type="text" placeholder="Adicione uma nova tarefa" required />
                        <button type="submit">
                            <span>Criar</span>
                            <PlusCircle size={20} weight={"bold"}/>
                        </button>
                    </form>
                </header>
                <footer>
                    <div>
                        <div>
                            <strong>Tarefas criadas</strong>
                            <span>0</span>
                        </div>
                        <div>
                            <strong>Concluidas</strong>
                            <span>0</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}