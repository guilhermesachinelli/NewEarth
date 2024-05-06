import { View, Text, Image } from "react-native";
import { useRoute } from '@react-navigation/native';

import styles from "./styles";

const Perfil = () => {
    const route = useRoute();
    const perfil = route.params.item;
    return (
        <View style={styles.perfilpage}>
            <View style={styles.pfpUser}>
                <Image source={perfil.image} style={styles.pfp} />
                <Text style={styles.name}>{perfil.name}</Text>
            </View>
            <Text style={styles.description}>{perfil.description}</Text>
        </View>
    );
};

export default Perfil;