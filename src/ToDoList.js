import Task from './Task'

function ToDoList(props) {

    function setChecked(taskId) {
        props.toDoList.map(task => {
          if(task.id === taskId) {
            task.checked = !task.checked
          }
          return task
        })
      }

    function renderList(taskSet) {
            return taskSet.map(task => 
          <Task id={task.id} checked={task.checked} text={task.text} key={task.id} setChecked={setChecked} handleDelete={props.handleDelete}/>
        )
      }

    switch(props.filter) {
        case "all":
            return(
                <div>{renderList(props.toDoList)}</div>
            )
        case "incomplete":
            return(
                <div>{renderList(props.toDoList.filter(task=>task.checked === false))}</div>
            )
        case "complete":
            return(
                <div>{renderList(props.toDoList.filter(task => task.checked === true))}</div>
            )
        default:
            return(
                <div>{renderList(props.toDoList)}</div>
            )
    }

    
}

export default ToDoList