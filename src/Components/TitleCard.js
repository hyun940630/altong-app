import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class TitleCard extends Component {
  render() {
    return (
      <View style={styles.textCom}>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textCom: {
    height: 80,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20
  },
  text: {
    color: "#333",
    fontSize: 20,
    fontFamily: "noto-sans-bold"
  }
});
