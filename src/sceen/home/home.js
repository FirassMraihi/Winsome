import React from 'react'
import { View, Text } from 'react-native'
import Card from '../../component/card'

const Home = () => {
    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{marginTop:"10%",height:200,width:350}}>
            <Card />
            </View>
        </View>
    )
}

export default Home
