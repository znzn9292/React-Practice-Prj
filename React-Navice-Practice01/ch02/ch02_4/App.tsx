// 초기 모습
/* import React from 'react'
import {SafeAreaView} from 'react-native'

export default function App() {
  return <SafeAreaView />
} */
// Button 추가

import React from 'react'
import { SafeAreaView, Alert, Button, TouchableOpacity, Text, TouchableHighlight } from 'react-native'
export default function App() {
  const onPress = () => Alert.alert('home press', 'home');
  return (
    <SafeAreaView>
      <Button title='Home' onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

// 터처블 컴포넌트 추가

/* import React from 'react'
import { SafeAreaView, Alert, Button } from 'react-native'
import { TouchableOpacity, TouchableHighlight, Text } from 'react-native'

const onPress = () => Alert.alert('home pressed.', 'message')

export default function App() {
  return (
    <SafeAreaView>
      <Button title="home" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
} */

// Text와 TextInput 추가

/* import React from 'react'
import { SafeAreaView, Alert, Button } from 'react-native'
import { TouchableOpacity, TouchableHighlight, Text } from 'react-native'
import { TextInput } from 'react-native'

const onPress = () => Alert.alert('home pressed.', 'message')

export default function App() {
  return (
    <SafeAreaView>
      <Button title="home" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacityasdasdasdasdasds</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  )
} */

