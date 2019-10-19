import React, { Component } from 'react'

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

class Home extends Component {
    static navigationOptions = {
        title: '谜语大全',
        headerStyle: {
            backgroundColor: '#fe530b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 35
        },
    };
    render() {
        return (
            <View style={{
                // backgroundColor: '#fe530b',
                flex: 1
            }}>
                <View style={[styles.box1, styles.center]}>
                    <Image source={require('../../images/MYDQ.jpg')}></Image>
                </View>
                <TouchableOpacity style={[styles.box2, styles.center]}
                    activeOpacity={0.7}
                    onPress={() => this.props.navigation.navigate('Type')}
                >
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: '500' }}>点击进入</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    box1: {
        width: '100%',
        height: 350
    },
    box2: {
        width: '75%',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 10,
        height: 60,
        backgroundColor: '#fe530b'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Home