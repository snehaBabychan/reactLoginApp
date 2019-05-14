import {createStackNavigator} from "react-navigation";

import LoginScreen from "../components/loginscreen";
import DashBoard from "../components/dashboard";


export const LoginStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
    }
    },
    DashBoard: {
      screen: DashBoard,
      navigationOptions: {
        title: "DashBoard",
        headerTintColor: "white",
        headerLeft: null,
        headerStyle: {
          backgroundColor: "#fe991b",
        },
        headerTitleStyle: {
          textAlign:"center", 
           flex:1 ,
          fontWeight: "bold",
          color: "#fff",
        }
      }
  
    },
  },
  { initialRouteName: "Login" }

);