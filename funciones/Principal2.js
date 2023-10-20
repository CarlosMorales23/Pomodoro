import { createTask } from "./createTask";
import { renderTasks } from "./renderTask";




export const tasks = []
let time = 0;   // couenta regresiva
let timer = null; //funcion con set interval
let timebreak = null; // 5min de descanso
let current = null;  //tarea actual ejecutando. 


const bAdd = document.querySelector('#bAdd') // Boton agrega tareas
const itTask = document.querySelector('#itTask') //
const form = document.querySelector('#form')


form.addEventListener('submit', e =>{
    e.preventDefault(); 
    if( itTask.value !== ' '){
        createTask(itTask.value);
        itTask.value = '';
        renderTasks()
    }
});
