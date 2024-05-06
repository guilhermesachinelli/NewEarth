import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#a4b690', // Cor de fundo mais clara para um tema de natureza
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 250,
    borderRadius: 30,
    resizeMode: 'contain',
  },
  imageHeader: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 250,
    borderRadius: 30,
  },
  containerzinho:{
    padding: -50,
    marginBottom: 30,
    backgroundColor: '#819e62',
    borderRadius:29, // Cor de fundo mais clara para um tema de natureza
  },
  info: {
    fontWeight: 'bold', 
    marginTop:10,
    marginBottom: 10,
    fontSize: 13,
    lineHeight: 24,
    color: '#333', // Adicionando cor ao texto para melhor contraste
    marginLeft:5,
    marginRight:5,
    textAlign: 'center', 
  },
  textTitle: {
    marginBottom: 20, 
    marginLeft:5,
    marginRight:5,
    textAlign: 'center', 
    fontSize: 25, 
    lineHeight: 32,
    fontWeight: 'bold', 
    color: '#000', 
    marginTop: 40, 
  },
  textTitle1: {
    marginBottom: 20, 
    marginLeft:5,
    marginRight:5,
    textAlign: 'center', 
    fontSize: 25, 
    lineHeight: 32,
    fontWeight: 'bold', 
    color: '#000', 
    marginTop: 40, 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#A1B65E', // Usando uma cor diferente para destacar os títulos das seções
  },
});

export default styles;
