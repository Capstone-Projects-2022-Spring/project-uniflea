import { readDirectoryAsync } from "expo-file-system";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 13,
  },
  pageContainer: {
    padding: 20,
    paddingBottom: "25%",
  },
  icon: {
    paddingRight: 28,
  },

  space: {
    width: 20,
    height: 20,
  },
  iconStyle: {
    flexDirection: "row",
    padding: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  inputStyle: {
    flex: 1,
    padding: 20,
  },
  settingsText: {
    fontSize: 24,
    marginBottom: 10,
    color: "#403d3d",
    fontFamily: "Arial",
  },
  lableText: {
    fontSize: 14,
    color: "#403d3d",
    fontFamily: "Arial",
    fontStyle: "italic",
  },
  lableContainer: {
    fontSize: 14,
    height: 20,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 30,
    bottom: -15,
  },

  containerText: {
    fontSize: 14,
    height: 50,
    width: "95%",
    justifyContent: "center",
    paddingTop: 18,
    paddingRight: 40,
    color: "gray",
    fontFamily: "Arial",
    borderBottomWidth: 1,
    borderColor: "gray",
  },

  containerPassword: {
    paddingTop: 18,
    paddingRight: 40,
    fontFamily: "Arial",
    justifyContent: "center",
    width: 315,
    height: 50,
    fontSize: 14,
    color: "gray",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  inputContainer: {
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
export default styles;
