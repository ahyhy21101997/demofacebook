import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker, } from 'native-base';

export default class Status extends Component {
    constructor(props) {
        super(props);
    }
    onValueChange(value) {
        if (value == 'key1') {
            Alert.alert(id);
        }
    }
    render() {

        const { id,
            name,
            status,
            createdAt,
            updatedAt,
            navigation } = this.props;

        return (
            <View style={{ height: 300, backgroundColor: 'white', marginTop: 2, marginBottom: 2, padding: 5, justifyContent: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
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
                        <Picker
                            supportedOrientations={['portrait']}
                            iosHeader="Select one"
                            headerBackButtonText="Go Back"
                            mode="dialog"
                            onValueChange={(value) => {
                                if (value == 'key1') {
                                    navigation.navigate('EditStatus', {
                                        id,
                                        name,
                                        status,
                                        createdAt,
                                        updatedAt
                                    });
                                }
                            }}>
                            <Picker.Item label="Lưu bài viết" value="key0" />
                            <Picker.Item label="Chỉnh sửa bài viết" value="key1" />
                            <Picker.Item label="Chỉnh sửa quyền riêng tư" value="key2" />
                            <Picker.Item label="Ẩn khỏi dòng thời gian" value="key3" />
                        </Picker>
                    </View>
                </View>

                <View style={{ flex: 3, padding: 5, }}>
                    <Text style={{ fontSize: height * 0.027 }}>{status}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomColor: 'rgba(0,0,0,0.06)',
                        borderTopWidth: 1,
                        borderTopColor: 'rgba(0,0,0,0.06)',
                        backgroundColor: 'white'
                    }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Icon
                                name={"md-thumbs-up"}
                                size={16}
                                color='#555759'
                            />
                            <Text style={{ fontSize: height * 0.025, fontWeight: 'bold', marginLeft: 2 }}>Like</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Icon
                                name={"md-text"}
                                size={16}
                                color='#555759'
                            />
                            <Text style={{ fontSize: height * 0.025, fontWeight: 'bold', marginLeft: 2 }}>Bình luận</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Icon
                                name={"md-share-alt"}
                                size={16}
                                color='#555759'
                            />
                            <Text style={{ fontSize: height * 0.025, fontWeight: 'bold', marginLeft: 2 }}>Chia sẽ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 40, height: 40 }} source={require('../public/images//avatar.jpg')} />
                    </View>
                    <View style={{ flex: 5, justifyContent: 'center', padding: 5 }}>
                        <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TextInput
                                style={{ flex: 8 }}
                                multiline={true}
                                underlineColorAndroid="transparent"
                                placeholder="Viết bình luận..."
                            />
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon
                                    name={"ios-camera"}
                                    size={30}
                                    color='#555759'
                                />
                            </View>
                        </View>
                    </View>

                </View>
            </View >
        )
    }
}

const { width, height } = Dimensions.get('window');