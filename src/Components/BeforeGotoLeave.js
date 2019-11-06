import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class CardCompnent extends Component {
  render() {
    const { name, earningMoney, todayTime } = this.props;
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
              {earningMoney}원
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
                {todayTime}분
              </Text>
              <Text style={styles.smallText}> 근무하고 있어요.</Text>
            </View>
          </View>
          <TouchableOpacity style={{ marginTop: 40 }}>
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
    height: 450,
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
