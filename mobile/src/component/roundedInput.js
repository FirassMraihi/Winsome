import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { TextInputStyle } from './style'

const RoundedInput = ({onChangeText}) => {
    return (
        <TextInputStyle
        onChangeText={text => onChangeText(text)}
        placeholder={'Chercher salon,spa ou coiffeur'}
      />
    )
}

export default RoundedInput
