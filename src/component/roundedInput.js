import React from 'react'
import { WHITE } from '../assets/colors'
import { TextInputStyle } from './style'

const RoundedInput = ({width,height,onChangeText,placeholder='Chercher salon,spa ou coiffeur',color=WHITE}) => {
    return (
        <TextInputStyle
        width={width}
        height={height}
        color={color}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
      />
    )
}

export default RoundedInput
