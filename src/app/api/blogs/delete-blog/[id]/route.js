import { connectDB } from "@/lib/db";
import BlogSchema from "@/models/Blog.model"


export const DELETE = async(req ,{params})=>{
    const {id} = await params;
    try {
        await connectDB();
        const deleteblog = await BlogSchema.findByIdAndDelete(id);
        return new Response(JSON.stringify({message:"delete blog successfully"}),{status: 200})
    }catch(err){
        return new Response(JSON.stringify({error: "Error in deleting blog"}),{status: 500})
    }
  
}