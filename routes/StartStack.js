import {StyleSheet} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPassMessageScreen from "../screens/ResetPassMessageScreen";
import ResetPassEmailScreen from "../screens/ResetPassEmailScreen";
import ResetPassNewScreen from "../screens/ResetPassNewScreen";

const screens = {
        Start:{
            screen: StartScreen,
        },
        Register:{
            screen: RegisterScreen,
            navigationOptions: {
                title: "homeeee",
                headerTintColor: '#FFFBFB',
                headerTitleAllowFontScaling: 'black',
                headerStyle:{
                    backgroundColor: 'rgb(68,47,110)',
                }
            }
        },
        Login:{
            screen: LoginScreen
        },
        Reset1:{
            screen: ResetPassEmailScreen
        },
        Reset2:{
            screen: ResetPassMessageScreen
        },
        Reset3:{
            screen:ResetPassNewScreen
        }
}

const styles = StyleSheet.create({
    screen:{
        //backgroundColor: 'rgba(68,47,110,1)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    }

})
const StartStack = createStackNavigator(screens);
export default createAppContainer(StartStack);

