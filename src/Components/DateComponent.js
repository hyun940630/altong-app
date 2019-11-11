import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DateComponent extends Component {
  constructor() {
    super();
    this.state = { currentDate: null, currentDay: null };
    this.wek = ["일", "월", "화", "수", "목", "금", "토"];
  }

  componentWillMount() {
    this.getCurrentDate();
  }

  getCurrentDate = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();

    this.wek.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item });
      }
    });

    this.setState({
      currentDate:
        year +
        "." +
        (month < 10 ? "0" + month : month) +
        "." +
        (date < 10 ? "0" + date : date) +
        "."
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>
          {this.state.currentDate} {this.state.currentDay}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1
  },
  date: {
    paddingLeft: 24,
    fontSize: 30,
    color: "#333",
    fontWeight: "300"
  }
});
