import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router';
import books from '@/data/books.json';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/constants/theme';


const {width} = Dimensions.get('window');
const IMG_HEIGHT = 300;

const NoteDetail = () => {

  const { id } = useLocalSearchParams();

  const note = books.find((item) => item.id.toString() === id);

  if (!note) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Note not found</Text>
      </View>
    );
  }

  return (<>
  <StatusBar barStyle={'dark-content'} showHideTransition={'slide'} hidden />
  <Stack.Screen options={{
    headerTransparent: true,
    headerTitle: '',
    headerLeft: () => (
      <TouchableOpacity onPress={() => router.back()} style={{backgroundColor: "rgba(255, 255, 255, 0.5)", padding:4, borderRadius:10}}>
        <View style={{backgroundColor: theme.colors.white, padding:6, borderRadius:10}}>
          <Feather name='arrow-left' size={20} />
        </View>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => {}} style={{backgroundColor: "rgba(255, 255, 255, 0.5)", padding:4, borderRadius:10}}>
        <View style={{backgroundColor: theme.colors.white, padding:6, borderRadius:10}}>
          <Feather name='bookmark' size={20} />
        </View>
      </TouchableOpacity>
    ),
  }}/>
  
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={{ uri : note.image }} style={styles.image} />
      <View>
        
      </View>
    </ScrollView>
  </View>


  </>)
}

export default NoteDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
  fontSize: 18,
  color: 'red',
  textAlign: 'center',
  },
  image: {
    width: width,
    height: IMG_HEIGHT
  },
})