import React from 'react';
import { Image, Text, ScrollView } from 'react-native';
import styles from './styles';
import FooterNew from '../../components/FooterNew';

export default function Sustentabilidade() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/sus.jpg')}
        style={styles.image}
      />
      <Text style={styles.textTitle}>
        Sustentabilidade e Inovação
      </Text>
      <Text style={styles.text}>
        A NewEarth é uma empresa que nasceu com o propósito de transformar vidas por meio da tecnologia e da inovação. Nossa missão é desenvolver próteses de alto desempenho, sustentáveis e acessíveis para pessoas com deficiência. Acreditamos que a tecnologia e a inovação podem ser aliadas da inclusão e da acessibilidade, e por isso, buscamos sempre as melhores soluções para atender às necessidades de nossos clientes.
      </Text>
      <Image
        source={require('../../../assets/million-waves-project.png')}
        style={styles.image}
      />

      <Text style={[styles.text, styles.sectionTitle]}>A NewEarth, referência em próteses sustentáveis, veja as nossas iniciativas:
      </Text>
      <Text style={styles.text}>
        Tecnologia de ponta: Oferecemos próteses inovadoras que transformam vidas, com recursos aprimorados e funcionalidades expandidas.
      </Text>
      <Text style={styles.text}>
        Sustentabilidade: Integramos práticas ecológicas em todo o nosso processo, reduzindo ainda mais o impacto ambiental e promovendo um futuro mais verde.
      </Text>
      <Text style={styles.text}>
        Impacto social: Apoiamos iniciativas que promovem a inclusão e a qualidade de vida, expandindo nosso alcance e impactando positivamente ainda mais pessoas.
      </Text>

      <Text style={[styles.text, styles.sectionTitle]}>Materiais reciclados:
      </Text>

      <Text style={styles.text}>
        Total: 80%
      </Text>
      <Text style={styles.text}>
        Doados por patrocinadores: 60%
      </Text>

      <Text style={[styles.text, styles.sectionTitle]}>
      Impactando vidas e o planeta:
      </Text>
      <Text style={styles.text}>
      250 próteses vendidas por mês, 500 pessoas beneficiadas pelas próteses, 50 toneladas de materiais reciclados, 25 toneladas de CO2 economizado
      </Text>

      <Text style={ styles.lastText}>.</Text>
      <FooterNew />
    </ScrollView>
    
  );
}
