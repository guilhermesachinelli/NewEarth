import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    perfilpage: {
        alignItems: "center",
        width: "100%",
        height: "100%",
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
    name: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    description: {
        margin: 20,
        marginTop: 0,
        fontSize: 16,
        textAlign: "justify",
    },
  });

export default styles;