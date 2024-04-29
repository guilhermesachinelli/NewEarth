import { Image, ScrollView, Text, View } from "react-native";
import styles from "./styles";

export default function QuemSomos() {

  const Nos = [user1 = { name: "Guilherme Lima", description: "eu sou eu" }, user2 = { name: "Guilherme Lima", description: "eu sou eu" }, user3 = { name: "Guilherme Lima", description: "eu sou eu" }, user4 = { name: "Guilherme Lima", description: "eu sou eu" }, user5 = { name: "Guilherme Lima", description: "eu sou eu" }]

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.texts}>A NewEarth é uma empresa pioneira na fabricação de próteses sustentáveis e inovadoras, dedicada a transformar a vida de pessoas com deficiência física. Através da união de tecnologia de ponta, materiais ecológicos e um design humanizado, a NewEarth oferece soluções personalizadas que garantem mobilidade, conforto e liberdade para seus usuários.</Text>

      <Image source={require('./../../../assets/6c4d6198-ae5e-44aa-96e1-57b48ab42841.jpg')} style={styles.refimage} />

      <Text style={styles.titletexts}>Nossos Valores</Text>

      <Text style={styles.texts}>• Sustentabilidade: Utilizamos materiais reciclados e biodegradáveis ​​sempre que possível, minimizando o impacto ambiental da nossa produção.</Text>
      <Text style={styles.texts}>• Inovação: Buscamos constantemente desenvolver novas tecnologias e soluções para atender às necessidades únicas de cada usuário.</Text>
      <Text style={styles.texts}>• Qualidade: Priorizamos a qualidade e a durabilidade em todas as nossas próteses, garantindo o melhor desempenho para os nossos clientes.</Text>
      <Text style={styles.texts}>• Acessibilidade: Acreditamos que todos devem ter acesso a próteses de alta qualidade, independentemente da sua renda ou situação financeira.</Text>
      <Text style={styles.texts}>• Inclusão: Promovemos a inclusão e o empoderamento de pessoas com deficiência, combatendo o preconceito e a discriminação.</Text>
      </ScrollView>
    </View>
  );
}
