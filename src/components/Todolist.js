import React, {useState} from 'react';
// import './Todolist.css';
import Button from 'react-bootstrap/Button';

export default function Todolist() {
    const [task, setTask] = useState([]);
    // const taskItems = [];
    const addTask = (e) => {
        e.preventDefault();
        const newTaskInput = document.getElementById("newtask");
        const newTask = newTaskInput.value.trim();
        newTaskInput.value = '';
        if (newTask.length === 0){
            return;
        } else {
            setTask(task => [...task, newTask]);
        }
    }
    
    const deleteTask = (e) => {
        e.preventDefault();
        const deleteIndex = e.target.id;
        const remainTask = [...task];
        remainTask.splice(deleteIndex, 1);
        setTask([...remainTask]);
    }
    return (
        <div>
            <h1>To do</h1>
            <form>
                <div>
                    <input autoFocus id="newtask" type="text" />{' '}
                    <Button style={{marginBottom:"5px"}} size="sm" onClick={addTask} type="submit">Add task</Button>
                </div>
            </form>
            <ul>{task.map((x, index) => 
                <li key={index}>{x} <Button style={{marginBottom:"2px", paddingTop:"2px", paddingBottom:"2px"}}variant="secondary "size="sm" id={index} onClick={deleteTask} type="submit">Done</Button></li>
                )}
            </ul>
        </div>
    )
}

// const styles = StyleSheet.create({})
