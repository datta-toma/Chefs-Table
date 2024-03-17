
const BlogList = ({bloglist, handlePreparing, reciCurrentCook}) => {
    const handlePreparingClick = recipeId => {
        handlePreparing(recipeId);
    };

    const calculateTotalTime = recipes => {
        return recipes.reduce((total, recipe) => {
            return total + parseFloat(recipe.preparing_time);
        },0);
    };
    const calculateTotalCalories = recipes => {
        return recipes.reduce((total, recipe) => {
            return total + parseFloat(recipe.calories);
        },0);
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
                    <hr></hr>


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
                    <hr></hr>
           </div> 

           <div className="mt-52 w-96 mr-80 h-3.5 bg-base-100 shadow-xl">
            <table className="table-auto w-full">
                    <tbody>
                    <tr> 
                    <td className="font-bold">Total Time: {calculateTotalTime(reciCurrentCook)} min</td>
                    <td className="font-bold">Total Calories: {calculateTotalCalories(reciCurrentCook)}</td>
                    </tr>
                    </tbody>
                    </table>

           </div> 
           
        </div>

    );
};

export default BlogList;