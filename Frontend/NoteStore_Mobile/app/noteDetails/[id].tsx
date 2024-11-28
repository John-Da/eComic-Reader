import { Dimensions, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import books from '@/data/books.json';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import RatingStars from '@/components/gloabal/RatingStars';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 356;

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

  return (
    <>
      <StatusBar barStyle="dark-content" showHideTransition="slide" hidden />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.headerButton}
            >
              <View style={styles.iconWrapper}>
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={styles.headerButton}
            >
              <View style={styles.iconWrapper}>
                <Feather name="bookmark" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <Image source={{ uri: note.image }} style={styles.image} />
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Text style={[styles.name, theme.typography.head2]}>{note.name}</Text>
              <Text style={[styles.author, theme.typography.body2]}>by {note.author}</Text>

              <View style={styles.highlights}>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{note.rating}</Text>
                  <RatingStars rating={note.rating} size={26} color={theme.colors.primary} />
                </View>
                <View style={styles.tagsContainer}>
                  <Text style={{ fontSize: 17, fontWeight: '400' }}>Tags: </Text>
                  {note.format.map((format, index) => (
                    <View key={index} style={styles.taglayout}>
                      <Text style={styles.tag}>{format}</Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.postedDate}>Posted: {note.publish_date}</Text>
              </View>

              <View style={styles.summaryContainer}>
                <Text style={[styles.summaryTitle, theme.typography.head3]}>Summary</Text>
                <Text style={theme.typography.body2}>{note.description}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>


      <View style={styles.bottomBtnBox}>
        <TouchableOpacity onPress={() => {}} style={[styles.button, styles.btnReadStart]}>
          <Text style={[styles.btnTxt, styles.readBtnTxt]}>Read Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1, 
    marginTop: IMG_HEIGHT - 18, 
    backgroundColor: theme.colors.gray[100],
    borderTopLeftRadius: theme.borderRadius.lg + 5,
    borderTopRightRadius: theme.borderRadius.lg + 5,
    ...Platform.select({
      ios: theme.shadows.lg,
      android: theme.shadows.lg
    })
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: 'transparent',
    borderTopLeftRadius: theme.borderRadius.lg + 5,
    borderTopRightRadius: theme.borderRadius.lg + 5,
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  name: {
    fontWeight: '700',
  },
  author: {
    color: theme.colors.gray[600],
  },
  highlights: {
    marginBottom: 20,
  },
  ratingContainer: {
    alignItems: 'center',
    justifyContent:'center',
    gap: 6,
    marginVertical: 20,
  },
  ratingText: {
    fontWeight: '800',
    fontSize: 34,
    color: theme.colors.secondary,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 10,
    alignItems: 'center'
  },
  taglayout: {
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.lg,
    paddingVertical: 4,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  tag: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center'
  },
  postedDate: {
    marginTop: 10,
    color: theme.colors.gray[600],
  },
  summaryContainer: {
    marginTop: 20,
  },
  summaryTitle: {
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 4,
    borderRadius: 10,
  },
  iconWrapper: {
    backgroundColor: theme.colors.white,
    padding: 6,
    borderRadius: 10,
  },
  bottomBtnBox:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    width: width,
  },
  button:{
    backgroundColor: theme.colors.black, 
    padding: 20,
    borderRadius: 10, 
    alignItems:"center"
  },
  btnReadStart:{
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  btnTxt:{
    textTransform:"uppercase", 
    fontSize:16, 
    fontWeight: '800',
  },
  readBtnTxt:{
    color: theme.colors.white,
  }
});
