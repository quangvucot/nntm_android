import { StyleSheet } from "react-native";
import React from "react";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  logo: {
    height: 1,
    width: 1,
    alignSelf: "center",
    margin: 50,
  },
  title: {
    fontSize: 21,
    textAlign: "center",
    color: colors.secondary,
    fontWeight: "bold",
  },
  subtitle: {
    paddingVertical: 20,
    textAlign: "center",
    fontSize: 18,
    color: colors.gray,
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: "row",
  },
  linkBtn: {
    paddingTop: 20,
    paddingLeft: 17,
    color: colors.secondary,
    fontSize: 16,
  },
  infoText: {
    paddingTop: 20,
    fontSize: 17,
  },
});
