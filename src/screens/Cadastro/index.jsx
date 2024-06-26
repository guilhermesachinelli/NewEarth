import usersList from "../../models/usersList";
import User from "../../models/users";
import { useNavigation } from "@react-navigation/native";
import { useState,useEffect } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInputMask } from "react-native-masked-text";
import FooterNew from "../../components/FooterNew";

export default function Cadastro({route}) {
   let { user, edit} = route.params;
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
   const [nome, setNome] = useState('');
   const [date, setDate] = useState('');
   const [cpf, setCpf] = useState('');
   const [email, setEmail] = useState('');
   const [endereco, setEndereco] = useState('');
   const [telefone, setTelefone] = useState('');
   const [senha, setSenha] = useState('');
   const [confirmarSenha, setConfirmarSenha] = useState('');
   const [necessidade, setNecessidade] = useState('');
   const [isUpdate, setIsUpdate] = useState(edit);

   const navigation = useNavigation();
   useEffect(() => {
      if(edit){
         setNome(user.nome);
         setCpf(user.cpf);
         setEmail(user.email);
         setEndereco(user.endereco);
         setTelefone(user.telefone);
         setSenha(user.senha);
         setConfirmarSenha(user.confirmarSenha);
         setNecessidade(user.necessidade);
      }else
         clearInputs();
   }, [user,edit]);
   function clearInputs(){
      setNome('');
      setDate('');
      setCpf('');
      setEmail('');
      setEndereco('');
      setTelefone('');
      setSenha('');
      setConfirmarSenha('');
      setNecessidade('');
      edit = false;
   }
   const handleUser = () => {
      if (isUpdate){
         usersList.update(user.id,nome,date,cpf,email,endereco,telefone,senha,confirmarSenha,necessidade);
         clearInputs();
      }else{
         const newUser = new User(nome,date,cpf,email,endereco,telefone,senha,confirmarSenha,necessidade);
         usersList.add(newUser);
         clearInputs();
      }
      navigation.navigate('Home');
   };
   const showDatePicker = () => {
      setDatePickerVisibility(true);
   };

   const hideDatePicker = () => {
      setDatePickerVisibility(false);
   };

   const handleConfirm = (date) => {
      setDate(date);
      hideDatePicker();
   };

   // Função para formatar a data
   const formatDate = (date) => {
      return date.toLocaleDateString('pt-BR', {
         day: '2-digit',
         month: 'long',
         year: 'numeric',
      });
   };

   return (
      <View style={styles.container}>
         <Text style={styles.textTitle}>Cadastre-se</Text>
         <Text style={styles.textSubTitle}>Seja a mudança que você quer ver no mundo!</Text>
         <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={setNome} value={nome} />
         <DateTimePickerModal
            isVisible={isDatePickerVisible}
            date={new Date()}
            locale="pt-BR"
            onChange={(date) => {
               setDate(date);
            }}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
         />
         <Button title="Data de Nascimento" onPress={showDatePicker}
         color={"#A1B65E"}
         />
         <TextInput style={styles.input} value={date ? formatDate(date) : ''} editable={false} />
         <TextInputMask
            style={styles.input}
            placeholder="CPF"
            type={"cpf"}
            value={cpf}
            onChangeText={setCpf}
         />
         <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email}/>
         <TextInput style={styles.input} placeholder="Endereço" onChangeText={setEndereco} value={endereco} />
         <TextInputMask
            style={styles.input}
            placeholder="Telefone"
            type={"cel-phone"}
            options={{
               maskType: 'BRL',
               withDDD: true,
               dddMask: '(99) ',
            }}
            value={telefone}
            onChangeText={setTelefone}
         />
         <TextInput style={styles.input} placeholder="Senha" onChangeText={setSenha} secureTextEntry={true} value={senha}/>
         <TextInput style={styles.input} placeholder="Confirme a Senha" onChangeText={setConfirmarSenha} secureTextEntry={true} value={confirmarSenha}/>
         <TextInput style={styles.input} placeholder="Necessidade" onChangeText={setNecessidade} value={necessidade}/>
         <TouchableOpacity style={styles.button} onPress={handleUser}>
            <Text style={styles.textButton}>{isUpdate ? "Salvar Alterações" : "Criar Usuário"}</Text>
         </TouchableOpacity>
         {
            isUpdate && (
               <TouchableOpacity style={styles.button} onPress={clearInputs}>
                  <Text style={styles.textButton}>Cancelar</Text>
               </TouchableOpacity>
            )
         }
         <FooterNew />
      </View>
   );
}