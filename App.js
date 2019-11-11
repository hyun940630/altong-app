import React, { Component } from "react";
import { StatusBar } from "react-native";
// import { Root } from "native-base";
// // import * as Font from "expo-font";
// import { AppLoading } from "expo";
import Icon from "react-native-vector-icons/Ionicons";

// Navigation
import HomeTab from "./src/Components/AppTabNavigator/HomeTab";
import AltongPayTab from "./src/Components/AppTabNavigator/AltongPayTab";
import TimeLineTab from "./src/Components/AppTabNavigator/TimeLineTab";
import ProfileTab from "./src/Components/AppTabNavigator/ProfileTab";

import StartScreen from "./src/screens/StartScreen";
import InsertUserInfo from "./src/screens/InsertUserInfo";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// using Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./src/reducers/reducer";

// DevTool: Redux
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-home" style={{ color: tintColor, fontSize: 28 }} />
        )
      }
    },
    AltongPay: {
      screen: AltongPayTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-card" style={{ color: tintColor, fontSize: 28 }} />
        )
      }
    },
    TimeLine: {
      screen: TimeLineTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-time" style={{ color: tintColor, fontSize: 28 }} />
        )
      }
    },
    Profile: {
      screen: ProfileTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-person" style={{ color: tintColor, fontSize: 28 }} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#3250AE",
      inactiveTintColor: "#d1cece",
      style: {
        backgroundColor: "white"
      },
      barStyle: { height: 60, backgroundColor: "#FFFFFF" },
      iconStyle: {
        backgroundColor: "#FFFFFF"
      },
      showLabel: false,
      showIcon: true
    }
  }
);

const Stack = createStackNavigator({
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
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

const AppContainer = createAppContainer(Stack);

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loaded: false
  //   };
  // }

  // handleError = error => console.log(error);

  // handleLoaded = () => this.setState({ loaded: true });

  // loadAssets = async () => {
  // Font Preloading
  // await Font.loadAsync({
  //   Roboto: require("native-base/Fonts/Roboto.ttf"),
  //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //   "Sweet Sensations Persona Use": require("./assets/Sweet_Sensations_Persona_Use.ttf"),
  //   "Noto Sans KR": require("./assets/NotoSansKR-Regular.otf"),
  //   "Noto Sans KR Bold": require("./assets/NotoSansKR-Bold.otf"),
  //   "Noto Serif KR": require("./assets/NotoSerifKR-Regular.otf"),
  //   "Noto Serif KR Bold": require("./assets/NotoSerifKR-Bold.otf")
  // });

  // Images Preloading
  // await Asset.loadAsync([
  //   require("./assets/icon.png")
  // ])

  //   console.log("loadAssets complete!!!");
  // };

  // render() {
  //   const Screen = createAppContainer(View);
  //   const { loaded } = this.state;

  //   return (
  //     <>
  //       <StatusBar backgroundColor="#3250AE" barStyle="light-content" />
  //       {loaded ? (
  //         <Root>
  //           <Provider store={store}>
  //             <Screen />
  //           </Provider>
  //         </Root>
  //       ) : (
  //         <AppLoading
  //           startAsync={this.loadAssets}
  //           onFinish={this.handleLoaded}
  //           onError={this.handleError}
  //         />
  //       )}
  //     </>
  //   );
  // }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
