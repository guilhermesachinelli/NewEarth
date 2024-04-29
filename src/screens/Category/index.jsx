import { View ,Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import usersList from "../../models/usersList";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Category({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  const edituser = () => {
    navigation.navigate('Cadastro', { user: data, edit: true });
  }
  const removeuser = () => {
    usersList.remove(data.id);
    navigation.navigate('Profile');
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
      <Text>CPF: {data.cpf}</Text>
      <Text>Email: {data.email}</Text>
      <Text>Endereço: {data.endereco}</Text>
      <Text>Telefone: {data.telefone}</Text>
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
