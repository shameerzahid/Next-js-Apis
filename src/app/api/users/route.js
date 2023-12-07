import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

 export async function  GET(){
    const data = await user;
    console.log(data,"here is the data")
    return NextResponse.json(data,{status:200})
 }

 export async function POST(request){
   const payload = await request.json(); //request.json() will have the json data sent from the frontend, right now we are sending it using postman
   console.log(payload);
   if(!payload.name || !payload.id || !payload.email)
   return NextResponse.json({result: "Please enter correct data", success: false},{status:400})

   return NextResponse.json({result: payload, success: true}, {status: 201})
 }