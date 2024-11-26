import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router';
import books from '@/data/books.json';
import { Feather, Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import RatingStars from '@/components/gloabal/RatingStars';


const {width} = Dimensions.get('window');
const IMG_HEIGHT = 300;

const NoteDetail = () => {

  const { id } = useLocalSearchParams();

  const note = books.find((item) => item.id.toString() === id);

  const ratingFiveStars = ( note )

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
      <View style={styles.content}>
        <Text style={[styles.name, theme.typography.head2]}>{note.name}</Text>
        <Text style={[styles.author, theme.typography.body2]}>by {note.author}</Text>

        <View style={styles.highlights}>
          <View style={{flexDirection: 'row', gap: 8}}>
            <RatingStars rating={note.rating} size={14} color={theme.colors.primary} />
            <Text style={styles.ratingtxt}>{note.rating}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 3}}>
            <Text>Tags: </Text>
            {note.format.map((index, format) => (
              <Text key={index}>{format}</Text>
            ))}
          </View>

          <View>
            <Text>Posted: {note.publish_date}</Text>
          </View>
        </View>

        <View>
          <Text>Summary</Text>
          <Text>{note.description}</Text>
        </View>

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
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  name:{
    fontWeight: '600'
  },
  author: {

  },
  highlights: {

  },
  ratingtxt: {
    fontWeight: '400',
    fontSize: 14,
    color: theme.colors.black,
  }
})