import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image,TouchableOpacity,Touchable} from 'react-native';

const estilo = StyleSheet.create
({
    container:
    {
        flex: 1,
        flexDirection: 'row',  
        flexWrap: 'wrap',  
    },
    back:
    {
        backgroundColor: 'black',
    },
    txt:
    {
        color: 'black',
    },
    fundo:
    {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblack',
    },
    foto:
    {
        width:410,
        height:200,
        marginBottom: 450, 
    },
    

    backmenu:
    {
        backgroundColor: 'white',
    },
    titulo:
    {
        fontSize: 50,
        color: 'black',
        
    },
    fundo:
    {
        width:410,
        height:200,
        marginTop: 10,
    },
    moda:
    {
        textAlign:'center',
        marginTop: 20,
        marginLeft: 0,
        fontSize: 20,
    },
    imgfem:
    {
        width: 110,
        height:180,
        margin:13,
        marginTop: 30,
    },
    descricao:
    {
        fontSize: 22,
        textAlign: 'center',
        margin: 2,
    },
    bemvindo:
    {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 40,
    },
    info:
    {
        textAlign:'center',
        marginTop: 20,
    },
    txtmaps:
    {
        textAlign:'center',
        marginTop: 10,
    },
    maps:
    {
        width:380,
        height:180,
        marginTop: 10,
        marginLeft: 15,
    },
    txtcompra:
    {
        textAlign:'center',
        fontSize: 30,
        marginTop: 50.
    },
    cart:
    {
        alignItems:'center',
        justifyContent:'center',
        color: 'white',
        marginLeft: 50,
        marginTop: 50,
    },
    pago:
    {
        marginTop: 52,
        marginLeft: 50,
    }
})

export default estilo
