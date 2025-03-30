"use client"
import React, { useRef, useState } from 'react'

const Adminpage = () => {
    const [category, setCategory] = useState("");
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef= useRef(null);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        let category_ref = category.split(" ").join("").toLowerCase();
        let obj = {
            title: titleRef.current.value,
            description :descriptionRef.current.value,
            image:imageRef.current.value,
            category:category,
            category_ref: category_ref,
            content:contentRef.current.value
        }
        
        try{
            const post = await fetch("http://localhost:3000/api/blogs/add-blog", {method : "POST", body : JSON.stringify(obj)})
            console.log("Data Added")
        }catch(err){
            console.log(err)
        }
    }

    


    return (
        <div className='bg-gray-100 w-full flex justify-center'>
            <div className='flex flex-col w-1/2 justify-center p-10 mt-10  bg-white shadow-md '>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <h1 className='text-4xl font-semibold'>Create A Post</h1>
                    <ul className='flex gap-6 font-semibold cursor-pointer'>
                        <li onClick={handleSubmit} className='border-2 border-blue-600 py-1 cursor-pointer px-3'>Publish</li>
                        <li className='border-2 border-green-600 py-1 px-3'>Preview</li>
                        <li className='border-2 border-yellow-600 py-1 px-3'>Save Draft</li>
                        <li className='border-2 border-red-600 py-1 px-3'>Clear</li>
                    </ul>
                </div>
                <div className='flex flex-col mt-10 gap-2 text-black'>
                    <label>Post Title</label>
                    <input
                        type="text"
                        placeholder="Enter title of your post"
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary"
                        ref={titleRef}
                    />
                    <label>Post Description</label>
                    <input
                        type="text"
                        placeholder="Enter the description of your post"
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary"
                        ref={descriptionRef}
                    />

                    <label>Header Image [Preferred Size: 900x300]</label>
                    <input
                        type="text"
                        placeholder="Select a file to upload!"
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary"
                        ref={imageRef}
                    />
                    <label>Category</label>
                    <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary'>
                        <option> Select a category</option>
                        <option value={"Social Media"} >Social Media</option>
                        <option value={"IT Trends"} >IT Trends</option>
                        <option value={"Food"}>Food</option>
                        <option value={"Bollybood"}>Bollybood</option>
                         <option value={"Cyber Trends"}>Cyber Trends</option>
                         <option value={"Sports"}>Sports</option>
                         <option value={"Programming"}>Programming</option>
                    </select>
                    <label>Content</label>
                    <textarea  ref={contentRef} className='w-full px-4 py-2 rounded-lg border h-96 resize-none border-gray-600 focus:ring-2 focus:ring-primary' ></textarea>
                </div>
            </div>
        </div>
    )
}

export default Adminpage;
