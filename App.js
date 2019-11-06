import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Root } from "native-base";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducer";

import MainNavigation from "./src/navigation/MainNavigation";

const store = createStore(reducer);

console.log(store.getState());

export default class App extends Component {
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
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      "Sweet Sensations Persona Use": require("./assets/Sweet_Sensations_Persona_Use.ttf"),
      "Noto Sans KR": require("./assets/NotoSansKR-Regular.otf"),
      "Noto Sans KR Bold": require("./assets/NotoSansKR-Bold.otf"),
      "Noto Serif KR": require("./assets/NotoSerifKR-Regular.otf"),
      "Noto Serif KR Bold": require("./assets/NotoSerifKR-Bold.otf")
    });

    // Images Preloading
    // await Asset.loadAsync([
    //   require("./assets/icon.png")
    // ])

    console.log("loadAssets complete!!!");
  };

  render() {
    const { loaded } = this.state;
    return (
      <>
        <StatusBar backgroundColor="white" barStyle="light-content" />
        {loaded ? (
          <Root>
            <Provider store={store}>
              <MainNavigation />
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
