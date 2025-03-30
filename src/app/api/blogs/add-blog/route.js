import { connectDB } from "@/lib/db";
import BlogSchema from "@/models/Blog.model";

export const POST = async (req)=>{  
    let body = await req.json();
    try{
        await connectDB();
        let newBlog = new BlogSchema({
            title: body.title,
            description : body.description,
            image:body.image,
            category:body.category,
            category_ref:body.category_ref,
            content :body.content

        });
        await newBlog.save();
        return new Response(JSON.stringify({message: "Blog added successfuly"}), {status: 200})
    }catch(err){
        console.log(err);
        return new Response(JSON.stringify({message: "Error adding blog"}), {status: 500})

}
}