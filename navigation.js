import{createStackNavigator} from 'react-navigation-stack';
import{createAppContainer} from "react-navigation";
import post from './components/screens/post';
import Blogs from './components/screens/Blogs';
import Edit from './components/screens/Edit';
const AuthStack = createStackNavigator({
    post:{
        screen : post
    },
    Blogs:{
        screen : Blogs
    },
    Edit:{
        screen : Edit
    }

})
const AppContainer = createAppContainer(AuthStack)
export default AppContainer;





