import { Text, View } from "react-native";
import { useState,useEffect } from "react";
import { useNavigation , useIsFocused} from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";
import usersList from "../../models/usersList.js";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allUsers, setAllUsers] = useState([]);
  const { data } = route.params;
  useEffect(() => {
    if (isFocused) {
      const users = usersList.getAll();
      setAllUsers(users);
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      {
        allUsers.map((user) => {
          return (
            <View key={user.id} style={styles.userContainer}>
              <Text style={styles.text}>Nome: {user.nome}</Text>
              <Text style={styles.text}>Fundação: {user.dataNascimento}</Text>
              <Text style={styles.text}>CNPJ: {user.cpf}</Text>
              <Text style={styles.text}>Email: {user.email}</Text>
              <Text style={styles.text}>Endereço: {user.endereco}</Text>
              <Text style={styles.text}>Telefone: {user.telefone}</Text>
              <Text style={styles.text}>Necessidade: {user.necessidade}</Text>
              <TouchButton title="Detalhes" route={'Category'} data={user}  style={styles.button}/>
            </View>
          );
        }) 
      }
    </View>
  );
}
