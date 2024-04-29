import { View, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { TextInput } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/home1.png')} 
      onPress={() => Navigation.navigate ("Vanguardht")} 
      style={{ width: 30, height: 30, marginTop: 50, marginBottom: 45,
       width: 350, height: 210, borderRadius: 30, marginLeft: 15, }} />

    </View>
  );
}
