import Main from './Main';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../redux/accions';

// // Redux | SET STATE as POSTS
function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removePost}, dispatch)
}


// Inject the state and export the CONNECTOR
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App