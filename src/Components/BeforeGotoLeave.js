import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  AsyncStorage
} from "react-native";

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  time -= minutes * 60;

  var seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return;
}

export default class BeforeGotoLeave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earningMoney: 0,
      todayTime: 0,
      start: true
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.start && nextProps.start) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
    } else if (currentProps.start && !nextProps.start) {
      clearInterval(this.state.interval);
    }
  }

  render() {
    const {
      name,
      workplace,
      earningMoney,
      todayTime,
      onPress,
      start
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textBold}>{name}</Text>
            <Text style={styles.text}>님</Text>
          </View>
          <Text style={styles.text}>오늘 출근해서</Text>

          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Text style={[styles.text, { fontWeight: "bold" }]}>
              {/* {start ? earningMoney : null}원 */}
            </Text>
            <Text style={styles.text}>벌었어요.</Text>

            <TouchableOpacity>
              <Text
                style={{
                  height: 45,
                  fontSize: 34,
                  color: "#DDDDDD",
                  fontWeight: "bold",
                  marginTop: 50,
                  marginBottom: 50
                }}
                // 바로간편출금 스크린으로 연결할 것!!
              >
                바로간편출금
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 40
              }}
            >
              <Text style={styles.smallText}>현재 </Text>
              <Text style={[styles.smallText, { fontWeight: "bold" }]}>
                {start ? todayTime : "0"}분
              </Text>
              <Text style={styles.smallText}> 근무하고 있어요.</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={onPress}
          >
            <Text style={styles.text}>{workplace}</Text>
            <Text style={styles.gotoLeaveBtn}>퇴근하기</Text>
          </TouchableOpacity>
        </View>
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
  content: {
    height: 400,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 24
  },
  textBold: {
    color: "#333",
    fontSize: 34,
    color: "#3250AE", // identity color
    fontWeight: "bold"
  },
  text: {
    color: "#333",
    fontSize: 34
  },
  gotoLeaveBtn: {
    fontSize: 34,
    padding: 5,
    color: "#3250AE",
    fontWeight: "bold"
  }
});
