import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

handleChange = e => {
  this.setState({ text: e.target.value });
};

const _handleChange = (state, props) => {
  return { text: state.props };
};

function UserInfoText({ placeholder, style, text, autoFocus }) {
  return (
    <TextInput
      autoFocus={autoFocus}
      placeholder={placeholder}
      style={style}
      onChange={_handleChange}
    >
      {text}
    </TextInput>
  );
}

export default UserInfoText;
