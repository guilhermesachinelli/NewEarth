import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff', // Cor de fundo mais clara para um tema de natureza
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 210,
    borderRadius: 30,
  },
  text: {
    marginTop:10,
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Adicionando cor ao texto para melhor contraste
  },
  textTitle: {
    marginBottom: 20, 
    fontSize: 21, 
    lineHeight: 32,
    fontWeight: 'bold', 
    color: '#A1B65E', 
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
