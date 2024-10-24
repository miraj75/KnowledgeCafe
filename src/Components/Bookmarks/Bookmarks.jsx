import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';
import './Bookmarks.css';
const Bookmarks = ({bookMarks,readTime}) => {
    
    return (
        <div className='md:w-1/3'>
            <div>
                <h1 className='text-2xl font-bold text-blue-700 p-5 shadow-md text-center'>Spent Time on read: <span>{readTime}</span> min</h1>
            </div>
            <div>
                <h1 className='text-2xl font-bold m-2 shadow-md p-5'>Bookmarked Blogs: {bookMarks.length}</h1>
            </div>
            {
                bookMarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};
 Bookmarks.propTypes={
    bookMarks:PropTypes.array.isRequired,
    readTime: PropTypes.object.isRequired
 }
export default Bookmarks;