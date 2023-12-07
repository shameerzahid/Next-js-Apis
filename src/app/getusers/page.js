import Link from "next/link";

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
          </div>
        ))}
      </div>
    );
  }
  