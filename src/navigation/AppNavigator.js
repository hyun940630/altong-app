import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import StartScreen from "./screens/StartScreen";
import InsertInfoScreen from "./src/Screens/InsertInfoScreen";
import InsertInfoScreen_2 from "./src/Screens/InsertInfoScreen_2";

const AppStack = createStackNavigator({ Main: MainScreen }); // 앱 메인 화면
const AuthStack = createStackNavigator({ SignIn: InsertInfoScreen }); // 인증 화면
const AuthStack2 = createStackNavigator({ SignIn: InsertInfoScreen_2 }); // 인증 화면

export default createAppContainer(
  createSwitchNavigator(
    {
      Start: StartScreen,
      Auth: AuthStack,
      Auth: AuthStack2,
      App: AppStack
    },
    {
      initialRouteName: "Start"
    }
  )
);
