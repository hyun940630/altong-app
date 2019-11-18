import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import IconRight from "react-native-vector-icons/SimpleLineIcons";
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
      inputBank: false,
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

  _showInputBank = () => {
    this.setState({ inputBank: true });
  };

  _hideInputBank = () => {
    this.setState({ inputBank: false });
  };

  render() {
    const { navigate } = this.props.navigation;
    const { username, userworkplace } = this.state;

    return (
      <View style={styles.container}>
        {this.state.showMap ? (
          <MapViewComponent onPress={this._toggleDontShowMap} />
        ) : null}
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => navigate("Profile")}
        >
          <Icon name="x" style={{ fontSize: 22, color: "#3250AE" }}></Icon>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            fontFamily: "noto-sans-bold",
            textAlign: "center"
          }}
        >
          개인정보 수정하기
        </Text>
        <View
          style={{
            height: 120,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              backgroundColor: "#3250AE",
              borderRadius: 64
            }}
          >
            <Icon
              name="person"
              style={{
                fontSize: 54,

                color: "#FFF"
              }}
            ></Icon>
          </TouchableOpacity>
        </View>

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
          {/* <TextInput style={styles.textInput} placeholder="남자" /> */}
          <TextInput style={styles.textInput} placeholder="이메일" />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <TextInput
              style={[styles.textInput, { flex: 2 }]}
              placeholder="전화번호"
            />
            <TouchableOpacity
              style={{
                flex: 1,
                borderRadius: 20,
                borderColor: "#3250AE",
                borderWidth: 1.5,
                alignItems: "center"
              }}
              onPress={this._togglephoneNumberCheck}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#3250AE",
                  fontFamily: "noto-sans",
                  padding: 4
                }}
              >
                인증번호 발송
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.pncheck ? (
            <TextInput style={styles.textInput} placeholder="인증번호 입력" />
          ) : null}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: 36,
              fontFamily: "noto-sans",
              color: "#CCC",
              marginTop: 10,
              borderBottomColor: "#CCC",
              borderBottomWidth: 2
            }}
          >
            <Text style={{ color: "#CCC", fontSize: 16 }}>
              은행을 선택하세요.
            </Text>
            {this.state.inputBank ? (
              <TouchableOpacity>
                <IconRight
                  name="arrow-down"
                  style={{
                    fontSize: 17,
                    color: "#3250AE",
                    padding: 5
                  }}
                ></IconRight>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this._showInputBank}>
                <IconRight
                  name="arrow-right"
                  style={{
                    fontSize: 17,
                    color: "#3250AE",
                    padding: 5
                  }}
                ></IconRight>
              </TouchableOpacity>
            )}
          </View>
          {this.state.inputBank ? (
            <View
              style={{
                borderWidth: 1.5,
                borderTopWidth: 0,
                borderColor: "#3250AE",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                backgroundColor: "#3250AE",
                borderTopColor: "#FFF",
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                padingRight: 10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: 26
                }}
              >
                <TouchableOpacity>
                  <Text style={styles.bankName}>국민</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.bankName}>우리</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.bankName}>신한</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.bankName}>하나</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.bankName}>기업</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.bankName}>농협</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <TextInput
                  style={styles.bankAcount}
                  placeholder="계좌번호을 입력해주세요."
                />
                <TouchableOpacity
                  style={{
                    flex: 1,
                    borderRadius: 20,
                    borderColor: "#FFF",
                    borderWidth: 1.5,
                    alignItems: "center"
                  }}
                  onPress={this._hideInputBank}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#FFF",
                      fontFamily: "noto-sans",
                      padding: 4
                    }}
                  >
                    완료
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => navigate("Profile")}
          >
            <Text
              style={{
                fontSize: 28,
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
    marginTop: 48
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
    height: 36,
    fontSize: 16,
    fontFamily: "noto-sans",
    color: "#CCC",
    marginTop: 10,
    borderBottomColor: "#CCC",
    borderBottomWidth: 2
  },
  text: {
    fontSize: 16,
    fontFamily: "noto-sans-bold",
    color: "#333"
  },
  bankName: {
    fontSize: 15,
    fontFamily: "noto-sans-bold",
    color: "#FFF"
  },
  bankAcount: {
    flex: 3,
    fontFamily: "noto-sans-bold",
    fontSize: 14,
    color: "#FFF",
    borderBottomColor: "#FFF",
    borderBottomWidth: 1.5,
    marginLeft: 6,
    marginRight: 6
  },
  bankInputBtn: {
    flex: 1
  }
});

export default EditProfile;
