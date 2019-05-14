import React, { Component } from "react";
import { StyleSheet, Text} from "react-native";
export default class GlobalText extends Component {
  render() {
    return (
        <View/>     
    );
  }
};
export const GlobalStyles = StyleSheet.create({
  headerButtonLeft: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  headerButtonRight: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
  appOrange: {
    color: "#ff9800"
  },
  centerView: {
    justifyContent: "center",
    alignItems: "center"
  }
});