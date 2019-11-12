import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import DateComponent from "../Components/DateComponent";

class Des extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          height: 40,
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            width: 60,
            fontSize: 16
          }}
        >
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default class WorkRecordItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: "",
      endTime: "",
      workingHours: ""
    };
  }

  componentDidMount = () => {
    // Getting data in the AsyncStorage
    AsyncStorage.getItem("startTime").then(value =>
      this.setState({ startTime: value })
    );
    AsyncStorage.getItem("endTime").then(value =>
      this.setState({ endTime: value })
    );
  };

  render() {
    const { startTime, endTime } = this.props;
    console.log(typeof endTime);
    const workingHours = endTime - startTime;
    return (
      <View style={styles.recGroup}>
        <Text style={styles.title}>2019.11.12 정상</Text>

        <View style={styles.desLayout}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 40
            }}
          >
            <Des name="출근" />
            <Des name="퇴근" />
            <Des name="근로시간" />
            <Des name="알통페이" />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              heigth: 40
            }}
          >
            {/* <Des name={startTime} /> */}

            {/* <Des name={endTime} />
            <Des name={workingHours} /> */}
            <Text>{startTime}</Text>
            <Text>{endTime}</Text>
            <Text>{workingHours}</Text>
            <Des name="0원" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recGroup: {
    height: 140,
    backgroundColor: "#ffffff",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "flex-start",
    paddingBottom: 10
  },
  desLayout: {
    height: 100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderBottomColor: "#dddddd"
  }
});
