import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import reducer from "../reducer";

class InsertInfo_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      workplace: ""
    };
  }

  handleSubmit = e => {
    const name = e.target.value;
    if (e.which === 13) {
      this.props.onChange(name);
      //   if (this.props.newTodo) {
      //     this.setState({ name: "" });
      //   }
    }
  };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  // handleBlur = e => {
  //   if (!this.props.newUsername) {
  //     this.props.onChange(e.target.value);
  //   }
  // };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>안녕하세요!</Text>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder="이름"
            style={styles.usernameInput}
            autoFocus={true}
            onSubmitEditing={event => {
              this.refs.nextInput.focus();
            }}
            onChange={this.handleChange}
            onPress={this.handleSubmit}
            name="name"
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
            placeholder="새 근무지"
            style={styles.workspaceInput}
            ref="nextInput"
            onChange={this.handleChange}
            name="workplace"
          />

          <Text style={{ color: "#333", fontSize: 34 }}>로</Text>
        </View>
        <Text style={styles.text}>출근하시겠어요?</Text>
        <Text>
          {this.state.name} {this.state.workplace}
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
          onPress={() => navigate("InsertInfo2")}
        >
          <Icon
            name="arrow-right"
            style={{ fontSize: 30, color: "#3250AE", padding: 5 }}
          ></Icon>
        </TouchableOpacity>
      </View>
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

export default InsertInfo_1;
