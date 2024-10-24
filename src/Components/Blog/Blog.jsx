import PropTypes from "prop-types";
import { useState } from "react";

const Blog = ({ blog, handleBookmarkbtn, readTimeBtn }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const {
        cover_photo,
        title,
        author_img,
        author,
        posted_date,
        reading_time,
        hashtags
    } = blog;

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        handleBookmarkbtn(blog); // Call the function passed as a prop
    };

    return (
        <div>
            <img className="w-[845px] h-[450px]" src={cover_photo} alt="" />
            <div className="flex justify-between items-center p-4 my-3">
                <div className="flex gap-3 items-center">
                    <img className="rounded-full h-20 w-20" src={author_img} alt="" />
                    <div>
                        <h1 className="text-2xl font-bold">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p>{reading_time} Min read</p>
                    <div onClick={toggleBookmark}>
                        {isBookmarked ? (
                            <i className="fa-solid fa-bookmark cursor-pointer"></i>
                        ) : (
                            <i className="fa-regular fa-bookmark cursor-pointer"></i>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-bold">{title}</h1>
            </div>
            <div className="border-b-2 mb-2">
                <p className="text-gray-500 py-3">{hashtags}</p>
                <p
                    onClick={() => readTimeBtn(blog)}
                    className="text-blue-800 outline-none underline cursor-pointer"
                >
                    Mark as read
                </p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarkbtn: PropTypes.func.isRequired,
    readTimeBtn: PropTypes.func.isRequired,
};

export default Blog;
