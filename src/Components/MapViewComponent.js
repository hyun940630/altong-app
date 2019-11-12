import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/Ionicons";

export default class MapViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userworkplace: "",
      coords: { latitude: 37.5072141, longitude: 127.0605913 }
    };
  }

  componentDidMount = () => {
    this.getLocation();
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();

      // Getting data in the AsyncStorage
      AsyncStorage.getItem("latitude").then(value =>
        this.setState({ latitude: { value } })
      );
      AsyncStorage.getItem("longitude").then(value =>
        this.setState({ longitude: { value } })
      );
      console.log(latitude + " " + longitude);

      navigator.geolocation.watchPosition(coords => {
        this.setState({ coords });
      });
      // Send to API and get weather!
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  render() {
    const { onPress } = this.props;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: this.state.coords.latitude,
            longitude: this.state.coords.longitude,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.coords.latitude,
              longitude: this.state.coords.longitude
            }}
            title="피플러스"
          />
        </MapView>

        <View style={{ flexDirection: "row", marginTop: -100 }}>
          <Text style={styles.text}>이곳에서 근무하시나요?</Text>
          <TouchableHighlight onPress={onPress}>
            <Text style={styles.textcheck}>확인</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#3250AE"
  },
  mapStyle: {
    width: Dimensions.get("window").width / 1,
    height: Dimensions.get("window").height / 1.2,
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
    fontWeight: "bold"
  }
});
