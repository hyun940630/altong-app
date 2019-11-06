import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

import DateComponent from "../DateComponent";
import BeforeGotoWork from "../BeforeGotoWork";
import BeforeGotoLeave from "../BeforeGotoLeave";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" style={{ color: tintColor, fontSize: 28 }} />
    )
  };

  render() {
    return (
      <Container>
        <View style={styles.dateCom}>
          <DateComponent />
        </View>
        <BeforeGotoWork name="황현" workplace="피플러스" />
        {/* <BeforeGotoLeave name="황현" earningMoney="0" todayTime="0" /> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  dateCom: {
    height: 50,
    marginTop: 50,
    marginBottom: 80,
    justifyContent: "center"
  }
});
