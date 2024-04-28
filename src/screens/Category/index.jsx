import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import usersList from "../../models/usersList";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Category() {
  const navigation = useNavigation();
  const { data } = route.params;
  const edituser = () => {
    navigation.navigate('Cadastro', { user: data, edit: true });
  }
  const removeuser = () => {
    usersList.remove(data.id);
    navigation.navigate('Profile');
  }
  function maskCpf(value) {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que não seja número por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de número e insere . entre eles
      .replace(/(\d{3})(\d)/, '$1.$2') // faz a mesma coisa que a linha acima
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') // captura 3 números seguidos de 1 ou 2 números e insere - entre eles
      .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 números seguidos de qualquer quantidade de números e substitui pelo primeiro grupo capturado
  }

  function maskPhone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
  return (
    <View style={styles.container}>
      {
        data ? (
          <Text>Detalhes user</Text>
        ) : (
          <Text>Selecione um user</Text>
        )
      }
      <Text>Nome: {data.nome}</Text>
      <Text>Idade: {usersList.calculateAge(data.dataNascimento)}</Text>
      <Text>CPF: {maskCpf(data.cpf)}</Text>
      <Text>Email: {data.email}</Text>
      <Text>Endereço: {data.endereco}</Text>
      <Text>Telefone: {maskPhone(data.telefone)}</Text>
      <Text>Necessidade: {data.necessidade}</Text>
      <TouchableOpacity title="Editar" onPress={edituser}>
        <Text>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity title="Remover" onPress={removeuser}>
        <Text>Remover</Text>
      </TouchableOpacity>

    </View>
  );
}
