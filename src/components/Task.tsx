import { Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './Task.module.css'

interface TaskProps {
    id: string
    title: string
    isComplete: boolean
    onDeleteTask: (id: string) => void
    onCompleteTask: (id: string) => void
}

export function Task({ id, title, isComplete, onDeleteTask, onCompleteTask } : TaskProps) {
    function handleRemoveTask() {
        onDeleteTask(id)
    }

    function handleFinishTask() {
        onCompleteTask(id)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.button}>
                    <button
                        className={isComplete ? styles.buttonPressed : styles.buttonNotPressed}
                        onClick={handleFinishTask}
                    />
                </div>
                <p className={isComplete ? styles.textFinished : styles.text}>
                    {title}
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