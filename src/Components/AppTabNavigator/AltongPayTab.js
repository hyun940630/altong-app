import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TitleCard from "../TitleCard";
// import DateArrangeComponent from "../DateArrangeComponent";
// import PayDetail from "../PayDetail";

export default class AltongPayTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      recordSalary: 0
    };
  }

  componentDidMount = () => {
    // Getting data in the AsyncStorage
    AsyncStorage.getItem("username").then(value =>
      this.setState({ username: value })
    );

    AsyncStorage.getItem("recordSalary").then(value =>
      this.setState({ recordSalary: value })
    );
  };

  render() {
    const { recordSalary } = this.state;
    return (
      <View style={styles.container}>
        <TitleCard name="알통페이" />

        <View style={styles.paper}>
          <View>
            <Text style={styles.paperTitle}>
              {this.state.username}님의 총 알통페이
            </Text>
            {/* <Text style={styles.altongpay}>{this.state.money}원</Text> */}
            <Text style={styles.altongpayTemp}>{recordSalary}</Text>
          </View>
          <View style={styles.possiblePayView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.possiblePay}>출금가능 알통페이</Text>
              <Icon
                name="md-information-circle-outline"
                style={{ fontSize: 14, color: "#FFFFFF", paddingLeft: 5 }}
              ></Icon>
            </View>

            <Text style={styles.possiblePay}>{recordSalary}원</Text>
          </View>
        </View>
        {/* <DateArrangeComponent name="2019.07.01 ~ 2019.07.31" /> */}

        {/* <PayDetail /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff"
  },
  paper: {
    height: 200,
    backgroundColor: "#3250AE"
  },
  paperTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "noto-sans-bold",
    height: 60,
    textAlign: "center",
    alignItems: "center",
    paddingTop: 20
  },
  altongpayTemp: {
    height: 80,
    fontSize: 36,
    fontFamily: "noto-sans-bold",
    color: "#FFFFFF",
    textAlign: "center",
    alignItems: "center",
    paddingTop: 10
  },
  altongpay: {
    height: 80,
    fontSize: 44,
    fontFamily: "noto-sans-bold",
    color: "#FFFFFF",
    textAlign: "center",
    alignItems: "center",
    paddingTop: 10
  },
  possiblePayView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    paddingBottom: 10
  },
  possiblePay: {
    color: "#FFFFFF",
    fontFamily: "noto-sans",
    fontSize: 14
  }
});
