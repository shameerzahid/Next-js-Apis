import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET(req, res)
{
    // const data = user;
    const filteredData = user.filter((item) => item.id == res.params.id )

    // return NextResponse.json(filteredData,{status:200})
    return NextResponse.json(filteredData.length == 0? 
        {result: "No data found", success: false} :
        {result: filteredData[0], success: true} ,
        {status: 200}
        )
}

export async function PUT(req, res)
{ //its written here becuase it will update a specific data 
    let payload = await req.json();
    let userid = res.params.id;
    payload.id = userid;
    console.log(payload);
    if(!payload.id || !payload.name || !payload.email || !payload.age)
    return NextResponse.json({result:"pass data correctly", success: false}, {status: 400})
    return NextResponse.json({result: payload, success: true}, {status: 200})
}

export function DELETE(req, content){
    let id = content.params.id;
    console.log(id)
    //code to delte specific record will be written later
    if(id)
    return NextResponse.json({result: "Id Deleted", success: true}, {status: 200})
 else
 return NextResponse.json({result: "can not delete users", success: false},{status:400})
  }