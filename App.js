import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import Main from './source/containers/Main';
import ProfileUser from './source/components/ProfileUser';
import EditStatus from './source/containers/EditStatus';

import Orientation from 'react-native-orientation';
import {
    StackNavigator,
} from 'react-navigation';

class AppTest extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Main navigation={this.props.navigation} />
            </View>
        )
    }
    componentWillMount() {
        Orientation.lockToPortrait();
    }
}


const App = StackNavigator({
    Home: { screen: AppTest },
    Profile: {
        screen: ProfileUser, navigationOptions: {
            header: null
        }
    },
    EditStatus: {
        screen: EditStatus, navigationOptions: {
            header: null
        }
    }
});

export default App;
