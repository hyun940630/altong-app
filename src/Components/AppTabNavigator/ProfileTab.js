import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import TitleComponet from "../TitleCard";

export default class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appDes: false
    };
  }
  _toggleAppDes = () => {
    this.setState({ appDes: true });
  };
  render() {
    return (
      <View style={styles.container}>
        <TitleComponet name="마이페이지" />
        <View style={styles.paper}>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 18,
              paddingBottom: 18
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View style={styles.userImage}></View>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <View style={styles.userInfo}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#FFFFFF"
                  }}
                >
                  황현
                </Text>
                {/* <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
                  010-2553-1234
                </Text> */}
                <TouchableOpacity>
                  <Text style={{ fontSize: 14, color: "#FFF" }}>
                    개인정보 수정하기
                  </Text>
                </TouchableOpacity>
              </View>
              <Icon
                name="arrow-right"
                style={{ fontSize: 16, color: "#FFFFFF" }}
              ></Icon>
            </View>
          </View>
        </View>

        <View style={styles.setList}>
          <TouchableOpacity style={styles.setting} onPress={this._toggleAppDes}>
            <Text style={styles.settingDetail}>이용약관</Text>
            {this.state.appDes ? null : (
              <Icon
                name="arrow-right"
                style={{ fontSize: 18, color: "#3250AE" }}
              ></Icon>
            )}
          </TouchableOpacity>
          {this.state.appDes ? (
            <View style={styles.appDesText}>
              <Text style={styles.appDesInnerText}>
                안녕하세요! 알통입니다.^^
              </Text>
              <Text style={styles.appDesInnerText}>
                현재 서비스 준비중이며 조만간 찾아뵙겠습니다!
              </Text>
              <Text style={styles.appDesInnerText}>조금만 기다려주세요!</Text>
              <TouchableOpacity
                style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
                onPress={() => this.setState({ appDes: false })}
              >
                <Text style={{ fontSize: 17, color: "#3250AE", padding: 5 }}>
                  접기
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={styles.setting}>
            <Text style={styles.settingDetail}>개인정보처리방침</Text>
            <Icon
              name="arrow-right"
              style={{ fontSize: 18, color: "#3250AE" }}
            ></Icon>
          </View>
          <View style={styles.setting}>
            <Text style={styles.settingDetail}>로그아웃</Text>
            <Icon
              name="arrow-right"
              style={{ fontSize: 18, color: "#3250AE" }}
            ></Icon>
          </View>
          <View style={styles.setting}>
            <Text style={styles.settingDetail}>현재버전</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>v. 0.1</Text>
          </View>
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
  paper: {
    backgroundColor: "#3250AE",
    flexDirection: "row",
    alignItems: "center"
  },
  userImage: {
    width: 64,
    height: 64,
    backgroundColor: "gray",
    borderRadius: 64
  },
  userInfo: {
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 20
  },

  setList: {
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: "column"
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 64,

    borderBottomWidth: 1.5,
    borderBottomColor: "#EEEEEE"
  },
  settingDetail: {
    fontSize: 18
  },
  appDesText: {
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3250AE"
  },
  appDesInnerText: {
    fontSize: 15,
    color: "#333",
    padding: 4
  }
});
