import React, { Component } from 'react';


class AddPhoto extends Component {

    constructor(){
      super();
      this.handleSubmitC = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
      event.preventDefault();
      // console.log('logg');  
      const imageLink = event.target.elements.link.value;
      const description = event.target.elements.description.value;
      const post = {
        id: Number(new Date() ),
        description: description,
        imageLink: imageLink
      }

      if(description && imageLink){
          this.props.onAddPhoto(post)
      }
    }


    render(){
      return (
        <div>
            <h1>Add a photo</h1>
            <div>
              <form 
              onSubmit={this.handleSubmitC}
              className="form">
                <input type="text" name="link" placeholder="Link"/>
                <input type="text" name="description" placeholder="Description"/>
                <button>Submit</button>
              </form>
            </div>
        </div>
      )
    }
  }

export default AddPhoto;