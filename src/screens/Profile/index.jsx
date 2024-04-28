import { Text, View } from "react-native";
import { useState,useEffect } from "react";
import { useNavigation , useIsFocused} from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    if (isFocused) {
      const users = usersList.getAll();
      setAllUsers(users);
    }
  }, [isFocused]);
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
        allUsers.map((user) => {
          return (
            <View key={user.id} style={styles.userContainer}>
              <Text style={styles.text}>Nome: {user.nome}</Text>
              <Text style={styles.text}>Idade: {usersList.calculateAge(user.dataNascimento)}</Text>
              <Text style={styles.text}>CPF: {maskCpf(user.cpf)}</Text>
              <Text style={styles.text}>Email: {user.email}</Text>
              <Text style={styles.text}>Endereço: {user.endereco}</Text>
              <Text style={styles.text}>Telefone: {maskPhone(user.telefone)}</Text>
              <Text style={styles.text}>Necessidade: {user.necessidade}</Text>
            </View>
          );
        }) 
      }
    </View>
  );
}
