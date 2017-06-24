import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import searchIcon from '../public/images/searchIcon.png';
import messengerIcon from '../public/images/messenger.png';
import cameraIcon from '../public/images/camera.png';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.wrapDirect}>
                    <Image style={styles.icon} source={cameraIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.wrapSearch}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 20 }} source={searchIcon} />
                    </View>
                    <TextInput
                        style={{ flex: 10 }}
                        placeholder="Tìm kiếm"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        underlineColorAndroid="rgba(255, 255, 255, 0.5)" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.wrapMessenger}>
                    <Image style={styles.icon} source={messengerIcon} />
                </TouchableOpacity>
            </View>
        );
    }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#3B5998',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    wrapDirect: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapSearch: {
        flex: 5,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    wrapMessenger: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 22,
        height: 22
    }
});

