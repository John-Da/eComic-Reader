import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';

const NoteScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <Text>NoteScreen</Text>
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({})