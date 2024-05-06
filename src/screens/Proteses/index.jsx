import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';
import FooterNew from '../../components/FooterNew';
export default function Proteses() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                    source={require('../../../assets/mulherBionica.jpg')}
                    style={styles.imageHeader}
                />
            <Text style={styles.textTitle1}>Bem vindos onde a inspiração encontra a realidade.</Text>
            <View style={styles.containerzinho} >
                <Image
                    source={require('../../../assets/rheoknee.png')}
                    style={styles.image}
                />
                <Text style={styles.textTitle}>Rheo Knee</Text>
                <Text style={styles.info} >
A Rheo Knee é uma prótese de joelho inovadora que combina tecnologia avançada com sustentabilidade. Com sensores e algoritmos inteligentes, proporciona uma experiência de mobilidade natural e independente, permitindo atividades como subir escadas e correr. Projetada com materiais duráveis e recicláveis, reduzindo seu impacto ambiental. Restaura não apenas a mobilidade, mas também a independência e autoconfiança, transformando vidas e promovendo um futuro mais inclusivo e sustentável.</Text>
            </View>


            <View style={styles.containerzinho}>
                <Image
                    source={require('../../../assets/geniumX3.png')}
                    style={styles.image}/>
                <Text style={styles.textTitle}>Genium X3</Text>
                <Text style={styles.info} >O Genium X3, redefine os padrões de mobilidade para amputados de membros inferiores. Com sensores e algoritmos sofisticados, proporciona uma marcha natural e adaptativa, enfrentando desafios do mundo real com precisão. Sua durabilidade e resistência à água promovem uma vida ativa e independente, capacitando os usuários a superar obstáculos e desfrutar de uma melhor qualidade de vida.</Text>
            </View>


            <View style={styles.containerzinho}>
                <Image
                    source={require('../../../assets/foot.png')}
                    style={styles.image}/>
                <Text style={styles.textTitle}>Proprio Foot</Text>
                <Text style={styles.info} >
O Proprio Foot é uma prótese de pé inovadora que combina tecnologia avançada e design ergonômico para proporcionar uma experiência de caminhada natural e confortável. Com sensores e algoritmos inteligentes, adapta-se dinamicamente ao usuário, oferecendo uma marcha suave e equilibrada em diversos terrenos. Projetado para reduzir fadiga e desconforto, restaura a funcionalidade e estabilidade do pé, transformando vidas e promovendo mobilidade eficiente.</Text>
            </View>


            <View style={styles.containerzinho}>
                <Image
                    source={require('../../../assets/pe.png')}
                    style={styles.image}
                />
                <Text style={styles.textTitle}>T63</Text>
                <Text style={styles.info} >
A prótese T63 é uma solução avançada para atletas de corrida amputados, oferecendo desempenho máximo e resposta rápida. Leve e aerodinâmica, proporciona estabilidade e eficiência para alcançar altas velocidades. Seu design permite uma transição suave entre passadas e uma sensação de propulsão eficiente. Ajustável e personalizável, garante conforto e eficácia durante as competições. Popular entre corredores de elite, proporciona uma experiência de corrida semelhante à de atletas não amputados</Text>
            </View>


            <View style={styles.containerzinho}>
                <Image
                    source={require('../../../assets/mao.png')}
                    style={styles.image}
                />
                <Text style={styles.textTitle}>LimbQuantun</Text>
                <Text style={styles.info} >A mão LimbQuantum, é uma prótese avançada para amputados de membros superiores, oferecendo funcionalidade próxima à naturalidade. Com sensores e algoritmos inteligentes, permite controle preciso dos movimentos através de sinais musculares, facilitando tarefas cotidianas. Sua durabilidade, resistência e design ergonômico proporcionam conforto durante o uso prolongado, sendo uma escolha ideal para restaurar a funcionalidade da mão perdida.</Text>
            </View>


            <View style={styles.lastcontainerzinho}>
                <Image
                    source={require('./../../../assets/bike.png')}
                    style={styles.image}
                />
                <Text style={styles.textTitle}>T51</Text>
                <Text style={styles.info} >A cadeira de rodas para atletismo na classe T51 é essencial para atletas paralímpicos que competem em corridas de pista e campo. Projetada para leveza, resistência e aerodinâmica, proporciona uma condução suave e eficiente, permitindo velocidades impressionantes. Altamente ajustável e personalizável, adapta-se às necessidades individuais de cada atleta. Combina tecnologia avançada com engenharia de precisão, capacitando os atletas a alcançarem seus objetivos e superarem limites no esporte paralímpico.</Text>
            </View>

<FooterNew />
        </ScrollView>
    );
}

