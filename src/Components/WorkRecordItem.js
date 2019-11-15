import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
// import DateComponent from "../Components/DateComponent";

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
            width: 70,
            fontSize: 16,
            fontFamily: "noto-sans",
            textAlign: "center"
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
      todayDate: "",
      startTime: "",
      endTime: "",
      recordSalary: 0,
      startTRaw: 0,
      endTRaw: 0,
      workingTime: ""
    };
  }

  componentDidMount = async () => {
    // Getting data in the AsyncStorage
    AsyncStorage.getItem("startTime").then(value =>
      this.setState({ startTime: value })
    );
    AsyncStorage.getItem("endTime").then(value =>
      this.setState({ endTime: value })
    );
    AsyncStorage.getItem("recordSalary").then(value =>
      this.setState({ recordSalary: value })
    );
    AsyncStorage.getItem("workingTime").then(value =>
      this.setState({ workingTime: value })
    );
    // AsyncStorage.setItem("gapTime", value);
    // this.setState({ gapTime: value });
    this._todayDateFormat();
  };

  _todayDateFormat = value => {
    let now = new Date();
    value = now.toLocaleDateString();
    AsyncStorage.setItem("todayDate", value);
    this.setState({ todayDate: value });
  };

  // _timeGapFormat = value => {
  //   let date1 = new Date(startTime);
  //   let date2 = new Date(endTime);
  //   let diffTime = date2.getTime() - date1.getTime();
  //   let sec_gap = diffTime / 1000;
  //   let min_gap = diffTime / 1000 / 60;
  //   let hour_gap = diffTime / 1000 / 60 / 60;

  //   value = `${hour_gap}:${min_gap}:${sec_gap}`;
  //   AsyncStorage.setItem("gapTime", value);
  //   this.setState({ gapTime: gapTime });
  // };

  render() {
    const {
      todayDate,
      startTime,
      endTime,
      recordSalary,
      workingTime
    } = this.state;

    return (
      <View style={styles.recGroup}>
        <Text style={styles.title}>{todayDate}</Text>

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

            <Des name={startTime} />
            <Des name={endTime} />
            <Des name={workingTime} />
            <Des name={recordSalary} />
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
    fontFamily: "noto-sans-bold",
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
