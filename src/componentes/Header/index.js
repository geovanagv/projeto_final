import react from 'react'
import {View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const statusBarHeigth = StatusBar.curretHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.username}>Geovana Gonçalves</Text> 
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View> 
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeigth,
        flexDirection: 'row', 
        paddingStart: 100, 
        paddingEnd: 15,
        paddingBottom: 2,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: '#FFFF',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height:44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,
    }

})