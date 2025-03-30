import { connectDB } from "@/lib/db";
import UserSchema from "@/models/User.model"


export const POST =async (req)=>{
    let body = await req.json()
    try {
        await connectDB();
        let newUser =  new UserSchema({
            firstName:body.firstName,
            lastName:body.lastName,
            email:body.email,
            message:body.message
        })
        await newUser.save();
        return new Response(JSON.stringify({message: "User added successfuly"}), {status: 200})
       

    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({message: "Something went wrong" , error:error}), {status: 500}) 
    }
}