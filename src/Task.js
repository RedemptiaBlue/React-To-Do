import {useState} from "react"


function Task(props) {
    const [completed, setCompleted] = useState(props.checked)

    function toggleCheck() {
        setCompleted(!completed)
        props.setChecked(props.id)
    }

    return(
        <div className="task">
            <input
                type="checkbox" 
                checked={completed} 
                onChange={toggleCheck} 
            />
            <span style={{textDecoration: completed? "line-through" : "none"}}>{props.text}</span>
            <button className="delete" onClick={() => {props.handleDelete(props.id)}}>X</button>
        </div>
    )
}

export default Task