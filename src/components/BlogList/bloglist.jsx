
const BlogList = ({bloglist, handlePreparing, reciCurrentCook}) => {

    const handlePreparingClick = recipeId => {
        handlePreparing(recipeId);
    };

    return (
        <div className="w-96 mr-80 h-3.5 bg-base-100 shadow-xl">
            <h1 className="font-bold text-2xl text-center border-b-2">Want to cook:  {bloglist.length}</h1>

                    <table className="table-auto w-full">
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    </tr>
                    
                    </thead>
                    <tbody>
                    {bloglist.map(blog => (
                    <tr key={blog.recipe_id}> 
                    <td>{blog.recipe_name}</td>
                    <td>{blog.preparing_time}</td>
                    <td>{blog.calories}  </td>
                    <td><button  onClick={() => handlePreparingClick(blog.recipe_id)} className="btn btn-outline btn-primary rounded-2xl">Preparing</button></td>
                    </tr>
                    ))}
                    </tbody>
                    </table>


                 <div className="mt-5 w-96 mr-80 h-3.5 bg-base-100 shadow-xl">
            <h2 className="font-bold text-2xl text-center border-b-2">Currently cooking: {reciCurrentCook.length}</h2>

            <table className="table-auto w-full">
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reciCurrentCook.map((blog, idx) =>(
                    <tr  key={blog.recipe_id, idx}> 
                    <td>{blog.recipe_name}</td>
                    <td>{blog.preparing_time}</td>
                    <td>{blog.calories}</td>
                  
                    </tr>
                    ))}
                    </tbody>
                    </table>

           </div> 
           
           
        </div>

    );
};

export default BlogList;