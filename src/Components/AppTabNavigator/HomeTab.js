import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Container } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

import DateComponent from "../DateComponent";
import BeforeGotoWork from "../BeforeGotoWork";
import BeforeGotoLeave from "../BeforeGotoLeave";
import MapViewComponent from "../MapViewComponent";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" style={{ color: tintColor, fontSize: 28 }} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      start: false,
      checkPoint: false,
      username: "",
      userworkplace: "",
      usersalary: 0
    };
  }

  componentDidMount = () => {
    AsyncStorage.getItem("username").then(value =>
      this.setState({ username: value })
    );
    AsyncStorage.getItem("userworkplace").then(value =>
      this.setState({ userworkplace: value })
    );
  };

  handleStart = () => this.setState({ start: true });

  handleEnd = () => this.setState({ start: false, checkPoint: false });

  handleCheckPoint = () => this.setState({ checkPoint: true });

  render() {
    const { start, checkPoint } = this.state;

    return (
      <Container>
        <View style={styles.dateCom}>
          <DateComponent />
        </View>
        {start ? (
          checkPoint ? (
            <BeforeGotoLeave
              name={this.state.username}
              workplace={this.state.userworkplace}
              onPress={this.handleEnd}
            />
          ) : (
            <MapViewComponent onPress={this.handleCheckPoint} />
          )
        ) : (
          <BeforeGotoWork
            name={this.state.username}
            workplace={this.state.userworkplace}
            onPress={this.handleStart}
          />
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  dateCom: {
    height: 50,
    marginTop: 50,
    marginBottom: 80,
    justifyContent: "center"
  }
});
