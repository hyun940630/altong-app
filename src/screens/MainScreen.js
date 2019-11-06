import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

// 하단 탭에 들어갈 컴포넌트들
import HomeTab from "../Components/AppTabNavigator/HomeTab";
import AltongPayTab from "../Components/AppTabNavigator/AltongPayTab";
import TimeLineTab from "../Components/AppTabNavigator/TimeLineTab";
import ProfileTab from "../Components/AppTabNavigator/ProfileTab";

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: { screen: HomeTab },
    AltongPayTab: { screen: AltongPayTab },
    TimeLineTab: { screen: TimeLineTab },
    ProfileTab: { screen: ProfileTab }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#3250AE",
      inactiveTintColor: "#d1cece",
      style: {
        backgroundColor: "white"
      },
      barStyle: { height: 60, backgroundColor: "#FFFFFF" },
      iconsStyle: {
        backgroundColor: "#FFFFFF"
      },
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true
    }
  }
);

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  // navigationOptions 코드 추가
  static navigationOptions = {
    header: null
  };

  render() {
    return <AppTabContainet />; // AppTabContainet 컴포넌트를 리턴한다.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
