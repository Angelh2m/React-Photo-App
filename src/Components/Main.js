import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from "./AddPhoto";
import'../App.css';
import { Route } from "react-router-dom";
import {removePost} from '../redux/accions';
// Redux
// import {connect} from 'react-redux';


// const store = createStore(rootReducer);

class Main extends Component {

  constructor(){
    super();
  }

  componentDidMount(){
    this.props.removePost(1);
  }

  render() {

    console.log(this.props)

    return (
      <div className="App">

        <Route exact path="/" render={ () =>(

          <div>
            <Title title="Photo Wall" />
            {/* posts = props.post, remove = props.remove */}
            <PhotoWall {...this.props}  /> 
          </div>

         )} />

      </div>
    );
  }

 
}

// // Redux | SET STATE as POSTS
// function mapStateToProps(state) {
//   return {
//       posts: state
//   }
// }
// // Inject the state and export the CONNECTOR
// export default connect(mapStateToProps)(Main)



export default Main;
