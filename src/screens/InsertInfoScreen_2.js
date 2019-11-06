import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as AltongActions } from "../reducer";
import Icon from "react-native-vector-icons/SimpleLineIcons";

class InsertInfo_2 extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    // if (!currentProps.name && nextProps.name) {
    //   this.setState({
    //     name: name
    //   });
    // }
  }

  render() {
    const { name, workplace } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textBold}>{name}</Text>
          <Text style={styles.text}>님이</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text style={styles.textBold}>{workplace}</Text>
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
  content: {
    height: 400,

    backgroundColor: "gray"
  },
  textBold: {
    fontSize: 34,
    color: "#3250AE", // identity color
    fontWeight: "bold"
  },
  text: {
    color: "#333",
    fontSize: 34
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  pickerStyle: {
    height: 150,
    width: "80%",
    color: "#344953",
    justifyContent: "center"
  }
});

function mapStateToProps(state) {
  const { name, workplace } = state;
  return {
    name,
    workplace
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: bindActionCreators(AltongActions.setName, dispatch),
    setWorkplace: bindActionCreators(AltongActions.setWorkplace, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertInfo_2);
