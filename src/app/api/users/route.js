import { connectDB } from "@/lib/db";
import UserSchema from "@/models/User.model"

export const GET = async(req)=>{
   
try {
    await connectDB();
    const Users = await UserSchema.find();
    return new Response (JSON.stringify({Users:Users}), {status:200}) 
    
} catch (error) {
   return new Response (JSON.stringify({message:"error in getting database"})) 
}

}