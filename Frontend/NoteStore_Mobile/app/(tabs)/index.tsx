import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
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
      <StatusBar 
        style={Platform.OS === 'ios' ? 'light' : 'auto'} 
        backgroundColor="transparent" 
        translucent 
      />

      <View style={styles.container}>
        <View style={[styles.shape, { paddingTop: headerHeight + insets.top }]} />
        
        
          <View style={[styles.contents, { paddingTop: headerHeight + insets.top }]}>
            <Header />
            <ScrollView 
              showsVerticalScrollIndicator={false} 
              contentContainerStyle={styles.scrollContents}
            >
              <Text style={styles.headerTxt}>Find, Share, And Succeed Together...</Text>

              <SearchBar value='' onChangeText={() => {}} onSearch={() => {}} />

              <View style={{ flexDirection: 'column', marginVertical: 5 }}>
                {sections.map((section, index) => (
                  <Listings title={section.title} key={index} books={section.books} />
                ))}
              </View>

              <ExploreMore />
              
            </ScrollView>
          </View>
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
  scrollContents: {
    flexGrow: 1,
  },
  contents: {
    paddingHorizontal: 14,
    position:'absolute',
    height: '100%',
    zIndex: 5,
    width:'100%',
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: '800',
    color: theme.colors.white,
    marginVertical: 20,
  },
});

export default Home;