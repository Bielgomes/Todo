import styles from './Tasks.module.css';

import { PlusCircle } from 'phosphor-react';

import ClipBoard from '../assets/Clipboard.svg'
import { Taks } from './Task';

export function Tasks() {
    let tasksCount = 1;

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
                <div>
                    <div className={styles.tasksCount}>
                        <div className={styles.createTasks}>
                            <strong>Tarefas criadas</strong>
                            <span>0</span>
                        </div>
                        <div className={styles.finishedTasks}>
                            <strong>Concluidas</strong>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <footer className={styles.footer}>
                    { tasksCount === 0 ?
                        <div className={styles.tasksList}>
                            <img src={ClipBoard} alt="ClipBoard Icon" />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                        :
                        <div>
                            <Taks />
                            <Taks />
                            <Taks />
                            <Taks />
                            <Taks />
                        </div>
                    }
                </footer>
            </div>
        </div>
    )
}