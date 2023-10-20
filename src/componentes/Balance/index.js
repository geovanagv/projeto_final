import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance() {
 return (
   <View style={styles.container}>
    <View style={styles.item}>
       <Text style={styles.itemTible}>Saldo</Text>
        <View>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.Balance}>35.000,00</Text>
            </View>      
    </View>
   </View>
  );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#FFF'
    }
})