import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      
      <Image source={require('./assets/me.jpg')} style={{width: 200, height: 190}}/>
      <Text style={{fontWeight:'bold',fontSize:24, color: 'white'}}> Maria Fernanda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#710193',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleText: {
    color: "White"
  },
});
