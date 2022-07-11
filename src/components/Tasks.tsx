import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Tasks.module.css';

import { PlusCircle } from 'phosphor-react';

import ClipBoard from '../assets/Clipboard.svg'

import { Task } from './Task';
import { v4 } from 'uuid'

export interface Task {
    id: string
    title: string
    isComplete: boolean
}

export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTask, setNewTask] = useState('')
    const [tasksCount, setTasksCount] = useState(0)

    function handleAddTask(event : FormEvent) {
        event.preventDefault()

        const NewTask = {
            id: v4(),
            title: newTask,
            isComplete: false
        }

        setTasks([...tasks, NewTask])
        setTasksCount(tasksCount + 1)

        setNewTask('')
    }

    function onNewTaskIsInvalid(event : InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function onCompleteTask(id : string) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }
            return task
        }))
    }

    function handleNewTaskChange(event : ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
        event.target.setCustomValidity('')
    }

    function onDeleteTask(id : string) {
        setTasks(tasks.filter(t => t.id !== id))
        setTasksCount(tasksCount - 1)
    }

    const isNewTaskEmpty = newTask.length === 0

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <header>
                    <form
                        className={styles.wrapper}
                        onSubmit={handleAddTask}
                    >
                        <input
                            type="text"
                            placeholder="Adicione uma nova tarefa"
                            required
                            onChange={handleNewTaskChange}
                            value={newTask}
                            onInvalid={onNewTaskIsInvalid}
                        />
                        <button 
                            type="submit"
                            disabled={isNewTaskEmpty}
                        >
                            <span>Criar</span>
                            <PlusCircle size={20} weight={"bold"}/>
                        </button>
                    </form>
                </header>
                <div>
                    <div className={styles.tasksCount}>
                        <div className={styles.createTasks}>
                            <strong>Tarefas criadas</strong>
                            <span>{tasksCount}</span>
                        </div>
                        <div className={styles.finishedTasks}>
                            <strong>Concluidas</strong>
                            <span>
                                {
                                    tasksCount === 0 ?
                                    0
                                    :
                                    `${tasks.reduce((anterior, atual) => {
                                        return atual.isComplete ? anterior + 1 : anterior
                                    }, 0)} de ${tasksCount}`
                                }
                            </span>
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
                            {
                                tasks.map(task => (
                                    <Task
                                        key={task.id}
                                        task={task}
                                        onDeleteTask={onDeleteTask}
                                        onCompleteTask={onCompleteTask}
                                    />
                                ))
                            }
                        </div>
                    }
                </footer>
            </div>
        </div>
    )
}