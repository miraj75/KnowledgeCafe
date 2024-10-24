import { useState } from 'react';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';
function App() {

  const [bookMarks, setBookMarks] = useState([])
  const [readTime, setRedTime]=useState(0)

  const readTimeBtn =blog=>{

    const newReadingTime = readTime + parseInt(blog.reading_time)
    setRedTime(newReadingTime)

  }

  const handleBookmarkbtn=(blog)=>{
    const newBookmarks =[...bookMarks, blog]
    setBookMarks(newBookmarks)
  }
  
  return (
    <>
      <Header></Header>
     <div className='flex flex-col-reverse  md:flex mx-4'>
     <Blogs handleBookmarkbtn={handleBookmarkbtn} readTimeBtn={readTimeBtn} ></Blogs>
    <Bookmarks bookMarks={bookMarks} readTime={readTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
