import React, { useState } from 'react';
// import './Todolist.css';
import Button from 'react-bootstrap/Button';
import Tasklist from './Tasklist.js';
export default function Todolist() {
    const [task, setTask] = useState([]);
    // const taskItems = [];
    const addTask = (e) => {
        e.preventDefault();
        const newTaskInput = document.getElementById("newtask");
        const newTask = newTaskInput.value.trim();
        newTaskInput.value = '';
        if (newTask.length === 0) {
            return;
        } else {
            setTask(task => [...task, newTask]);
        }
    }

    const deleteTask = (e) => {
        e.preventDefault();
        const deleteIndex = e.target.parentElement.id;
        const remainTask = [...task];
        remainTask.splice(deleteIndex, 1);
        setTask([...remainTask]);
    }

    const updateTask = (e,index) => {
        e.preventDefault();
    }

    const confirmTask = (valueId) => {
        let temptask = task;
        temptask[valueId[1]] = valueId[0]; 
        setTask([...temptask]);
        // console.log('success!')
    }
    
    console.log(task)
    return (
        <div style={{ backgroundColor: "#96fbc4", height: "100vh" }}>
            <h1 style={{ textAlign: "center" }}>What's the plan for today?</h1>

            <form>
                <div style={{ margin: "5px", display: "flex", justifyContent: "center", padding: "10px 10px 10px 0px", height: "60px", width: "100%" }}>
                    <input style={{ marginRight: "5px" }} autoFocus id="newtask" type="text" />
                    <Button style={{ backgroundColor: "#6a85b6" }} size="sm" onClick={addTask} type="submit">Add task</Button>
                </div>
            </form>

            <div style={{ paddingLeft: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "5px" }}>
                <ul>{task.map((x, index) =>
                    <Tasklist key={index} taskItem={x} _id={index} handleDelete={deleteTask} handleUpdate={updateTask} handleConfirm={confirmTask}/>
                )}
                </ul>
            </div>
        </div>
    )
}

// const styles = StyleSheet.create({})
