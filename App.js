import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Root } from "native-base";
// import * as Font from "expo-font";
import { AppLoading } from "expo";

// Navigation
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import StartScreen from "./src/screens/StartScreen";
import InserUsertInfo from "./src/screens/InserUsertInfo";
import TabNavigation from "./src/navigation/TabNavigation";

// using Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./src/reducers/reducer";

// import MainNavigation from "./src/navigation/MainNavigation";

const store = createStore(reducer);

const View = createSwitchNavigator(
  {
    Start: { screen: StartScreen },
    InsertInfo: { screen: InserUsertInfo },
    Main: { screen: TabNavigation }
  },
  {
    initialRouteName: "Start"
  }
);

console.log(store.getState());
console.log(store.typeUsername, ": typeUsername"); // FIXME: current state: undefind

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
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

    console.log("loadAssets complete!!!");
  };

  render() {
    const Layout = createAppContainer(View);
    const { loaded } = this.state;

    return (
      <>
        <StatusBar backgroundColor="#3250AE" barStyle="light-content" />
        {loaded ? (
          <Root>
            <Provider store={store}>
              <Layout />
            </Provider>
          </Root>
        ) : (
          <AppLoading
            startAsync={this.loadAssets}
            onFinish={this.handleLoaded}
            onError={this.handleError}
          />
        )}
      </>
    );
  }
}

export default App;
