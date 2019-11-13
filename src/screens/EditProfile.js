import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MapIcon from "react-native-vector-icons/FontAwesome5";
import MapViewComponent from "../Components/MapViewComponent";
import AsyncStorageModule from "../StorageModule/AsyncStorageModule";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "     ",
      userworkplace: "",
      appDes: false,
      pncheck: false,
      showMap: false,
      onchangeWorkplace: false
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

  _toggleAppDes = () => {
    this.setState({ appDes: true });
  };

  _togglephoneNumberCheck = () => {
    this.setState({ pncheck: true });
  };

  _toggleShowMap = () => {
    this.setState({ showMap: true });
  };

  _toggleDontShowMap = () => {
    this.setState({ showMap: false });
  };
  _onchangeWorkplace = () => {
    this.setState({ onchangeWorkplace: true });
  };

  _setName = value => {
    AsyncStorageModule.removeItem("username");
    AsyncStorageModule.setItem("username", value);
  };

  _setWorkplace = value => {
    AsyncStorageModule.removeItem("userworkplace");
    AsyncStorageModule.setItem("userworkplace", value);
  };

  render() {
    const { navigate } = this.props.navigation;
    const { username, userworkplace } = this.state;

    return (
      <View style={styles.container}>
        {/* <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => navigate("Profile")}
        >
          <Icon name="x" style={{ fontSize: 30, color: "#3250AE" }}></Icon>
        </TouchableOpacity> */}

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={require("../../assets/Image/logo.png")}
            style={styles.userImage}
          ></Image>
        </View>

        {this.state.showMap ? (
          <MapViewComponent onPress={this._toggleDontShowMap} />
        ) : null}

        <View style={styles.userInfo}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity onPress={this._onchangeWorkplace}>
              {this.state.onchangeWorkplace ? (
                <TextInput
                  style={styles.text}
                  placeholder={userworkplace}
                  onChangeText={this._setWorkplace}
                />
              ) : (
                <Text style={styles.text}>{userworkplace}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={this._toggleShowMap}
            >
              <MapIcon
                name="map-marker-alt"
                style={{
                  fontSize: 22,
                  fontFamily: "noto-sans-bold",
                  color: "#3250AE"
                }}
              ></MapIcon>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: "noto-sans-bold",
                  color: "#3250AE",
                  marginLeft: 4
                }}
              >
                위치확인
              </Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder={username}
            onChangeText={this._setName}
          />
          {/* <TextInput style={styles.textInput} placeholder="남자" />
          <TextInput style={styles.textInput} placeholder="EGG@email.com" /> */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <TextInput
              style={[styles.textInput, { flex: 2 }]}
              placeholder="010-0000-0000"
            />
            <TouchableOpacity
              style={{
                flex: 1,
                borderRadius: 20,
                borderColor: "#3250AE",
                borderWidth: 2,
                alignItems: "center"
              }}
              onPress={this._togglephoneNumberCheck}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#3250AE",
                  fontFamily: "noto-sans-bold",
                  padding: 5
                }}
              >
                인증번호 발송
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.pncheck ? (
            <TextInput style={styles.textInput} placeholder="인증번호 입력" />
          ) : null}

          <TouchableOpacity
            style={styles.textInput}
            onPress={() => alert("준비중입니다.")}
          >
            <Text
              style={{ fontSize: 20, fontFamily: "noto-sans", color: "#CCC" }}
            >
              은행을 선택하세요.
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => navigate("Profile")}
          >
            <Text
              style={{
                fontSize: 34,
                fontFamily: "noto-sans-bold",
                color: "#3250AE"
              }}
            >
              저장
            </Text>
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
  cancelBtn: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 24,
    marginTop: 36
  },
  userImage: {
    width: 84,
    height: 84,
    backgroundColor: "#3250AE",
    borderRadius: 64
  },
  userInfo: {
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 10,
    alignContent: "center",
    justifyContent: "center"
  },
  textInput: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    fontSize: 20,
    fontFamily: "noto-sans",
    color: "#CCC",
    marginTop: 10,
    borderBottomColor: "#CCC",
    borderBottomWidth: 2
  },
  text: {
    fontSize: 20,
    fontFamily: "noto-sans-bold",
    color: "#333"
  }
});

export default EditProfile;
