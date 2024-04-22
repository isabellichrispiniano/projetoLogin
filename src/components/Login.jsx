import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Senha from 'react-native-vector-icons/EvilIcons';
import Facebook from 'react-native-vector-icons/Entypo';
import Google from 'react-native-vector-icons/AntDesign';

export default props => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

            <View style={cadastro.foxhub}>
                <Text style={cadastro.font1}>Fox<Text style={cadastro.font2}>HUB</Text></Text>
            </View>

            <View style={cadastro.continue}>
                <Text style={cadastro.bemvindo}>Welcome Back,</Text>
                <Text >Sign in continue</Text>
            </View>


            <View style={cadastro.name}>
                <Icon name='email' size={20} />
                <TextInput
                    onChangeText={value => setnome(value)}
                    placeholder="Email"
                />
            </View>

            <View style={cadastro.name}>
                <Senha name='lock' size={25} color='#3D3B40' />
                <TextInput
                    onChangeText={value => setnome(value)}
                    placeholder="Senha"
                />
            </View>

            <TouchableOpacity style={cadastro.Botao}>
                <Text style={cadastro.txtbtn}>Continue!</Text>
            </TouchableOpacity>

            <Text style={cadastro.txt}>Faça login com</Text>


           <View style={cadastro.botoes}>
            <TouchableOpacity style={cadastro.botaoLogin}>
                <Facebook name='facebook' size={20} color='#7BC9FF' />
            </TouchableOpacity>

            <TouchableOpacity style={cadastro.botaoLogin2} >
                <Google name='google' size={20} color='#E72929'/>
            </TouchableOpacity>          
            </View>


            <TouchableOpacity onPress={() => props.navigation.navigate('Cadastro')}>
            <Text>Não tem conta? <Text  style={cadastro.login}>Faça cadastro!</Text></Text>
            </TouchableOpacity> 

        </View>
    )
}

const cadastro = StyleSheet.create(
    {
        name: {
            alignItems: 'center',
            flexDirection: `row`,
            borderBottomColor: '#EEEEEE',
            borderBottomWidth: 1,
            marginBottom: 50,
            width: 350,
            
        },
        imagem: {
            margin: 10
        },
        font1: {
            color: '#000000',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 5
        },
        font2: {
            color: '#0000FF'
        },
        input: {
            paddingRight: '100%',
            paddingBottom: 10,
            paddingLeft: 0,
            marginLeft: 10,
        },
        bemvindo: {
            color: 'black',
            fontSize: 22,


        },
        foxhub: {
            marginBottom: '30%',
            marginRight: '70%'
        },
        continue: {
            marginRight: '50%'
        },
        Botao: {
            backgroundColor: "#10439F",
            padding: 10,
            borderRadius: 10,
            paddingLeft: 70,
            paddingRight: 70,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5
        },
        txtbtn: {
            color: 'white',
        },
        txt: {
            color: 'black'
        },
        botaoLogin:{
            backgroundColor: "#FFFF",
            borderWidth: 1,
            borderColor: '#8d9296',
            padding: 10,
            paddingLeft: 40,
            paddingRight: 45,
            borderRadius: 15,
            margin:2
        },
        botoes: {
            flexDirection: 'row',
            padding: 20,
        },
        botaoLogin2:{
            backgroundColor: "#FFFF",
            borderWidth: 1,
            borderColor: '#8d9296',
            padding: 10,
            paddingLeft: 40,
            paddingRight: 40,
            borderRadius: 15,
            margin:2
        },
        login:{
            color:'#E72929'
        }
    }
)



