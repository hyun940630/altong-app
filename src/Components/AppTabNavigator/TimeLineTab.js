import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import TitleCard from "../TitleCard";
import WorkRecordItem from "../WorkRecordItem";

export default class TimeLineTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userworkplace: ""
    };
  }

  componentDidMount = () => {
    // Getting data in the AsyncStorage
    AsyncStorage.getItem("userworkplace").then(value =>
      this.setState({ userworkplace: value })
    );
  };
  render() {
    const { userworkplace } = this.state;
    return (
      <View style={styles.container}>
        <TitleCard name="근무기록" />

        <View style={styles.paper}>
          <Text
            style={[
              styles.paperText,
              { fontSize: 20, fontFamily: "noto-sans-bold" }
            ]}
          >
            {userworkplace}
          </Text>
          {/* <Text style={styles.paperText}> </Text> */}
        </View>
        {/* <DateArrangeComponent name="2019.07.01 ~ 2019.07.31" /> */}
        <WorkRecordItem />
        {/* <WorkRecordItem />
        <WorkRecordItem /> */}
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
    height: 100,
    backgroundColor: "#3250AE",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  paperText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "noto-sans",
    alignItems: "center",
    paddingLeft: 24,
    paddingTop: 6,
    paddingBottom: 6
  }
});
