import { View, Text, Image } from "react-native";

import styles from "./styles";

const Perfil = ({ perfil }) => {
    return (
        <View style={styles.perfilpage}>
            <View style={styles.pfpUser}>
                <Image source={require('./../../../assets/icon.png')} style={styles.pfp} />
                <Text style={styles.name}>Guilherme Lima</Text>
            </View>
            <Text style={styles.description}>eu sou euaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        </View>
    );
};

export default Perfil;