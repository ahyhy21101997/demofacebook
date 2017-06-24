import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Header from './Header';
import TabBarPage from './TabbarPage';
//import ProfileUser from '../components/ProfileUser';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <TabBarPage navigation={this.props.navigation}/>
            </View>
        );
    }
}

