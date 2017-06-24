import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import TabBar from '../components/Tabbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import OrtherTab from '../components/OrtherTab';
import ListStatus from './ListStatus';
export default class TabbarPage extends Component {
    render() {
        return <ScrollableTabView
            style={{ backgroundColor: 'rgba(255,255,255, 0.5)' }}
            initialPage={0}
            renderTabBar={() => <TabBar />}
        >
            <ScrollView tabLabel="ios-paper" >
                <View >
                    <ListStatus navigation={this.props.navigation} />
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-people" >
                <View >
                    <Text>News</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-notifications" >
                <View >
                    <Text>Notifications</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-list" >
                <OrtherTab navigation={this.props.navigation} />
            </ScrollView>
        </ScrollableTabView>;
    }
}