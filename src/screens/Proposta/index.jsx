import React from 'react';
import { Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import FooterNew from '../../components/FooterNew';

export default function Proposta() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/social.png')}
        style={styles.image}
      />
      <Text style={styles.textTitle}>
      Construindo um amanhã mais inclusivo, um passo de cada vez: próteses sustentáveis para todos.
      </Text>
      <Text style={styles.text}>
      Vamos lançar um programa global de conscientização e acesso, oferecendo próteses sustentáveis para atletas paraolímpicos e comunidades carentes. Esta iniciativa reforçará nosso compromisso com a inovação, inclusão e sustentabilidade, solidificando nossa posição como líderes na indústria de próteses.
      </Text>
      <Image
        source={require('../../../assets/socialFavela.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
      Junte-se a nós nesta jornada para transformar vidas, impulsionar a inclusão e promover a sustentabilidade. 
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Início</Text>
      <Text style={styles.text}>
        • Estamos lançando um programa global ambicioso: fornecer próteses sustentáveis para atletas paraolímpicos e comunidades carentes em todo o mundo. Este não é apenas um programa de fornecimento de próteses, mas uma iniciativa que irá catalisar uma mudança significativa em nossa abordagem para com a inclusão e a sustentabilidade.
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Por que investir conosco?</Text>
      <Text style={[styles.text, styles.sectionTitle]}>Impacto Direto e Tangível:</Text>
      <Text style={styles.text}>
      Ao investir em nosso programa, você estará fornecendo as ferramentas essenciais para que indivíduos com deficiência alcancem seus sonhos atléticos e cotidianos. Cada prótese é mais do que uma simples peça de equipamento; é a chave para a independência, a autoconfiança e a realização pessoal.
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Compromisso com a Inovação:</Text>
      
      <Text style={styles.text}>
        • Estamos comprometidos em impulsionar a inovação em todas as etapas. Nossas próteses sustentáveis são resultado de pesquisa de ponta e tecnologia de última geração, garantindo não apenas funcionalidade superior, mas também uma abordagem ecologicamente consciente.
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Inclusão Global:</Text>
     
      <Text style={styles.text}>
        • Nossa visão se estende além das fronteiras geográficas e sociais. Queremos garantir que todas as pessoas, independentemente de sua localização ou status socioeconômico, tenham acesso às próteses de que precisam. Ao investir em nosso programa, você estará contribuindo para a construção de uma comunidade global mais inclusiva.
      </Text>
     
      <Text style={[styles.text, styles.sectionTitle]}>Sustentabilidade Ambiental:</Text>
      <Text style={styles.text}>
      Estamos comprometidos em reduzir nosso impacto no meio ambiente. Nossas próteses sustentáveis são projetadas com materiais recicláveis e processos de fabricação ecoconscientes. Ao apoiar nosso programa, você estará fazendo parte de um movimento em direção a um futuro mais verde e sustentável.
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Liderança na Indústria:</Text>
      <Text style={styles.text}>
      Com esta iniciativa, estamos solidificando nossa posição como líderes na indústria de próteses. Ao investir em nosso programa, você estará associando sua marca a valores de excelência, inovação e responsabilidade social.
      </Text>
      <Text style={[styles.text, styles.sectionTitle]}>Seu investimento não apenas mudará o presente, mas também moldará o futuro para as gerações vindouras.</Text>
      
      <Text style={[styles.text, styles.sectionTitle]}>Juntos, podemos fazer a diferença.</Text>

      <Text style={[styles.text, styles.sectionTitle]}>Juntos, podemos construir um mundo melhor.</Text>

    <FooterNew />
    </ScrollView>
  );
}

