import React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";

import DateComponent from "../DateComponent";
import BeforeGotoWork from "../BeforeGotoWork";
import BeforeGotoLeave from "../BeforeGotoLeave";
import MapViewComponent from "../MapViewComponent";

class HomeTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isWorking: false,
      checkPoint: false,
      stopPoint: true,
      username: "",
      userworkplace: "",
      balance: 0,
      timeWorkedInMS: 0,
      startTime: "",
      endTime: "",
      startTRaw: 0,
      endTRaw: 0,
      workingTime: "",
      recordSalary: 0
    };
  }

  componentDidMount = async () => {
    // Getting data in the AsyncStorage
    AsyncStorage.getItem("username").then(value =>
      this.setState({ username: value })
    );
    AsyncStorage.getItem("userworkplace").then(value =>
      this.setState({ userworkplace: value })
    );
  };

  componentWillUnmount = () => {
    this.setState({ isWorking: false }, () => {});
    this._stopWorking();
  };

  _startWorking = () => {
    this.setState({ isWorking: true }, () => {
      this._recordStartTime();
      this._recordStartTRaw();
      this._startTimer();
    });
  };

  _stopWorking = () => {
    this.setState({ isWorking: false }, () => {
      this.handleStopPoint();
      this._recordEndTime();
      this._recordEndTRaw();
      this._recordSalary();
      this._workingTimeFormat();
    });
  };

  _recordStartTRaw = value => {
    let now = new Date();
    value = now.getTime();
    AsyncStorage.setItem("startTRaw", value);
    this.setState({ startTRaw: value });
  };

  _recordEndTRaw = value => {
    let now = new Date();
    value = now.getTime();
    AsyncStorage.setItem("endTRaw", value);
    this.setState({ endTRaw: value });
  };

  _workingTimeFormat = value => {
    let hour,
      min,
      sec = 0;

    let date1 = this.state.startTRaw;
    let date2 = this.state.endTRaw;
    let diffTime = date2 - date1;

    // hour = Math.floor(timeInMS / 3600000);
    // timeInMS = timeInMS - 3600000 * hour;
    // min = Math.floor(timeInMS / 60000);
    // timeInMS = timeInMS - 60000 * min;
    // sec = Math.floor(timeInMS / 1000);
    // timeInMS = timeInMS - 1000 * sec;
    // deciSec = Math.floor(timeInMS / 100);

    hour = Math.floor(diffTime / 3600000);
    min = Math.floor(diffTime / 60000);
    sec = Math.floor(diffTime / 1000);

    value = `${hour}:${min}:${sec}`;
    AsyncStorage.setItem("workingTime", value);
    this.setState({ workingTime: value });
  };

  _recordSalary = value => {
    value = this._getFormattedBalance();
    AsyncStorage.setItem("recordSalary", value);
    this.setState({ recordSalary: value });
  };

  _recordStartTime = value => {
    let now = new Date();
    value = now.toLocaleTimeString();
    // value = tempTime + 32400000; // 32400000 = 9 hours
    AsyncStorage.setItem("startTime", value);
    this.setState({ startTime: value }); // number
    // console.log(new Date(value + 32400000).toUTCString()); // 날짜 포멧이 나옴
  };

  _recordEndTime = value => {
    let now = new Date();
    value = now.toLocaleTimeString();
    AsyncStorage.setItem("endTime", value); // value is Number
    this.setState({ endTime: value });
  };

  _startTimer = () => {
    let timer = setInterval(() => {
      this.setState({ timeWorkedInMS: this.state.timeWorkedInMS + 100 });
      if (!this.state.isWorking) clearInterval(timer);
    }, 100);
  };

  _getFormattedTime = () => {
    let timeInMS = this.state.timeWorkedInMS;
    let hour,
      min,
      sec,
      deciSec = 0;

    hour = Math.floor(timeInMS / 3600000);
    timeInMS = timeInMS - 3600000 * hour;
    min = Math.floor(timeInMS / 60000);
    timeInMS = timeInMS - 60000 * min;
    sec = Math.floor(timeInMS / 1000);
    timeInMS = timeInMS - 1000 * sec;
    deciSec = Math.floor(timeInMS / 100);

    return `${hour}시간 ${min}분 ${sec}.${deciSec}초`;
  };

  _getFormattedBalance = () => {
    return this._formatMoney(
      Math.floor((this.props.wage / 3600000) * this.state.timeWorkedInMS)
    );
  };

  _formatMoney = num => {
    if (isNaN(num)) {
      return "NaN";
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  handleCheckPoint = () => this.setState({ checkPoint: true });
  handleStopPoint = () => this.setState({ stopPoint: false });

  render() {
    const { isWorking, checkPoint, stopPoint } = this.state;

    return (
      <>
        {isWorking ? (
          checkPoint ? (
            <View style={styles.dateCom}>
              <DateComponent style={styles.dateStyle} />
            </View>
          ) : null
        ) : (
          <View style={styles.dateCom}>
            <DateComponent style={styles.dateStyle} />
          </View>
        )}

        {isWorking ? null : stopPoint ? (
          <BeforeGotoWork
            name={this.state.username}
            workplace={this.state.userworkplace}
            onPress={this._startWorking}
          />
        ) : null}

        {isWorking ? (
          checkPoint ? null : (
            <MapViewComponent onPress={this.handleCheckPoint} />
          )
        ) : null}

        {checkPoint ? (
          <BeforeGotoLeave
            name={this.state.username}
            workplace={this.state.userworkplace}
            onPress={this._stopWorking}
            balance={this._getFormattedBalance()}
            timer={this._getFormattedTime()}
          />
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  dateCom: {
    height: 50,
    marginTop: 50,
    marginBottom:
    justifyContent: "center"
  },
  dateStyle: {
    paddingLeft: 24,
    fontSize: 30,
    color: "#333",
    fontFamily: "noto-sans"
  }
});

export default HomeTab;
