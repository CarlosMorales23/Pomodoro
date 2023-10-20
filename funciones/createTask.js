import { tasks } from "./Principal2"


export const createTask = (value) => {
    const newTask = {
        id:(Math.ramdom() * 100).toString(36).slice(3),
        title : value,
        completed : false, 
    }

    tasks.unshift(newTask)
}