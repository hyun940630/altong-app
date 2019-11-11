import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Animated
} from "react-native";
// import Geolocation from "react-native-geolocation-service";
import MapView from "react-native-maps";

export default class MapViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onPress } = this.props;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          />
        </MapView>
        <TouchableHighlight onPress={onPress}>
          <Text>확인</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width / 0.9,
    height: 400
  }
});
