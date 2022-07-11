import { Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './Task.module.css'

import { Task as TaskProps } from './Tasks'

interface TasksProps {
    task: TaskProps
    onDeleteTask: (id: string) => void
    onCompleteTask: (id: string) => void
}

export function Task({ task, onDeleteTask, onCompleteTask } : TasksProps) {
    function handleRemoveTask() {
        onDeleteTask(task.id)
    }

    function handleFinishTask() {
        onCompleteTask(task.id)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.button}>
                    <button
                        className={task.isComplete ? styles.buttonPressed : styles.buttonNotPressed}
                        onClick={handleFinishTask}
                    />
                </div>
                <p className={task.isComplete ? styles.textFinished : styles.text}>
                    {task.title}
                </p>
            </div>
            <button
                className={styles.delete}
                onClick={handleRemoveTask}
            >
                <Trash />
            </button>
        </div>
    )
}