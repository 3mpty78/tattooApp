import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#333",
    height: "100%",
  },
  slogan: {
    marginTop: "75%",
    marginLeft: 50,
    height: "25%",
  },
  text: {
    color: "#fff",
    flex: 1,
    flexDirection: "column",
    fontSize: 40,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    height: 40,
    width: "50%",
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 50,
    borderRadius: 15,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 80,
    height: 80,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF",
  },
});
