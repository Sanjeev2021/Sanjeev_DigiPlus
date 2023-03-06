import "../index.css"
const Task = ({ task, onDelete, onEdit }) => {
    return (
      <div>
        <div className="task">
          <div>
            <p className="taskName">
              <span className="textBold">User Name:</span> {task.text}
            </p>
        <p className="taskDate"><span className="textBold">Created:</span>              {task.day}
            </p>
        <p className="taskDate"><span className="textBold">Email:</span>              {task.email}
            </p>
        <p className="taskDate"><span className="textBold">Status:</span>              {task.status}
            </p>
            </div>
            <div>
            <p><button onClick={() => onDelete(task.id)} className="delIcon" >Delete</button></p>
          <p><button onClick={() => onEdit(task.id)} className="editIcon" >Edit</button></p>
          </div>
        </div>
      </div>
    )
}
export default Task;