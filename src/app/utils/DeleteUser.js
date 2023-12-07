"use client"
export default function DeleteUser(props) {
    const DeleteUser = async () => {
        let result = await fetch(`http://localhost:3000/api/users/${props.id}`,{
            method: "DELETE"
        })
        result = await result.json();
        if(result.success)
        alert(result.result)
    else
    alert(result.result)

    }
    return (
        <button onClick={DeleteUser}>Delete</button>

    )
}