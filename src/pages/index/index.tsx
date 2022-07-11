import {Text, View} from '@tarojs/components'
import './index.css'

definePageConfig({
  navigationBarTitleText: '首页'
})

function Index() {
  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}

export default Index
