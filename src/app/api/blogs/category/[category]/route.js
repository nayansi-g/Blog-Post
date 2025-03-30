import { connectDB } from "@/lib/db";
import BlogSchema from "@/models/Blog.model"


export const GET = async(req ,{params})=>{
    let {category} = await params;
    try {
        await connectDB();
        const getcategory = await BlogSchema.find({category_ref: category})
        return new Response(JSON.stringify({getcategory:getcategory}) , {status:200})
    } catch (error) {
        return new Response(JSON.stringify({message:"something went wrong"}) , {status:500})
    }
}