import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';



// ==================================================
//       Photos component
// ==================================================

function PhotoWall(props) {
  return(
          <div>
            <Link className="addIcon" to="/AddPhoto" ></Link>

            <div className='photoGrid'>
                {props.posts
                .map( (post, index) => (
                  <Photo key={index} post={post} {...props} />)
                )}
            </div>
          </div>
        )
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
}


export default PhotoWall;
