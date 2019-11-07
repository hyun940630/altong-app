import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// 하단 탭에 들어갈 컴포넌트들
import HomeTab from "../Components/AppTabNavigator/HomeTab";
import AltongPayTab from "../Components/AppTabNavigator/AltongPayTab";
import TimeLineTab from "../Components/AppTabNavigator/TimeLineTab";
import ProfileTab from "../Components/AppTabNavigator/ProfileTab";

// 하단 탭 네비게이터 생성
const TabNavigation = createBottomTabNavigator(
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

export default createAppContainer(TabNavigation);
