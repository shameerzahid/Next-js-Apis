import Link from "next/link";
import DeleteUser from "../utils/DeleteUser";

async function GetApi() {
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    console.log("Fetched data:", data); // Add this line to log the fetched data
    return data;
  }
  
  export default async function GetUsers() {
    let users = await GetApi();
    console.log("Users array:", users); // Add this line to log the users array
    return (
      <div>
        <h1>All Users....</h1>
        {users.map((item) => (
          <div key={item.id}>
            <Link href={`/getusers/${item.id}`}>
              {item.name}
            </Link>
            <Link href={`/getusers/${item.id}/update`}>
              edit
            </Link>  
            <DeleteUser id={item.id} />
            {/* we cant use async await in client functions and we have to use onclick function here to add a delte btn therefore we will creata a seperate client component for delte and import that here  */}

          </div>
        ))}
      </div>
    );
  }
  