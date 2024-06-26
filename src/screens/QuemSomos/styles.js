import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    margin: "auto",
    paddingTop: "5%",

  },
 texts:{
  textAlign: "justify",

 },
 refimage:{
  width: "100%",
  height: 200,
  borderRadius: 10,
  margin: 10,
 },
 titletexts:{
  fontSize: 20,
  fontWeight: "bold",
  fontStyle: "italic",
  margin: 10,
  color: "#A1B65E",
 },
 nos:{
  marginBottom: 150,
 },
 pfpUser: {
  alignItems: "center",
  backgroundColor: "#ece8e7",
  margin: "10%",
  padding: 20,
},
pfp:{
  width: 100,
  height: 150,
  borderRadius: 10,
  margin: 10,
},
teamContainer: {
  marginBottom: 140,
},
profileContainer: {
  backgroundColor: "#ece8e7",
  marginLeft: 10,
},
name: {
  fontSize: 14,
  fontWeight: "bold",
  textAlign: "center",
},
});

export default styles;
