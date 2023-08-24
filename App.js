import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text,setText]= useState('')
  const onPressLearnMore =()=>{
    alert('hkjh')
  }
  const changeText =(e)=>{
    console.log(e)
    setText(e)
  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput onChange={(e)=>changeText(e.target.valueOf)}/>
      <StatusBar style="auto" />
      <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
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
