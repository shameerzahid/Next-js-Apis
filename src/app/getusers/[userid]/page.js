async function UserData(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    return data.result;
}

export default async function UserId({params}) { //here we will use this params becuause the number   i.e. 22 added to the route will get stored in params and directory name is [userid] so we will get that number to be userid: 22
    let selectedUsers = await UserData(params.userid) //passing userid to UserData
    console.log(selectedUsers)
    return(
        <div>
            <div>
                <h1>name: {selectedUsers.name}</h1>
                <h2>Age: {selectedUsers.age}</h2>
                <h5>Email: {selectedUsers.email}</h5>
            </div>
        </div>
    )
}