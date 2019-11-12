import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity
      activeOpacity={props.active === undefined ? 0.5 : props.active ? 0.5 : 1}
      onPress={props.onPress}
    >
      <Text
        style={[
          styles.button,
          props.active === undefined
            ? { color: "#3352AE" }
            : props.active
            ? { color: "#3352AE" }
            : { color: "#DDDDDD" }
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#3352AE"
  }
});

export default Button;
