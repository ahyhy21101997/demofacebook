import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import FacebookLogo from '../public/images/facebooklogo.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: String,
            password: String
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}></View>
                <View style={styles.wrapInput}>
                    <View style={styles.wrapLogo}>
                        <Image style={styles.logo} source={FacebookLogo} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email or Phone"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        underlineColorAndroid="rgba(255, 255, 255, 0.5)"
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        underlineColorAndroid="rgba(255, 255, 255, 0.5)"
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <TouchableOpacity style={styles.btnLogin} onPress={() => { }}>
                        <Text style={styles.btnLoginTitle}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapSignUp}>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.signUpTitle}>Sign Up for Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.signUpTitle}>Need help?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B5998'
    },

    wrapLogo: {

    },
    logo: {
        width: 50,
        height: 50,
    },

    wrapInput: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: width * 0.8
    },

    btnLogin: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        height: height * 0.07,
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.025
    },
    btnLoginTitle: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: 'bold'
    },

    wrapSignUp: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpTitle: {
        color: 'white',
        margin: 5,
        fontWeight: 'bold',
    },
});