import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Tasklist({ taskItem, _id, handleDelete, handleUpdate, handleConfirm }) {
    const [isHidden, setHidden] = useState("none");
    const [value, setValue] = useState("")
    const display = isHidden === "block" ? 'none' : 'block';
    const callBackDelete = (e) => {
        handleDelete(e);
    }

    const callBackUpdate = (e) => {
        handleUpdate(e);
        setHidden("block")
    }

    const callBackConfirm = (index) => {
        const taskValueId = [value, _id]
        handleConfirm(taskValueId);
        setHidden("none");
    }
    const changeValue = (e) => {
        setValue(e.target.value);
    }

    console.log(taskItem)
    return (
        <div style={{ borderRadius: "10px", padding: "10px 40px 10px 40px", display: "flex", alignItems: "flex-start", justifyContent: "left", backgroundColor: "#f9f586", marginBottom: "2px", width: "80%" }}>
            <input style={{ marginRight: "5px", display: isHidden }} onChange={changeValue} type="text" />
            <li style={{ display: display, marginRight: "5px" }} >{taskItem}</li>
            <Button style={{ display: display, marginBottom: "2px", marginRight: "5px", paddingTop: "2px", paddingBottom: "2px", backgroundColor: "#6a85b6" }} variant="secondary" size="sm" type="submit" onClick={callBackDelete}>Done</Button>
            <Button style={{ display: display, marginBottom: "2px", marginRight: "5px", paddingTop: "2px", paddingBottom: "2px", backgroundColor: "#6a85b6" }} variant="secondary" size="sm" type="submit" onClick={callBackUpdate}>Update</Button>
            <Button style={{ display: isHidden, marginBottom: "2px", marginRight: "5px", paddingTop: "2px", paddingBottom: "2px", backgroundColor: "#6a85b6" }} variant="secondary" size="sm" type="submit" onClick={callBackConfirm}>Confirm</Button>
        </div>
    )
}
