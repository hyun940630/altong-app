import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  AsyncStorage,
  StatusBar
} from "react-native";
import MapView from "react-native-maps";
// import * as Location from 'expo-location'
// import Icon from 'react-native-vector-icons/Ionicons'
// import AsyncStorageModule from '../StorageModule/AsyncStorageModule'

export default class MapViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todayDate: "",
      userworkplace: "",
      latitude: null,
      longitude: null
    };
  }

  componentDidMount = () => {
    this._getCurrentGeolocation();
    // this.getLocation()
    AsyncStorage.getItem("userworkplace").then(value =>
      this.setState({ userworkplace: value })
    );
    AsyncStorage.getItem("todayDate").then(value =>
      this.setState({ todayDate: value })
    );
  };

  _getCurrentGeolocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        error => alert("위치를 찾지 못했어요😥", error),
        { enableHighAccuracy: true, timeout: 20000 }
      );
      navigator.geolocation.watchPosition(position => {
        this.setState({ position });
      });
    } catch (error) {
      Alert.alert("위치를 찾지 못했어요😥", "GPS가 켜져있는지 확인해 주세요!");
    }
  };

  componentWillUnmount = async () => {
    this._getCurrentGeolocation();
  };

  render() {
    const { userworkplace, todayDate } = this.state;
    const { onPress } = this.props;

    return (
      this.state.latitude !== null && (
        <View style={styles.container}>
          <StatusBar style={{ backgroundColor: "#FFF", opacity: 100 }} />
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0065,
              longitudeDelta: 0.0065
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }}
              // title={userworkplace}
            />
          </MapView>

          <View style={styles.mapMakerDes}>
            <Text
              style={[
                styles.text,
                { textAlign: "center", fontWeight: "center" }
              ]}
            >
              {userworkplace}
            </Text>
            <View style={styles.line}></View>
            <Text style={styles.text}>{todayDate}</Text>
            <Text style={styles.textQuestion}>근무지가 맞나요?</Text>
            <TouchableHighlight
              style={styles.textCheckLayout}
              onPress={onPress}
            >
              <Text style={styles.textcheck}>확인</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#3250AE",
    zIndex: 100
  },
  mapStyle: {
    width: Dimensions.get("window").width / 1,
    height: Dimensions.get("window").height / 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  mapMakerDes: {
    position: "absolute",
    marginTop: 100,
    top: 0,
    left: 50,
    right: 50,
    backgroundColor: "#3250AE",
    borderColor: "#3250AE",
    borderRadius: 10,
    borderWidth: 1
  },
  line: {
    borderColor: "#CCCCCC90",
    borderWidth: 0.3
  },
  text: {
    color: "#FFFFFF",
    padding: 4,
    fontSize: 13,
    fontFamily: "noto-sans-bold"
  },
  textQuestion: {
    color: "#FFFFFF",
    fontFamily: "noto-sans",
    fontSize: 18,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2
  },
  textCheckLayout: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
    margin: 4
  },
  textcheck: {
    color: "#3250AE",
    fontFamily: "noto-sans-bold",
    fontSize: 15,
    padding: 4,
    zIndex: 1000
  }
});
