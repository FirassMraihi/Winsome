import React from 'react'
import {  Text } from 'react-native'
import { RoundedButtonWrapper ,ButtonLabel} from './style'

const RoundedButton = ({label,onPress}) => {
    return (
        <RoundedButtonWrapper onPress={()=>onPress()}>
            <ButtonLabel>{label}</ButtonLabel>
        </RoundedButtonWrapper>
    )
}

export default RoundedButton
