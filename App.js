import React, { Component } from 'react'

// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

// 引入页面组件
import Home from './components/home/index'
import Type from './components/type/index'
import List from './components/list/index'

import { createStackNavigator, createAppContainer } from "react-navigation"

const AppNavigator = createStackNavigator(
  // 路由对象
  {
    Home: {
      screen: Home
    },
    Type: {
      screen: Type
    },
    List: {
      screen: List
    }
  },
  // 配置
  {
    // 初始路由
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)