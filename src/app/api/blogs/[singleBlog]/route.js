import { connectDB } from "@/lib/db";
import BlogSchema from "@/models/Blog.model";


export const GET = async( req, {params})=>{
    let {singleBlog} = await params;

 
  try {
        await connectDB();
        const getSingleBlog = await BlogSchema.findById(singleBlog);
        return new Response(JSON.stringify({getSingleBlog:getSingleBlog}), {status: 200})
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({message: "Error in getting"}), {status: 500})
    }
    
}



// Get Single Blog router.get("/blog/:id", (req, res)=>{  req.params }})