import {StyleSheet} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPassMessageScreen from "../screens/ResetPassMessageScreen";
import ResetPassEmailScreen from "../screens/ResetPassEmailScreen";
import ResetPassNewScreen from "../screens/ResetPassNewScreen";
import DefaultScreen from "../screens/DefaultScreen";


const screens = {
        Start:{
            screen: StartScreen,
             navigationOptions: {
                title: null,
                headerShown: false,
             }
        },
        Register:{
            screen: RegisterScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgb(68,47,110)',
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        },
        Login:{
            screen: LoginScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgb(68,47,110)',
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        },
        Reset1:{
            screen: ResetPassEmailScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgb(68,47,110)',
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        },
        Reset2:{
            screen: ResetPassMessageScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgb(68,47,110)',
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        },
        Reset3:{
            screen:ResetPassNewScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgb(68,47,110)',
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        },
        Default: {
            screen: DefaultScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgb(68,47,110)',
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'rgba(68,47,110,1)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
},)
const StartStack = createStackNavigator(screens);
export default createAppContainer(StartStack);
