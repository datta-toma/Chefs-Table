
import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/banner';
import BlogList from './components/BlogList/bloglist';
import Blogs from './components/Blogs/blogs';
import Header from './components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [bloglist, setBlogList] = useState([]);
  const [addedBlogs, setAddedBlogs] = useState([]);
  const [currentCook, setCurrentCook] = useState([]);
  const [reciCurrentCook, setReciCurrent] = useState([]);
  
  const handleAddToBloglist = (blog) => {
    if (addedBlogs.includes(blog.recipe_id)) {
      toast.error('This blog is already added!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

      setBlogList(BlogList => [...BlogList, blog]);
      setAddedBlogs(AddedBlogs => [...AddedBlogs, blog.recipe_id]);
  }
      const handlePreparing = recipeId => {
      const removedCookList = bloglist.find(blog => blog.recipe_id === recipeId); 
      const reciveBlogList = bloglist.filter(blog => blog.recipe_id !== recipeId);
      setCurrentCook(currentCook => [...currentCook, removedCookList]);
      setReciCurrent(reciCurrentCook => [...reciCurrentCook, removedCookList]);
      setBlogList(reciveBlogList);
};


   
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <div className='flex mt-10'>
      <Blogs handleAddToBloglist={handleAddToBloglist}></Blogs>
      
       <BlogList bloglist={bloglist} handlePreparing={handlePreparing} reciCurrentCook={reciCurrentCook}></BlogList>
    </div>
    <ToastContainer />
    </>
  )
}

export default App
