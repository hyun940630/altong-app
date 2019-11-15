import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import MapView from "react-native-maps";
// import * as Location from 'expo-location'
// import Icon from 'react-native-vector-icons/Ionicons'
// import AsyncStorageModule from '../StorageModule/AsyncStorageModule'

export default class MapViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { onPress } = this.props;
    // const { userworkplace } = this.state
    return (
      this.state.latitude !== null && (
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0045,
              longitudeDelta: 0.0045
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

          <View
            style={{
              flexDirection: "row",
              marginTop: 100
            }}
          >
            <Text style={styles.text}>이곳에서 근무하시나요?</Text>
            <TouchableHighlight onPress={onPress}>
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
  text: {
    backgroundColor: "#FFF",
    color: "#3250AE",
    padding: 5,
    borderRadius: 12,
    fontSize: 20,
    marginRight: 10
  },
  textcheck: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3250AE",
    color: "#FFF",
    padding: 5,
    borderRadius: 12,
    fontSize: 20,
    fontWeight: "bold",
    zIndex: 1000
  }
});
