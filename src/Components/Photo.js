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
                  props.onRemovePhoto(post)
                }} className="remove-button" >Remove</button>
                </div>
            </figure>
        )
}



export default Photo;
