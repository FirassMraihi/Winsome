import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profil from './src/sceen/profil';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
       translucent = {true}  
      />
      <Profil/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
