import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

export default () => {
    return (

        <View style={{backgroundColor: '#3F5C57', flex: 1}}> 
            <Image style={styles.ImageTelaLogin}
                source={require('../assets/ImageTelaLoginGesta.png')}
                />
           <View>
                <TextInput style={styles.container} placeholder="Usuário" placeholderTextColor="#9ECEC5" >
                </TextInput>

                <TextInput style={styles.container} placeholder="Senha" placeholderTextColor="#9ECEC5" >
                </TextInput>

                <TouchableOpacity style={styles.BotaoLogin}>
                    <Text style={styles.Txtcolor}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.BotaoAcessoSenha}>
                    <Text style={styles.Txtcolor2}>Primeiro acesso?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.BotaoAcessoSenha}>
                    <Text style={styles.Txtcolor2}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                
                <Image style={styles.ImageDigital}
                source={require('../assets/DigitalGesta.png')}
                />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#9ECEC5',
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderWidth: 2,
        width: '70%',
        marginTop: 15,
        marginLeft: 70,
        height: 60,
        fontSize: 20,
        color: '#9ECEC5',
        marginBottom: -15,
    },
    ImageTelaLogin: {
       marginLeft: 80,
       width: 270,
       height: 270,
    },
    BotaoLogin: {
        marginLeft: 70,
        width: '70%',
        marginTop: 50,
        height: 60,
        backgroundColor: '#FECEA5',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Txtcolor: {
       fontSize: 20,
       fontWeight: 'bold',
       color: '#3F5C57',
    },
    BotaoAcessoSenha: {
        marginLeft: 110,
        width: '50%',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Txtcolor2: {
        fontSize: 20,
        color: '#9ECEC5',
    },
    ImageDigital: {
        marginTop: 18,
        marginLeft: 190,
    },
});
