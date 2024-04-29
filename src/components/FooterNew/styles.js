import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        height: 130,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: "50%",
        width: "30%",
        margin: 0,
    },
    icon: {
        width: 20,
        height: 20,
    },

});

export default styles;