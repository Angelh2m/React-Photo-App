import React from 'react';
import Photo from './Photo';


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

// class PhotoWall extends Component{

//     render(){

//     }
// }

export default PhotoWall;
