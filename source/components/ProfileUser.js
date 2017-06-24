import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/Ionicons';
import searchIcon from '../public/images/searchIcon.png';
import ListStatus from '../containers/ListStatus';

export default class ProfileUser extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 50, backgroundColor: '#3B5998', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.goBack()}>
                        <Icon
                            name={"md-arrow-back"}
                            size={35}
                            color='white'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flex: 6,
                        justifyContent: 'center',
                        flexDirection: 'row',

                    }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 20, height: 20 }} source={searchIcon} />
                        </View>
                        <TextInput
                            style={{ flex: 10 }}
                            placeholder="Tìm kiếm"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            underlineColorAndroid="rgba(255, 255, 255, 0.5)" />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1, backgroundColor: '#bdbec1' }}>
                    <View style={{ height: 300, backgroundColor: 'white' }}>
                        <TouchableOpacity style={{}}>
                            <Image style={{ height: 180 }} source={require('../public/images/coverfb.jpg')} />
                            <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.5)', padding: 5, paddingLeft: 13, paddingRight: 13, borderRadius: 5, bottom: -3, right: -5 }}>
                                <Image style={{ width: 16, height: 16, tintColor: 'black', marginRight: 5 }} source={require('../public/images/camera.png')} />
                                <View >
                                    <Text>Chỉnh sửa</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ position: 'absolute', width: width, alignItems: 'center', top: 155 }} >
                            <TouchableOpacity style={{ borderColor: 'white', borderWidth: 2, }} >
                                <Image style={{ width: 130, height: 130 }} source={require('../public/images/avatar.jpg')} />
                                <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.5)', padding: 5, paddingLeft: 13, paddingRight: 13, borderRadius: 5, bottom: -3, right: -5 }}>
                                    <Image style={{ width: 16, height: 16, tintColor: 'black', marginRight: 5 }} source={require('../public/images/camera.png')} />
                                    <View >
                                        <Text>Chỉnh sửa</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View >
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingBottom: 5 }}>
                        <Text style={{ fontSize: height * 0.05, color: 'black', }}>Nguyễn Văn Nhật Huy</Text>
                        <Text style={{ fontSize: height * 0.04, color: 'black', }}>(Hy)</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        height: 60,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(0,0,0,0.1)',
                        borderTopWidth: 1,
                        borderTopColor: 'rgba(0,0,0,0.1)',
                        backgroundColor: 'white'
                    }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name={"ios-list"}
                                size={35}
                                color='#555759'
                            />
                            <Text style={{ fontSize: height * 0.02 }}>Nhật ký hoạt động</Text>
                        </TouchableOpacity>
                        < TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name={"ios-person"}
                                size={35}
                                color='#555759'
                            />
                            <Text style={{ fontSize: height * 0.02 }}>Cập nhập thông tin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name={"md-more"}
                                size={35}
                                color='#555759'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 8, backgroundColor: 'white' }}>
                        <TouchableOpacity style={{ margin: 5, borderRadius: 3, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#3d43f4', padding: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon
                                    name={"md-create"}
                                    size={16}
                                    color='#3d43f4'
                                />
                                <Text style={{ marginLeft: 3, color: '#3d43f4' }}>MÔ TẢ VỀ BẠN</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 5, borderRadius: 3, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#3d43f4', padding: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon
                                    name={"md-add"}
                                    size={16}
                                    color='#3d43f4'
                                />
                                <Text style={{ marginLeft: 3, color: '#3d43f4' }}>THÊM CHI TIẾT VỀ BẠN</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 5, borderRadius: 3, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#3d43f4', padding: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon
                                    name={"md-photos"}
                                    size={16}
                                    color='#3d43f4'
                                />
                                <Text style={{ marginLeft: 3, color: '#3d43f4' }}>THÊM ẢNH NỔI BẬT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        height: 50,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(0,0,0,0.1)',
                        borderTopWidth: 1,
                        borderTopColor: 'rgba(0,0,0,0.1)',
                        backgroundColor: 'white'
                    }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ fontSize: height * 0.025, fontWeight: 'bold' }}>GIỚI THIỆU</Text>
                        </TouchableOpacity>
                        < TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ fontSize: height * 0.025, fontWeight: 'bold' }}>ẢNH</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height * 0.025, fontWeight: 'bold' }}>BẠN BÈ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ top: 5 }}>
                        <ListStatus navigation={this.props.navigation} />
                    </View>

                </ScrollView >

            </View>
        );
    }
}
const { width, height } = Dimensions.get('window');