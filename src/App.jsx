
import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/banner';
import BlogList from './components/BlogList/bloglist';
import Blogs from './components/Blogs/blogs';
import Header from './components/Header/Header';


function App() {

  const [bloglist, setBlogList] = useState([]);
  const handleAddToBloglist = blog =>{
    // console.log(blog)
    const newBloglist = [...bloglist, blog];
    setBlogList(newBloglist);
  }

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <div className='flex mt-10'>
      <Blogs handleAddToBloglist={handleAddToBloglist}></Blogs>
      <BlogList bloglist={bloglist}></BlogList>
    </div>
      
    </>
  )
}

export default App
