import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AccessTime, Category, CalendarMonth } from "@mui/icons-material";
import { formatDate } from "date-fns";
import Link from "next/link";
import { ButtonBase } from "@mui/material";



const BlogPostsPage = async () => {
  let blogs = [];
  try {
    let response = await fetch("http://localhost:3000/api/blogs");
    blogs = await response.json();
    console.log(response, "Response");
    blogs = blogs.blogs;
  } catch (err) {
    console.log(err);
  }
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filters */}
        <div className="mb-12 flex gap-4 items-center ">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
          />
          <Button className="cursor-pointer">Search</Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
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
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <Link href={`/blogs/category/${post._id}`}> <Button variant="outline">Read More</Button></Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default BlogPostsPage;