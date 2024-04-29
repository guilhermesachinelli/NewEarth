import { View } from "react-native";
import styles from "./styles";
import Perfil from "../../components/Perfil";
import FooterNew from "../../components/FooterNew";

export default function Perfils({route}) {
    const data = route.params;
    
  return (
    <View style={styles.container}>
    <Perfil perfil={data}/>

    <FooterNew/>
    </View>
  );
}