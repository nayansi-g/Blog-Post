// import parse from "html-react-parser";
// const SingleBlog = async ({params}) => {
//     let {id} = await params;
//       let singleBlog = await fetch(`http://localhost:3000/api/blogs/${id}`)

//     return ( 
//       <div className="min-h-screen bg-gray-100 justify-center items-center flex">
//          <div className=" flex flex-col gap-8 w-1/2 p-20 shadow-md items-center justify-center border-2 text-black bg-white">
//            <img  src="" className="w-full h-72" /> 
//            <h1 className="text-3xl font-bold">Blog Title {id}</h1>
//            <p className="text-lg">Blog Content</p>
//            <p className="text-lg text-black">Blog description</p>
            
//            </div>
//       </div>
//     )
// }


// export default SingleBlog;


import parse from "html-react-parser";

const SingleBlog = async ({ params }) => {
  const { id } = params;

  
  let blog = {};
  try {
    let response = await fetch(`http://localhost:3000/api/blogs/${id}`);
    blog = await response.json()
    blog = blog.getSingleBlog;
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="flex flex-col gap-6 w-full md:w-1/2 p-8 shadow-md items-center justify-center border-2 text-black bg-white">
        <img
          src={blog.image} 
          alt={blog.title}
          className="w-full h-72 object-cover"
        />
        <p className="text-lg">{blog.category}</p>
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-lg">{parse(blog.description)}</p>

        <p className="text-lg text-gray-700">{blog.content}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
