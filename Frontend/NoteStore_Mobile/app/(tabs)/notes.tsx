import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { theme } from '@/constants/theme';
import { useHeaderHeight } from '@react-navigation/elements';
import { SearchBar } from '@/components/gloabal/SearchBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import books from '@/data/books.json';
import AllNotes from '@/components/Notes/allItems';

const NoteScreen = () => {
  const headerHeight = useHeaderHeight();
  const colorScheme = useColorScheme(); 

  return (
    <SafeAreaProvider>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          header: () => (
            <View style={styles.headerSearchBar}>
              <SearchBar value="" onChangeText={() => {}} onSearch={() => {}} />
            </View>
          ),
          headerTitle: '',
          statusBarStyle: 'light',
          statusBarColor: theme.colors.black,
        }}
      />

      <StatusBar barStyle={'dark-content'} />

        <View style={styles.container}>
          <Text style={styles.contentTitle}>Enjoy you day</Text>
          <AllNotes books={books} />
        </View>
    </SafeAreaProvider>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  headerSearchBar: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 20 : 50, 
    backgroundColor: theme.colors.white, 
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    position: 'relative',
    paddingHorizontal: 15,
  },
  contentTitle:{
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 10,
  },

});
