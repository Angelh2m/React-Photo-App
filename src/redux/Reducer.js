import posts from '../Components/data/posts'

// Set the posts as the STATE 
const postReducer = function post(state = posts, action) {
    console.log(action.index);
    return state
}

export default postReducer