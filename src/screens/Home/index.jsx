import { View, Image, Text } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/video.gif")} style={{ width: '100%', height: 300, resizeMode: 'contain', marginTop: -35 }} />
      <View style={styles.titleContent}>
        <Text style={styles.titleHeader}>AeroArm 23</Text>
        <Text style={styles.subTitle}>Construída para durar, desenhada para empoderar, explore novos horizontes! </Text>
      </View>
      <View style={styles.newColection}>
        <Image source={require("../../../assets/plat.jpg")} style={{ width: 350, height: 300, resizeMode: 'contain', marginLeft: 25 }} />
        <Text style={styles.titleHeaderWhite}>Nova Coleção</Text>
        <Text style={styles.subtitlewhite}>Conheça a nova coleção AeroArm 23, feitas com materiais de alta qualidade e durabilidade. </Text>
      </View>
    </View>
  );
}
