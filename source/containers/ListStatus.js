import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';
import Status from '../components/Status';
import { Spinner } from 'native-base';
export default class ListStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true
        }
    }

    componentDidMount() {

        fetch('http://api.wolfcancode.net/users', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson,
                    refreshing: false
                })
            });

    }
    _renderItem = ({ item, index }) => (
        <Status
            key={index}
            id={item.id}
            name={item.name}
            status={item.status}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
            navigation={this.props.navigation}
        />
    );
    _keyExtractor = (item, index) => index;

    render() {

        return (
            <FlatList
                refreshing={this.state.refreshing}
                data={this.state.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ListEmptyComponent={()=><Spinner color='blue' />}
            />
        )
      
    }
}