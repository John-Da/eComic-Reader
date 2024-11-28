import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const FavScreen = () => {
  return (<>
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} backgroundColor="transparent" translucent />
    <View>
      <Text>FavScreen</Text>
    </View>
  </>);
};

export default FavScreen;

const styles = StyleSheet.create({});