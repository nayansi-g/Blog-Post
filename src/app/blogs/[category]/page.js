import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AccessTime, Category, CalendarMonth } from "@mui/icons-material";
import { formatDate } from "date-fns";
import Link from "next/link";



const BlogCategoryPage = async ( {params}) => {
let {category} = await params;
  let posts = [];
  try{
    let response = await fetch(`http://localhost:3000/api/blogs/category/${category}`);
    let body = await response.json();
    console.log(body, "Response JSON");
    posts = body.getcategory
  }catch(err){
    console.log(err);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {  posts.map((post) => (
            <Card key={post._id} className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                 
                  <span className="flex items-center gap-1">
                    <Category className="h-4 w-4" />
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                
                </p>

                <div className="flex items-center justify-between mt-4">
                  <time className="text-sm text-gray-500 flex items-center gap-1">
                    <CalendarMonth className="h-4 w-4" />
                    {/* {formatDate(new Date(post.date), 'MMM dd, yyyy')} */}
                  </time>
                 <Link href={`/blogs/${category}/${post._id}`}> <Button  variant="outline">Read More</Button></Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          {[1, 2, 3].map((page) => (
            <Button 
              key={page}
              variant={page === 1 ? "default" : "outline"}
              className="rounded-full w-10 h-10 p-0"
            >
              {page}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryPage;