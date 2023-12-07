"use client"
import { useState, useEffect} from "react"
export default function UpdateUser({params}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    useEffect(() => {
        GetUsers()
    }, [])
    let id = params.userid; //the id provided in linke /api/users/33, 33 stored in params.userid
    async function GetUsers () {
        let data = await fetch(`http://localhost:3000/api/users/${id}`)
        data = await data.json();
        console.log(data)
        setName(data.result.name)
        setEmail(data.result.email)
        setAge(data.result.age)
        return data.result;
    }

    async function Update() {
        let result = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({name,email,age})
        })
        result = await result.json();
        console.log(result)
        if(result.success)
        alert("success")
    else
    alert("failed")
    }
   
    return (
        <div>
            <h1>User Details</h1>
            <div className="container">
            <h1 className="users">Add Users Data</h1>
            <input type="text" className="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
            <input type="text" className="text" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="email" />
            <input type="text" className="text" value={age} onChange={(e) => setAge(e.target.value)}  placeholder="id" />
            <button className="btn" onClick={Update} >Update</button>
        </div>
        </div>
    )
}