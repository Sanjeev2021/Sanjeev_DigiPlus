// Importing Components
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';
// import Swal from "sweetalert2";
function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [tasks, setTasks] = useState([]); // Task State
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form
    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3500);
    }, [])
    // Fetching from Local Storage
    const getTasks = JSON.parse(localStorage.getItem("taskAdded"));
    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }
    }, [])
    // Add Task
    const addTask = (task) => {
        const id = uuidv4();
        const newTask = { id, ...task }
        setTasks([...tasks, newTask]);
        localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
    }
    // Delete Task
    const deleteTask = (id) => {
        const deleteTask = tasks.filter((task) => task.id !== id);
        setTasks(deleteTask);
        localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
    }
    // Edit Task
    const editTask = (id) => {
        const text = prompt("User Name");
        const day = prompt("Day and Time");
        let data = JSON.parse(localStorage.getItem('taskAdded'));
        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    text: text,
                    day: day,
                    id: uuidv4()
                }
            }
            return x;
        })
        alert("You have successfully updated a user!")
        localStorage.setItem("taskAdded", JSON.stringify(myData));
        window.location.reload();
    }
    return (
        <>
            {
                
                    <div className="container">
                        {/* App Header that has open and App Name */}
                        <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
                        {/* Revealing of Add Task Form */}
                        {showAddTask && <AddTask onSave={addTask} />}
                        {/* Task Counter */}
                        <h3>Number of Users: {tasks.length}</h3>
                        {/* Displaying of Tasks */}
                        {
                            tasks.length > 0 ?
                                (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />) :
                                ('No User Found!')
                        }
                    </div>
            }
        </>
    )
}
export default App;
