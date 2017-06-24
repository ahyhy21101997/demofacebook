import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class EditStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.navigation.state.params.status,
        }
    }
    onChangeStatus(value) {
        this.setState({
            status: value
        })
    }
    _onGoBack() {
        Alert.alert(
            'Hủy thay đổi?',
            'Nếu bạn quay lại ngay bây giờ, chỉnh sửa của bạn sẽ bị hủy bỏ.',
            [
                { text: 'GIỮ LẠI', onPress: () => { }, style: 'cancel' },
                { text: 'HỦY', onPress: () => this.props.navigation.goBack(), style: 'OK' },
            ],
            { cancelable: false }
        )
    }
    async _saveStatus() {
        let updateAt = new Date();
        console.log(this.props.navigation.state.params.id)
        try {
            await fetch(`http://api.wolfcancode.net/users/${this.props.navigation.state.params.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: this.state.status,
                })
            });
            this.props.navigation.goBack();
        } catch (err) {
            console.log("Err:", err);
        }
    }
    render() {
        const { id, name, status, createdAt } = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1, backgroundColor: 'white', marginBottom: 2, }}>
                <View style={{ height: 50, backgroundColor: '#3B5998', flexDirection: 'row' }}>

                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => this._onGoBack()}>
                        <Icon
                            name={"md-arrow-back"}
                            size={35}
                            color='white'
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 6, justifyContent: 'center' }}>
                        <Text style={{ fontSize: height * 0.029, color: 'white' }}>Chỉnh sửa bài viết</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => this._saveStatus()} >
                        <Text style={{ fontSize: height * 0.029, color: 'white' }}>LƯU</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', padding: 5 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 40, height: 40 }} source={require('../public/images//avatar.jpg')} />
                    </View>
                    <View style={{ flex: 5, justifyContent: 'center' }}>
                        <Text style={{ fontSize: height * 0.025, fontWeight: 'bold' }}>
                            {name} đã đăng.
                        </Text>
                        <Text style={{ fontSize: height * 0.025, fontWeight: 'bold' }}>
                            {createdAt}
                        </Text>
                    </View>
                    <View style={{ flex: 0.5 }}>

                    </View>
                </View>

                <View style={{ flex: 6, padding: 5 }}>
                    <TextInput
                        autoCapitalize='sentences'
                        value={this.state.status}
                        onChangeText={this.onChangeStatus.bind(this)}
                        style={{ fontSize: height * 0.027, top: 0, flex: 1 }}
                        multiline={true}
                        underlineColorAndroid="transparent"
                    />
                </View>

            </View >
        );
    }
}

const { width, height } = Dimensions.get('window');