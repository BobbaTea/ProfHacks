/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import Login from './screens/login-screen';
import Home from './screens/home-screen';


export default App = createStackNavigator(
    {
        Login: {
            screen: Login
        },
        Home: {
            screen: Home
        }
    }
)
