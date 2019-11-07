import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import UserInfoText from "../../Components/UserInfoText";

//////////////////////////
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../reducers/reducer";

const store = createStore(reducer);

// InsertUserInfo 클래스
class InsertUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passing: false,
      username: "",
      userworkplace: ""
    };
  }

  handlePassing = () =>
    this.setState({
      passing: true
      // username: this.state.username,
      // workplace: this.state.userworkplace
    });

  // handleChange = e => {
  //   this.setState({ username: e.target.value });
  // };

  render() {
    const { navigate } = this.props.navigation;
    const { passing } = this.state;
    const {
      insertUsername,
      insertUserworkplace,
      username,
      userworkplace
    } = this.props;
    return (
      <>
        <Provider store={store}>
          {passing ? (
            <View style={styles.container}>
              <View style={{ flexDirection: "row" }}>
                <UserInfoText
                  style={styles.textBold}
                  value={insertUsername}
                ></UserInfoText>
                <Text style={styles.text}>님이</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <UserInfoText style={styles.textBold}>
                  {userworkplace}
                </UserInfoText>
                <Text style={styles.text}>에서</Text>
              </View>

              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Text style={styles.text}>받는 </Text>

                <View
                  style={{
                    width: 100
                  }}
                >
                  <Text>시급/세후월급</Text>
                </View>

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
                    fontSize: 34,
                    color: "#3250AE",
                    fontWeight: "bold",
                    borderBottomColor: "#e2e2e2",
                    borderBottomWidth: 2
                  }}
                />
                <Text style={styles.text}>원 입니다.</Text>
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10
                }}
                onPress={() => navigate("Main")}
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
                <UserInfoText
                  placeholder="이름"
                  style={styles.usernameInput}
                  autoFocus={true}
                  // onSubmitEditing={event => {
                  //   this.refs.nextInput.focus();
                  // }}
                  onSubmitEditing={() => {
                    this.focusTheField("field2");
                  }}
                  onChange={this.handleChange}
                  name={insertUsername}
                />
                <Text style={styles.text}>님</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <UserInfoText
                  placeholder={"새 근무지"}
                  style={styles.workspaceInput}
                  // ref={nextInput}
                  ref={input => {
                    this.inputs["field2"] = input;
                  }}
                  onChange={this.handleChange}
                  name={insertUserworkplace}
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
        </Provider>
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
    color: "#333",
    fontSize: 34,
    fontWeight: "bold"
  },
  text: {
    color: "#333",
    fontSize: 34
  },
  usernameInput: {
    height: 50,
    minWidth: 70,
    width: "auto",
    maxWidth: 300,
    fontSize: 34,
    color: "#3250AE",
    fontWeight: "bold",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 2
  },
  workspaceInput: {
    height: 50,
    minWidth: 120,
    width: "auto",
    fontSize: 34,
    color: "#3250AE",
    fontWeight: "bold",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 2
  }
});

export default InsertUserInfo;
