import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// screen
// import HomeTab from "../Components/AppTabNavigator/HomeTab";
import HomeContainer from "../template/HomeContainer";
import AltongPayTab from "../Components/AppTabNavigator/AltongPayTab";
import TimeLineTab from "../Components/AppTabNavigator/TimeLineTab";
import ProfileTab from "../Components/AppTabNavigator/ProfileTab";

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeContainer,
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

export default MainNavigator;
