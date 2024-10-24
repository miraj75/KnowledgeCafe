
import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold m-2 shadow-md p-5">{bookmark.title}</h1>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;
