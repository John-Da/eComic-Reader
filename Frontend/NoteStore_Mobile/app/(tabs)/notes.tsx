import React from 'react';
import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { theme } from '@/constants/theme';
import { useHeaderHeight } from '@react-navigation/elements';
import { SearchBar } from '@/components/gloabal/SearchBar';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import books from '@/data/books.json';

const NoteScreen = () => {
  const headerHeight = useHeaderHeight();
  const colorScheme = useColorScheme(); 


  const RenderItems = ({item} : any) => {
    return (<>
    <View style={styles.item}>
      <View>
        <Image source={{uri : item.image}} />
      </View>
      <View>
        <View>
          <Text>{item.name}</Text>
          <Text>by {item.author}</Text>
        </View>
        <View>
          <Text>downloads</Text>
        </View>
      </View>
    </View>
    </>)
  }


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

      <SafeAreaView style={[styles.container]}>
          <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16} >
            <View style={styles.contents}>
              <Text>Enjoy you day</Text>
              <FlatList data={books} keyExtractor={(item) => item.id?.toString() || Math.random().toString()} 
              renderItem={({ item }) => <RenderItems item={item} />}
              showsVerticalScrollIndicator={false} />
            </View>
          </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    position: 'relative',
  },
  headerSearchBar: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 20 : 50, 
    backgroundColor: theme.colors.white, 
  },
  contents: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  item: {
    backgroundColor: theme.colors.error,
    marginVertical: 5,
  }
});
