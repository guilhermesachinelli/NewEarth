import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  titleContent: {
    width: 300,
    alignItems: "center",
    alignSelf: "center",
  },
  titleHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: -5,
    fontFamily: "sans-serif",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "sans-serif",
    width: 300,
  },
  newColection: {
    backgroundColor: "#000",
    height: 500,
    marginTop: 20,
    alignItems: "center",
  },
  titleHeaderWhite:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "sans-serif",
  },
  subtitlewhite: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "sans-serif",
    textAlign: "center",
    width: 300,

  },
});

export default styles;
