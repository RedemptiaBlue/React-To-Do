import './App.css';
import ToDoList from "./ToDoList"
import {useState} from "react"

let idNum = 0

function App() {
  const [toDoList, setToDoList] = useState([])
  const [text, setText] = useState("")
  const [filter, setFilter] = useState("none")

  function handleDelete(taskId) {
    setToDoList(toDoList.filter(task => task.id !== taskId))
  }

  function clearCompleted() {
    setToDoList(toDoList.filter(task => task.checked === false))
  }

  function addTask(e) {
    idNum++
    const newTask = {
      id: idNum,
      checked: false,
      text: text,
    }
    setText("")
    toDoList.push(newTask)
    e.preventDefault()
  }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>To-Do List</h1>
      </div>
      <form id="add-form" onSubmit={e => addTask(e)}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add a To-Do"/>
        <button type="submit">ADD</button>
      </form>
      <div className="todo-body">
        <ToDoList toDoList={toDoList} filter={filter} handleDelete={handleDelete} />
      </div>
      <nav className="todo-footer">
          <button onClick={()=>setFilter("all")}>All</button>
          <button onClick={()=>setFilter("incomplete")}>Incomplete</button>
          <button onClick={()=>setFilter("complete")}>Completed</button>
          <button onClick={clearCompleted}> Clear Completed</button>
      </nav>
    </div>
  );
}

export default App;
