import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Cadastro() {
 const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 const [date, setDate] = useState('');

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
      <Title title="Cadastro" />
      <Text>Seja a mudança que você quer ver no mundo!</Text>
      <TextInput style={styles.input} placeholder="Nome Completo" />
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
      <Button title="Data de Nascimento" onPress={showDatePicker} />
      <TextInput style={styles.input} value={date ? formatDate(date) : ''} editable={false} />
      <TextInput style={styles.input} placeholder="CPF" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Endereço" />
      <TextInput style={styles.input} placeholder="Telefone" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirme a Senha" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Necessidade" />

      <Button title="Cadastrar" onPress={() => {}} />
    </View>
 );
}