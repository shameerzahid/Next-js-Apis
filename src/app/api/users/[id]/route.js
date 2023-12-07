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
{
    let payload = await req.json();
    let userid = res.params.id;
    payload.id = userid;
    console.log(payload);
    if(!payload.id || !payload.name || !payload.email || !payload.age)
    return NextResponse.json({result:"pass data correctly", success: false}, {status: 400})
    return NextResponse.json({result: payload, success: true}, {status: 200})
}