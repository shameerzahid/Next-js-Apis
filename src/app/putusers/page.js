"use client"
import { useState } from "react"
import "./page.css"
import { headers } from "../../../next.config"
export default function PutUsers() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")

    async function SubmitForm() {
        console.log(name, email, id)
        let response = await fetch("http://localhost:3000/api/users",
        {
        method: "POST",
        headers: {
            "Content-type": "application/json" // we tells that data we are sending will be in json format.
        },
        body: JSON.stringify({name,id, email}) //to send data to server it must be converted into string. and headers are passed so that server knows that this data is to be converted into json
    });
    response = await response.json();
    if(response.success)
    alert("user added")
else
alert(response.result)
    console.log(response)
        }
    return(
        <div className="container">
            <h1 className="users">Add Users Data</h1>
            <input type="text" className="text" onChange={(e) => setName(e.target.value)} placeholder="name" />
            <input type="text" className="text" onChange={(e) => setEmail(e.target.value)}  placeholder="email" />
            <input type="text" className="text" onChange={(e) => setId(e.target.value)}  placeholder="id" />
            <button className="btn" onClick={() => SubmitForm()} >Submit</button>
        </div>
    )
}