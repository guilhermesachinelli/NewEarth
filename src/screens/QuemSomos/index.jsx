import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import FooterNew from "../../components/FooterNew";


export default function QuemSomos() {
  const navigation = useNavigation();
  const nos = [user1 = { name: "Guilherme Lima", description: "Documentador Técnico Guilherme Lima é o Documentador Técnico na NewEarth, responsável por criar toda a documentação essencial para o projeto de próteses recicláveis. Seu trabalho inclui elaborar manuais do usuário, especificações técnicas e notas de lançamento, garantindo a clareza e acessibilidade das informações para futuras manutenções e escalabilidade da plataforma. Sua contribuição é fundamental para o sucesso contínuo do projeto.", image: require('./../../../assets/lima.jpeg')}, user2 = { name: "Isabella Barquilha", description: "Designer de UI/UX Isabelle Barquilia é a Designer de UI/UX na NewEarth, responsável por criar uma interface de usuário intuitiva e esteticamente agradável para nossa plataforma de próteses recicláveis. Ela utiliza ferramentas como Figma para prototipar e testar designs, garantindo uma experiência de usuário excepcional. Sua abordagem centrada no usuário e atenção aos detalhes são essenciais para o sucesso da empresa.", image: require('./../../../assets/isa.png')}, user3 = { name: "Guilherme Godoy", description: "Desenvolvedor Líder Na NewEarth, Guilherme Godoy é o Desenvolvedor Líder responsável pela arquitetura e desenvolvimento técnico de nossa plataforma de próteses recicláveis. Ele lidera a equipe, garantindo a aplicação das melhores práticas de programação, coordena as tarefas entre os desenvolvedores e promove uma cultura de excelência técnica e sustentabilidade. Guilherme é essencial parao sucesso e impacto positivo de nossa empresa.", image: require('./../../../assets/godoy.png')}, user4= { name: "Luana Fassine", description: "Especialista em ESG e Analista de Qualidade e Testes Luana Fassini desempenha dois papéis-chave na equipe da NewEarth: Especialista em ESG e Analista de Qualidade e Testes. Como Especialista em ESG, ela integra práticas sustentáveis e de responsabilidade social ao projeto, garantindo conformidade com regulamentos e melhores práticas. Como Analista de Qualidade e Testes, Luana garante a funcionalidade, confiabilidade e segurança do aplicativo por meio de testes abrangentes. Sua contribuição é fundamental para o sucesso e a integridade da plataforma da NewEarth.", image: require('./../../../assets/luana.png')}, user5 = { name: "Richard Macedo", description: "Richard Macedo é o Gerente de Projeto na NewEarth, responsável por coordenar as atividades da equipe, garantindo o cumprimento dos prazos e requisitos do projeto. Ele também se comunica com stakeholders e resolve conflitos internos da equipe de forma eficiente. Sua liderança é fundamental para o sucesso dos projetos da empresa.", image: require('./../../../assets/richard.png')}];

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

        <Text style={styles.titletexts}>Nossa Equipe</Text>
        <View style={styles.teamContainer}>
        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => navigation.navigate("Perfils", { item: nos[0] })}>
            <Image source={require('./../../../assets/lima.jpeg')} style={styles.pfp} />
            <Text style={styles.name}>Guilherme Lima</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Perfils", { item: nos[1] })}>
            <Image source={require('./../../../assets/isa.png')} style={styles.pfp} />
            <Text style={styles.name}>Isabella Barquilha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Perfils", { item: nos[2] })}>
            <Image source={require('./../../../assets/godoy.png')} style={styles.pfp} />
            <Text style={styles.name}>Guilherme Godoy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Perfils", { item: nos[3] })}>
            <Image source={require('./../../../assets/luana.png')} style={styles.pfp} />
            <Text style={styles.name}>Luana Fassine</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Perfils", { item: nos[4] })}>
            <Image source={require('./../../../assets/richard.png')} style={styles.pfp} />
            <Text style={styles.name}>Richard Macedo</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>
        <FooterNew />
      </ScrollView>
    </View>
  );
}
