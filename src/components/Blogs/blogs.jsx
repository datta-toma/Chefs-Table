import { useState } from "react";
import { useEffect } from "react";


const Blogs = ({handleAddToBloglist}) => {
    const [blogs, setBlogs] = useState([], false);


    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

   

    return (
        <div className="max-w-7xl mx-auto mt-5 ">
            <div className="grid grid-cols-2 gap-4">
            {blogs.map(blog => (
                <div key={blog.recipe_id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={blog.recipe_image} alt="Recipe" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{blog.recipe_name}</h2>
                        <p className=" border-b-2">{blog.short_description}</p>
                        <p className="font-bold">Ingredients: {blog.ingredients.length}</p>
                        <ul className=" border-b-2">
                        {blog.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                        </ul>
                        <div className="flex gap-8">
                            <p><i className="fa-regular fa-clock"></i> {blog.preparing_time}</p>
                            <p><i className="fa-solid fa-fire-flame-curved"></i> {blog.calories}</p>
                        </div>
                        <div className="card-actions">
                        <button onClick={() => handleAddToBloglist(blog)}  className="btn btn-success rounded-2xl disabled={blog.buttonDisabled}" >Want to Cook</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Blogs;