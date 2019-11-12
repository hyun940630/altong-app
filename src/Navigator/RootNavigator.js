import { createSwitchNavigator, createAppContainer } from "react-navigation";

import MainNavigator from "./MainNavigator";
import StartScreen from "../screens/StartScreen";
import InsertUserInfo from "../screens/InsertUserInfo";

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
    }
  },
  {
    initialRouteName: "Start"
  }
);

export default createAppContainer(RootNavigator);
