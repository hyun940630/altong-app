import React from "react";
// import { StatusBar } from "react-native";
// import { Root } from "native-base";
// // import * as Font from "expo-font";
// import { AppLoading } from "expo";

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

// const Tabs = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeTab,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="md-home" style={{ color: tintColor, fontSize: 28 }} />
//         )
//       }
//     },
//     AltongPay: {
//       screen: AltongPayTab,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="md-card" style={{ color: tintColor, fontSize: 28 }} />
//         )
//       }
//     },
//     TimeLine: {
//       screen: TimeLineTab,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="md-time" style={{ color: tintColor, fontSize: 28 }} />
//         )
//       }
//     },
//     Profile: {
//       screen: ProfileTab,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="md-person" style={{ color: tintColor, fontSize: 28 }} />
//         )
//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: "#3250AE",
//       inactiveTintColor: "#d1cece",
//       style: {
//         backgroundColor: "white"
//       },
//       barStyle: { height: 60, backgroundColor: "#FFFFFF" },
//       iconStyle: {
//         backgroundColor: "#FFFFFF"
//       },
//       showLabel: false,
//       showIcon: true
//     }
//   }
// );

// const Stack = createStackNavigator({
//   Start: {
//     screen: StartScreen,
//     navigationOptions: ({ navigation }) => ({
//       header: null
//     })
//   },
//   InsertUserInfo: {
//     screen: InsertUserInfo,
//     navigationOptions: ({ navigation }) => ({
//       header: null
//     })
//   },
//   Home: {
//     screen: Tabs,
//     navigationOptions: ({ navigation }) => ({
//       header: null
//     })
//   }
// });

// const AppContainer = createAppContainer(Stack);

// FIXME: 원래는 클래스형 컴포넌트였음
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

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
