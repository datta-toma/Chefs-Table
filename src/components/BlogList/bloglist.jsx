
const BlogList = ({bloglist}) => {
    return (
        <div className="w-96 mr-80 h-auto bg-base-100 shadow-xl">
           <h1 className="font-bold text-2xl text-center border-b-2">Want to cook:  {bloglist.length} </h1>

           <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Calories</th>
          </tr>
        </thead>
        <tbody>
          {bloglist.map(blog => (
            <tr key={blog.recipe_id}>
              <td className="border px-4 py-2">{blog.recipe_name}</td>
              <td className="border px-4 py-2">{blog.preparing_time}</td>
              <td className="border px-4 py-2">{blog.calories}  </td>
              <td><button className="btn btn-outline btn-primary rounded-2xl">Preparing</button></td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default BlogList;