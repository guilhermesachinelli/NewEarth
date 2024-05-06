import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';
import FooterNew from '../../components/FooterNew';
export default function Paraolimpiadas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/paraolimpiadas.png')}
        style={styles.image}
      />
      <Text style={styles.textTitle}>
        Onde limites são redefinidos e grandezas alcançadas!
      </Text>
      <Text style={styles.text}>
        As Paralimpíadas são um evento esportivo global que celebra a força
        humana, a resiliência e a diversidade. A cada quatro anos, atletas com
        deficiência física de todo o mundo se reúnem para competir em uma ampla
        gama de esportes, demonstrando habilidade, determinação e um espírito
        esportivo inabalável.
      </Text>
      <Image
        source={require('../../../assets/paraolimpiadas2.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Transformando vidas e o planeta, com números concretos e impacto
        crescente!
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Origens e Evolução</Text>
      <Text style={styles.text}>
        • As Paralimpíadas surgiram em 1948, em Londres, na Inglaterra, como
        uma competição para veteranos de guerra com deficiências. Desde então,
        o evento cresceu exponencialmente, se tornando um dos maiores e mais
        prestigiados eventos esportivos do mundo. Hoje, as Paralimpíadas atraem
        milhares de atletas de mais de 160 países, inspirando e motivando
        pessoas em todo o globo.
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Mais do que Esporte</Text>
      <Text style={styles.text}>
        As Paralimpíadas representam mais do que apenas competição esportiva.
        São uma plataforma para promover a inclusão, desafiar estereótipos e
        celebrar a diversidade humana. Através das histórias inspiradoras dos
        atletas paralímpicos, o evento demonstra o poder do esporte para
        superar barreiras e unir pessoas de diferentes origens e culturas.
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Impacto e Legado</Text>
      <Text style={styles.text}>
        As Paralimpíadas, além da competição esportiva, geram mudanças positivas
        na sociedade:
      </Text>
      <Text style={styles.text}>
        • Promovem a inclusão e a igualdade de oportunidades para pessoas com
        deficiência
      </Text>
      <Text style={styles.text}>• Desafiam estereótipos e preconceitos</Text>
      <Text style={styles.text}>• Inspiram e motivam pessoas em todo o mundo</Text>
      <Text style={styles.text}>
        • Aumentam a conscientização sobre questões relacionadas à deficiência
      </Text>
      <Text style={styles.text}>
        • Geram oportunidades econômicas e de desenvolvimento para as cidades-sede
      </Text>
      <Text style={styles.text}>
        • Promovem a sustentabilidade e a proteção do meio ambiente
      </Text>
      <Text style={styles.text}>
        • Deixam um legado duradouro para as futuras gerações
      </Text>
      <Text style={styles.text}>
        As Paralimpíadas são um evento único que vai muito além do esporte. Elas
        são uma celebração da diversidade, da resiliência e da força humana, que
        inspira e motiva pessoas em todo o mundo a superar desafios e alcançar
        seus sonhos.
      </Text>
      <Text style={styles.text}>
        As Paralimpíadas são um símbolo de esperança, potencial humano e
        superação de obstáculos. Elas representam a capacidade do ser humano de
        se adaptar, inovar e transcender limites, inspirando e motivando pessoas
        em todo o mundo a acreditar em si mesmas e em seu potencial.
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Conclusão</Text>
      <Text style={styles.text}>
        As Paralimpíadas são um evento extraordinário que celebra a força humana,
        a resiliência e a diversidade. Através do esporte, os atletas paralímpicos
        inspiram e motivam pessoas em todo o mundo, desafiando estereótipos e
        promovendo a inclusão social. As Paralimpíadas são mais do que apenas uma
        competição esportiva; são um símbolo da esperança, do potencial humano e
        da capacidade de superar qualquer obstáculo.
      </Text>
      <Text style={[styles.text, styles.textTitle]}>Juntos temos mais força!</Text>
      <Text style={styles.text}>
A NewEarth, referência em próteses sustentáveis, firma parceria com gigantes como Red Bull, Unilever, Bosch, Coca-Cola, Nike e Samsung. A união visa um futuro onde a tecnologia, a inovação e a sustentabilidade se aliam para:
  </Text>
        <Text style={styles.text}>
            • Desenvolver próteses acessíveis e de alta qualidade para atletas paralímpicos
        </Text>
        <Text style={styles.text}>
            • Promover a inclusão e a igualdade de oportunidades para pessoas com deficiência
        </Text>
        <Text style={styles.text}>
            • Estimular a inovação e o desenvolvimento tecnológico sustentável
        </Text>
        <Text style={styles.text}>
            • Inspirar e motivar pessoas em todo o mundo a superar desafios e alcançar seus sonhos
        </Text>
        <Text style={styles.text}>
            • Deixar um legado positivo para as futuras gerações
        </Text>
        <Text style={styles.text}>
            A NewEarth acredita que juntos podemos fazer a diferença e transformar o mundo em um lugar melhor para todos. Junte-se a nós nessa jornada rumo a um futuro mais inclusivo, sustentável e inspirador!
        </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Patrocinadores</Text>

      <Image
        source={require('../../../assets/logosPatrocinadores.png')}
        style={styles.image}
      />
      <FooterNew />
    </ScrollView>
  );
}

