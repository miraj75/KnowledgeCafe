import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarkbtn,readTimeBtn}) => {
    const [blogs, setBlogs] =useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog} handleBookmarkbtn={handleBookmarkbtn} readTimeBtn={readTimeBtn}></Blog>)
            }
            
        </div>
    );
};
Blogs.propTypes={
    handleBookmarkbtn: PropTypes.func.isRequired,
    readTimeBtn: PropTypes.func.isRequired
}
export default Blogs;