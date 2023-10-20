import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../componentes/Header'
import Balance from '../../componentes/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Geovana"/>
      <Balance/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
