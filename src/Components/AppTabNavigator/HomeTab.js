import React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import AsyncStorageModule from "../../StorageModule/AsyncStorageModule";
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
      username: "",
      userworkplace: "",
      balance: 0,
      timeWorkedInMS: 0,
      startTime: "",
      endTime: ""
    };
  }

  componentDidMount = () => {
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
  };

  _startWorking = () => {
    this.setState({ isWorking: true });
    this._recordStartTime();
  };

  _stopWorking = () => {
    this.setState({ isWorking: false });
    this._recordEndTime();
  };

  _recordStartTime = () => {
    const d = new Date();
    value = d.getTime();
    AsyncStorageModule.setItem("startTime", value);
    this.setState({ startTime: value });
  };

  _recordEndTime = () => {
    const d = new Date();
    value = d.getTime();
    AsyncStorageModule.setItem("endTime", value);
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
    // await this.setState({balance: });

    return this._formatMoney(
      Math.floor((this.props.wage / 3600000) * this.state.timeWorkedInMS)
    );
  };

  _formatMoney(num) {
    if (isNaN(num)) {
      return "NaN";
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  // handleStart = () => this.setState({ isWorking: true });

  // handleEnd = () => this.setState({ isWorking: false, checkPoint: false });

  handleCheckPoint = () => this.setState({ checkPoint: true });

  render() {
    const { isWorking, checkPoint } = this.state;

    console.log(this.state.startTime + " " + this.state.endTime);

    return (
      <>
        <View style={styles.dateCom}>
          <DateComponent style={styles.dateStyle} />
        </View>
        {isWorking ? (
          checkPoint ? (
            <BeforeGotoLeave
              name={this.state.username}
              workplace={this.state.userworkplace}
              onPress={this._stopWorking}
              balance={this._getFormattedBalance()}
              timer={this._getFormattedTime()}
            />
          ) : (
            <MapViewComponent onPress={this.handleCheckPoint} />
          )
        ) : (
          <BeforeGotoWork
            name={this.state.username}
            workplace={this.state.userworkplace}
            onPress={this._startWorking}
          />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  dateCom: {
    height: 50,
    marginTop: 50,
    marginBottom: 50,
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
