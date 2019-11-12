import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

export default class StartScreen extends Component {
  static navigationOptions = {
    header: null
  };

  // FIXME: 출시 전 꼭 실행시켜야함. 초기 로그인 시 App 실행시 바로 Home으로 가는 코드
  // componentDidMount() {
  //   // this.props.insertUserInfo();
  //   AsyncStorage.getItem("username").then(value => {
  //     if (value != null) {
  //       console.log(value);
  //       this.props.navigation.navigate("Home");
  //     }
  //   });
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>환영합니다!</Text>
          <Text style={styles.text}>세상에 없던</Text>
          <Text style={[styles.text, styles.bold]}>알바임금정산 솔루션</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Text style={styles.title}>알통</Text>
            <Text style={{ fontSize: 38, color: "#333" }}>입니다.</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ paddingTop: 50 }}
          onPress={() => navigate("InsertUserInfo")}
        >
          <Text style={styles.startbtn}>시작하기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF"
  },
  title: {
    color: "#3250AE",
    fontWeight: "bold",
    paddingLeft: 24,
    fontSize: 34
  },
  textContainer: {
    paddingTop: 40
  },
  text: {
    fontSize: 34,
    color: "#333",
    paddingLeft: 24
  },
  bold: {
    fontWeight: "bold",
    color: "#3250AE"
  },
  startbtn: {
    fontSize: 34,
    paddingLeft: 24,
    fontWeight: "bold",
    color: "#3250AE"
  }
});
