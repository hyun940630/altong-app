import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Root } from "native-base";
import * as Font from "expo-font";
import { AppLoading } from "expo";

// using Redux
import { Provider } from "react-redux";
import { createStore } from "redux";

import RootNavigator from "./src/Navigator/RootNavigator";

const initialState = {
  formData: {
    name: "",
    wage: 0
  }
};

const reducer = (state, action) => {
  if (state === undefined) {
    return Object.assign({}, initialState);
  }
  switch (action.type) {
    case "REGFORM$SET_FORMDATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          name: action.newData.name,
          wage: action.newData.wage
        }
      };
  }
};

const store = createStore(reducer);

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
      "Sweet Sensations Persona Use": require("./assets/fonts/Sweet_Sensations_Persona_Use.ttf"),
      "noto-sans": require("./assets/fonts/NotoSansKR-Regular.otf"),
      "noto-sans-bold": require("./assets/fonts/NotoSansKR-Bold.otf")
    });

    // Images Preloading 나중에 확인해서 활성화 할지 판단
    // await Asset.loadAsync([require("./assets/icon.png")]);

    console.log("loadAssets complete!!!");
  };

  render() {
    const { loaded } = this.state;

    return (
      // <Provider store={store}>
      //   <RootNavigator />
      // </Provider>

      <>
        <StatusBar barStyle="light-content" />
        {loaded ? (
          <Root>
            <Provider store={store}>
              <RootNavigator />
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
