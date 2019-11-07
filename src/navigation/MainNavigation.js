import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import StartScreen from "../screens/StartScreen";
// import LoginScreen from "../screens/LoginScreen";
import InsertInfoScreen from "../screens/InsertInfoScreen";
import TabNavigation from "./TabNavigation";

// const AppStack = createStackNavigator(
//   {
//     Main: {
//       screen: TabNavigation
//     }
//   },
//   {
//     initialRouteName: "Main",
//     defaultNavigationOptions: {
//       header: null
//     }
//   }
// ); // App Main Screen

// const AuthStack = createStackNavigator({
//   Start: {
//     screen: StartScreen,
//     navigationOptions: {
//       header: null
//     }
//   },
//   InsertInfo1: {
//     screen: InsertInfoScreen_1,
//     navigationOptions: {
//       header: null
//     }
//   },
//   InsertInfo2: {
//     screen: InsertInfoScreen_2,
//     navigationOptions: {
//       header: null
//     }
//   }
// }); // Auth Screen

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Auth: AuthStack,
//       App: AppStack
//     },
//     {
//       initialRouteName: "Auth"
//     }
//   )
// );

// const AppStack = createStackNavigator(
//   {
//     Main: {
//       screen: TabNavigation
//     }
//   },
//   {
//     initialRouteName: "Main",
//     defaultNavigationOptions: {
//       header: null
//     }
//   }
// ); // App Main Screen

// const AuthStack = createStackNavigator({
//   Start: {
//     screen: StartScreen,
//     navigationOptions: {
//       header: null
//     }
//   },
//   InsertInfo1: {
//     screen: InsertInfoScreen_1,
//     navigationOptions: {
//       header: null
//     }
//   },
//   InsertInfo2: {
//     screen: InsertInfoScreen_2,
//     navigationOptions: {
//       header: null
//     }
//   }
// }); // Auth Screen

export default createAppContainer(
  createSwitchNavigator(
    {
      Start: StartScreen,
      InsertInfo: InsertInfoScreen,
      Main: TabNavigation
    },
    {
      initialRouteName: "Start"
    }
  )
);
