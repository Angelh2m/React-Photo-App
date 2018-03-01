 import React from 'react';

 // ==================================================
 //       Single PHOTO component
 // ==================================================

function Photo(props) {
      const post = props.post;
  return(
            <figure className="figure" >
                <img className="photo"  alt={post.description} src={post.imageLink} />
                <figcaption> <p> {post.description}  </p> </figcaption>
                <div className="button-container">
                <button onClick={() => {
                  props.removePost(1)
                }} className="remove-button" >Remove</button>
                </div>
            </figure>
        )
}

// PhotoWall.propTypes = {
//     posts: PropTypes.array.isRequired,  
// }


export default Photo;
