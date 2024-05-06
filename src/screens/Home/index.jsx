import React from 'react';
import { Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import FooterNew from '../../components/FooterNew';

export default function Proposta() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/home1.png')}
        style={styles.image}
      />
      <Text style={styles.textTitle}>
      NewEarth com a Paralimpíada
      </Text>
      <Text style={styles.text}>
      Em um mundo onde a sustentabilidade é uma preocupação crescente, a NewEarth emerge como um farol de esperança, oferecendo soluções inovadoras para uma vida melhor. 
      </Text>
      <Image
        source={require('../../../assets/home2.png')}
        style={styles.image}
      />
      
      <Text style={[styles.text, styles.sectionTitle]}>A NewEarth, referência em próteses sustentáveis, firma parceria com gigantes como Red Bull, Unilever, Bosch, Coca-Cola, Nike e Samsung. A união visa um futuro onde a tecnologia, a inovação e a sustentabilidade se aliam para:
</Text>
      <Text style={styles.text}>
        • Desenvolvimento de próteses de alto desempenho para atletas;
Utilização de materiais reciclados e biodegradáveis;
Integração de inteligência artificial e sensores para próteses inteligentes;
Promoção da inclusão e visibilidade de pessoas com deficiência;
Desenvolvimento de próteses para prática de esportes de alto nível;
Integração de tecnologias de ponta nas próteses.
     </Text> 

     <Image
        source={require('../../../assets/logosPatrocinadores.png')}
        style={styles.lastimage}
      />

      <FooterNew />
    </ScrollView>
  );
}
