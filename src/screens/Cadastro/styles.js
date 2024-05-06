import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  
  input: {
    height: 40,
    borderColor: '#ccc', // Cinza claro
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5, // Borda arredondada
  },
  textTitle: {
   marginBottom: 20, 
   fontSize: 21, 
   lineHeight: 32,
   fontWeight: 'bold', 
   color: '#A1B65E', 
   marginTop: 40, 
 },
 textSubTitle: {
   marginBottom: 10, 
   fontSize: 15, 
   lineHeight: 32,
   fontWeight: 'bold', 
   color: '#A1B65E', 
   marginTop: -10, 
 },
  button: {
    backgroundColor: '#A1B65E', // Verde
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  
  textButton: {
    color: '#fff', // Texto branco
    fontSize: 16,
    fontWeight: 'bold', // Negrito
  },
});
