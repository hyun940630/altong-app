import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage
} from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";
// import { connect } from "react-redux";

class InsertUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passing: false,
      active: false,
      hiddenHour: false,
      hiddenMonth: false,
      username: "",
      userworkplace: "",
      usersalary: ""
    };
  }

  setName = value => {
    AsyncStorage.setItem("username", value);
    this.setState({ username: value });
  };

  setWorkplace = value => {
    AsyncStorage.setItem("userworkplace", value);
    this.setState({ userworkplace: value });
  };

  setSalary = value => {
    AsyncStorage.setItem("usersalary", value);
    this.setState({ usersalary: value });
  };

  handleSelectSalaryTypeHour = () => {
    this.setState({
      activeHour: !this.state.active,
      hiddenMonth: !this.state.hiddenMonth
    });
  };

  handleSelectSalaryTypeMonth = () => {
    this.setState({
      activeMonth: !this.state.active,
      hiddenHour: !this.state.hiddenHour
    });
  };

  handlePassing = () => {
    this.setState({ passing: true });
  };

  render() {
    const { navigate } = this.props.navigation;
    const { passing, hiddenHour, hiddenMonth } = this.state;

    return (
      <>
        {passing ? (
          <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textBold}>{this.state.username}</Text>
              <Text style={styles.text}>님이</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={styles.textBold}>{this.state.userworkplace}</Text>
              <Text style={styles.text}>에서</Text>
            </View>

            <View
              style={{
                flexDirection: "row"
              }}
            >
              <Text style={styles.text}>받는 </Text>

              {hiddenHour ? null : (
                <TouchableOpacity onPress={this.handleSelectSalaryTypeHour}>
                  <Text
                    style={
                      this.state.activeHour
                        ? styles.textBold
                        : styles.noSelectText
                    }
                  >
                    시급
                  </Text>
                </TouchableOpacity>
              )}

              {hiddenMonth ? null : (
                <TouchableOpacity onPress={this.handleSelectSalaryTypeMonth}>
                  <Text
                    style={
                      this.state.activeMonth
                        ? styles.textBold
                        : styles.noSelectText
                    }
                  >
                    {" "}
                    세후월급
                  </Text>
                </TouchableOpacity>
              )}

              <Text style={styles.text}>은</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="급여"
                autoFocus={true}
                style={{
                  height: 45,
                  minWidth: 50,
                  textAlign: "center",
                  width: "auto",
                  fontSize: 32,
                  color: "#3250AE",
                  fontFamily: "noto-sans-bold",
                  borderBottomColor: "#e2e2e2",
                  borderBottomWidth: 2
                }}
                onChangeText={this.setSalary}
              />
              <Text style={styles.text}>원 입니다.</Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10
              }}
              onPress={() => navigate("Home")}
            >
              <Icon
                name="arrow-right"
                style={{ fontSize: 30, color: "#3250AE", padding: 5 }}
              ></Icon>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.text}>안녕하세요!</Text>

            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="이름"
                name="username"
                onChangeText={this.setName}
                style={styles.usernameInput}
                autoFocus={true}
                onSubmitEditing={event => {
                  this.refs.nextInput.focus();
                }}
                // onSubmitEditing={() => {
                //   this.focusTheField("field2");
                // }}
              />
              <Text style={styles.text}>님</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <TextInput
                placeholder={"새 근무지"}
                name="userworkplace"
                onChangeText={this.setWorkplace}
                style={styles.workspaceInput}
                ref="nextInput"
                // ref={input => {
                //   this.inputs["field2"] = input;
                // }}
              />
              <Text style={{ color: "#333", fontSize: 34 }}>로</Text>
            </View>
            <Text style={styles.text}>출근하시겠어요?</Text>

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10
              }}
              onPress={this.handlePassing}
            >
              <Icon
                name="arrow-right"
                style={{ fontSize: 30, color: "#3250AE", padding: 5 }}
              ></Icon>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 450,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 24
  },
  textBold: {
    color: "#3250AE",
    fontSize: 32,
    fontFamily: "noto-sans-bold"
  },
  text: {
    color: "#333",
    fontSize: 32,
    fontFamily: "noto-sans"
  },
  usernameInput: {
    height: 40,
    minWidth: 70,
    width: "auto",
    maxWidth: 300,
    fontSize: 32,
    color: "#3250AE",
    fontFamily: "noto-sans-bold",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 2
  },
  workspaceInput: {
    height: 40,
    minWidth: 120,
    width: "auto",
    fontSize: 32,
    color: "#3250AE",
    fontFamily: "noto-sans-bold",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 2
  },
  noSelectText: {
    fontSize: 32,
    color: "#CCCCCC",
    fontFamily: "noto-sans"
  }
});

export default InsertUserInfo;
