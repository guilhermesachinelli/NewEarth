import { View } from "react-native";
import styles from "./styles";
import Perfil from "../../components/Perfil";
import FooterNew from "../../components/FooterNew";

export default function Perfils({route}) {
    const data = route.params;
    console.log(data);

    if (!data) {
      return (
          <View style={styles.container}>
              <Text>Por favor va pagina Quem somos e selecione um perfil para poder continuar</Text>
              <FooterNew/>
          </View>
      );
  }
    
  return (
    <View style={styles.container}>
      <Perfil perfil={data} />
    <FooterNew/>
    </View>
  );
}