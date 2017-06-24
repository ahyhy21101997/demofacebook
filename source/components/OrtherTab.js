import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';

import facebooklogo from '../public/images/facebooklogo.png';

class OrtherTab extends Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                { image: facebooklogo, title: 'Nguyễn Văn Nhật Huy', type: 'Facebook' },
                { image: facebooklogo, title: 'Page 1', type: '' },
                { image: facebooklogo, title: 'hynguyen1997', type: 'Instagram' },
            ]
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.18)', marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255, 0.4)' }}>
                {
                    this.state.buttons.map((item, index) => (
                        <TouchableOpacity style={{ flexDirection: 'row', padding: 10, }} key={item.type} onPress={() => navigate('Profile')}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ tintColor: 'red', width: 30, height: 30 }} source={item.image} />
                            </View>
                            <View style={{ flex: 6, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                <Text>{item.type}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
}

export default OrtherTab;
