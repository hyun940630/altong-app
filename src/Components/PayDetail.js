import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class PayDetail extends Component {
  render() {
    return (
      <View style={styles.payDetail}>
        <Text style={styles.title}>출금 상세내역</Text>
        <View style={styles.detatil}>
          <Text style={styles.text}>2019.07.07. 18:35</Text>
          <Text style={styles.text}>-50,000원</Text>
        </View>
        <View style={[styles.detatil, { backgroundColor: "#F9F9F9" }]}>
          <Text style={styles.text}>2019.07.11. 01:03</Text>
          <Text style={styles.text}>-50,000원</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  payDetail: {
    height: 50,
    backgroundColor: "#ffffff",
    margin: 20
  },
  title: {
    fontSize: 18,
    fontFamily: "noto-sans-bold",
    justifyContent: "flex-start",
    borderBottomWidth: 2,
    borderBottomColor: "#353535",
    paddingBottom: 10
  },
  detatil: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    paddingTop: 10,
    paddingBottom: 12
  },
  text: {
    color: "#333",
    fontSize: 14,
    fontFamily: "noto-sans",
    padding: 4
  }
});
