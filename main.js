import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Pomodoro</h1>

  <div id="time">
    <div id="value"></div>
    <div id="taskName"></div>
  </div>

  <div class="tasks-container">
    <div class="form">
      <form action="" id="form">
        <input type="text" id="itTask" />
        <input type="submit" value="Agregar Tarea" id="bAdd" />
      </form>
    </div>
  </div>

  <div id="tasks"></div>
  </div>
`
