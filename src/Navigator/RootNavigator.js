import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainNavigator from "./MainNavigator";
import StartScreen from "../screens/StartScreen";
import InsertUserInfo from "../screens/InsertUserInfo";
import EditProfile from "../screens/EditProfile";

const RootNavigator = createSwitchNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    InsertUserInfo: {
      screen: InsertUserInfo,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Home: {
      screen: MainNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    }
  },
  {
    // initialRouteName: "Start"  // pre
    initialRouteName: "Start"
  }
);

export default createAppContainer(RootNavigator);
