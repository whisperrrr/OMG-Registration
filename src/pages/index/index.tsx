import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component<any, any> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
