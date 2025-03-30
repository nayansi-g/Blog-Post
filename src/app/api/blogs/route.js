import { connectDB } from "@/lib/db"
import BlogSchema from "@/models/Blog.model"
export const GET = async () =>{
await connectDB();

try{

    const blogs = await BlogSchema.find();
    return new Response(JSON.stringify({blogs:blogs}),{status: 200})
}catch(err){
    return new Response(JSON.stringify({error: "Error fetching data"}),{status: 500})
}
}



