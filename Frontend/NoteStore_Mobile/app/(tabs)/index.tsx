import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/constants/theme';
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@/components/Home/Header';
import { SearchBar } from '@/components/gloabal/SearchBar';
import Listings from '@/components/Home/Listings';
import books from '@/data/books.json';
import ExploreMore from '@/components/Home/ExploreMore';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {

  const sections = [
    { title: 'Recommended for you', books: books },
    { title: 'Most Viewed', books: books },
    { title: 'Most Downloaded', books: books },
  ];

  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const onSeeMore = () => {};

  return (
    <>
      <Stack.Screen 
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 10, height: '100%', alignItems: 'center', paddingRight: 5, }} >
            <Text style={{fontSize:26, fontWeight:'900', color:theme.colors.white}}>Note</Text>
            <Text style={{fontSize:26, fontWeight:'900', color:theme.colors.white}}>Store</Text>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginRight: 20,
              backgroundColor: theme.colors.white,
              padding: 5,
              borderRadius: theme.borderRadius.full,
              ...Platform.select({
                ios: theme.shadows.md,
                android: theme.shadows.md,
              }),
              marginBottom: 10,
            }}
          >
            <Ionicons name="notifications" size={24} color={theme.colors.black} />
          </TouchableOpacity>
        ),
      }}/>
      <StatusBar 
        style={Platform.OS === 'ios' ? 'light' : 'auto'} 
        backgroundColor="transparent" 
        translucent 
      />

      <View style={[styles.container, {paddingTop:headerHeight}]}>
        <View style={[styles.shape, { paddingTop: headerHeight + insets.top }]} />
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.contents}>

            <Text style={styles.headerTxt}>Find, Share, And Succeed Together...</Text>
            <SearchBar value='' onChangeText={() => {}} onSearch={() => {}} />
            
            <View style={{ flexDirection: 'column', marginVertical: 5 }}>
              {sections.map((section, index) => (
                <Listings title={section.title} key={index} books={section.books} />
              ))}
            </View>

            <ExploreMore />
        
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    position: 'relative',
  },
  shape: {
    backgroundColor: theme.colors.primary,
    height: 264,
    width: '100%',
    position: 'absolute',
    borderBottomRightRadius: 130,
  },
  contents: {
    paddingHorizontal: 20,
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: '800',
    color: theme.colors.white,
    marginVertical: 16,
  },
});

export default Home;