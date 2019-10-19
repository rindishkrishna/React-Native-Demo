import React, { Component } from 'react'

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeInfo: []
        }
        this.getData()
    }
    static navigationOptions = {
        title: '谜语类型',
        headerStyle: {
            backgroundColor: '#fe530b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 35
        },
    };
    // 获取谜语分类
    getData() {
        fetch(`http://route.showapi.com/151-3?showapi_appid=104278&showapi_sign=e0e71fe6d28e468fbbce185098e915bc`).then((response) => response.json()).then((responseJson) => {
            this.setState({
                typeInfo: responseJson.showapi_res_body.typeList
            })
        })
    }
    // 渲染长列表
    _renderItem({ item }) {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('List', { id: item.id, name: item.name })}
                activeOpacity={0.7}
            >
                <View style={[styles.box, styles.center]}>
                    <Text style={[styles.text]}>{item.name}</Text>
                </View>
            </TouchableOpacity>

        )
    }
    // 添加key值
    _keyExtractor(item, index) {
        return item.id
    }
    render() {
        return (
            <FlatList
                data={this.state.typeInfo}
                renderItem={this._renderItem.bind(this)}
                keyExtractor={this._keyExtractor}
            >
            </FlatList>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        height: 60,
        backgroundColor: '#fe530b',
        width: '70%',
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
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    }
})
export default List