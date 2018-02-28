import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';



// ==================================================
//       Photos component
// ==================================================

function PhotoWall(props) {
  return(
            <div className='photoGrid'>
                {/* Map trough all the posts */}
                {/* Render the single component */}
                {props.posts.map( (post, index) => (
                  <Photo key={index} onRemovePhoto={props.onRemovePhoto} post={post}/>)
                )}
            </div>
        )
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

// class PhotoWall extends Component{

//     render(){

//     }
// }

export default PhotoWall;
