import { tasks } from "./Principal2";


export const renderTasks = () => {
    const html = tasks.map(task => {
        return `
        <div class="task">
            <div class="completed">${task.completed ? 
                `<span class="done">Done</span>`:
                `<button class="start-button" data-id="${task.id}">Start</button>`}</div>
            <div class="title">${task.title}</div>
        </div>`
    });

    const tasksContainer = document.querySelector("#tasks");
    tasksContainer.innerHTML = html.join(' ')
}