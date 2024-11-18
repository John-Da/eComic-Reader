import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const Welcome = () => {
  return (
    <Redirect href='/(home)/splash'/>
  )
}

export default Welcome

const styles = StyleSheet.create({})