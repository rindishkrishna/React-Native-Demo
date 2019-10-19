import React, { Component } from 'react'

import { View, Text, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'

class Type extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
            headerStyle: {
                backgroundColor: '#fe530b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 35
            },
        };
    };
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            listInfo: [],
            allPages: ''
        }
        this.getData()
    }

    // 获取谜语列表
    getData() {
        let typeId = this.props.navigation.getParam('id');
        let page = this.state.page
        fetch(`http://route.showapi.com/151-4?showapi_appid=104278&showapi_sign=e0e71fe6d28e468fbbce185098e915bc&typeId=${typeId}&page=${page}`).then((response) => response.json()).then((responseJson) => {
            let listInfo = this.state.listInfo.concat(responseJson.showapi_res_body.pb.contentlist)
            this.setState({
                listInfo,
                allPages: responseJson.showapi_res_body.pb.allPages
            })
        })
    }
    // 渲染长列表
    _renderItem({ item }) {
        return (
            <View style={[styles.box, styles.center]}>
                <View >
                    <Text style={[styles.text]}>{item.title}</Text>
                </View>
                <TouchableOpacity
                    style={{ alignSelf: 'flex-end', marginRight: 20 }}
                    onPress={() => { ToastAndroid.showWithGravity(item.answer, ToastAndroid.LONG, ToastAndroid.CENTER); }}
                    activeOpacity={0.7}
                >
                    <Text style={{ color: 'white' }}>谜底</Text>
                </TouchableOpacity>
            </View>

        )
    }
    // 添加key值
    _keyExtractor(item, index) {
        return index.toString()
    }
    // 显示更多
    _onEndReached() {
        let page = this.state.page
        page++;
        if (page > this.state.allPages){
            ToastAndroid.showWithGravity('没有更多数据了', ToastAndroid.SHORT, ToastAndroid.CENTER)
            return
        }
        this.setState({
            page
        })
        // alert(page)
        this.getData()
    }
    render() {
        return (
            <FlatList
                data={this.state.listInfo}
                renderItem={this._renderItem.bind(this)}
                keyExtractor={this._keyExtractor}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={0.2}
            >
            </FlatList>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fe530b',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 10,
        marginTop: 10
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
    }
})
export default Type