import {Dimensions, StyleSheet} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPassMessageScreen from "../screens/ResetPassMessageScreen";
import ResetPassEmailScreen from "../screens/ResetPassEmailScreen";
import ResetPassNewScreen from "../screens/ResetPassNewScreen";
import DefaultScreen from "../screens/DefaultScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import GeolocationsScreen from "../screens/GeolocationsScreen";
import AccountScreen from "../screens/AccountScreen";
import SettingsScreen from "../screens/SettingsScreen";
import GoogleRegistrationScreen from "../screens/GoogleRegisterScreen";
import NotificationCreate from "../screens/CreateNotificationScreen";
import NotificationEdit from "../screens/EditNotificationScreen";

const wH = Dimensions.get('window').height;

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
        GoogleRegister:{
            screen: GoogleRegistrationScreen,
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
        Notification:{
            screen:NotificationsScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgba(67, 48, 112, 1)',
                    height: 0.11*wH,
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        },
        Geolocation:{
            screen:GeolocationsScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgba(67, 48, 112, 1)',
                    height: 0.11*wH,
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        },
        Account:{
            screen:AccountScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgba(67, 48, 112, 1)',
                    height: 0.11*wH,
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        },
        Settings:{
            screen:SettingsScreen,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgba(67, 48, 112, 1)',
                    height: 0.11*wH,
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
        },
        CreateNotification: {
            screen: NotificationCreate,
            navigationOptions: {
                title: null,
                headerTintColor: '#FFFBFB',
                headerHideShadow: true,
                headerStyle: {
                    backgroundColor: 'rgba(67, 48, 112, 1)',
                    height: 0.11*wH,
                    elevation:0,
                    shadowColor: 'transparent',}
            }
        },
    EditNotification: {
            screen: NotificationEdit,
        navigationOptions: {
            title: null,
            headerTintColor: '#FFFBFB',
            headerHideShadow: true,
            headerStyle: {
                backgroundColor: 'rgba(67, 48, 112, 1)',
                height: 0.11*wH,
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
