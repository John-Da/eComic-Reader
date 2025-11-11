import React from "react";
import { Platform, StyleSheet, Text, View, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { theme } from "@/constants/theme";
import { useHeaderHeight } from "@react-navigation/elements";
import { SearchBar } from "@/components/global/SearchBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import books from "@/data/books.json";
import AllNotes from "@/components/Notes/allItems";
import CustomStatusBar from "@/components/global/CustomStatusBar";

const NoteScreen = () => {
  const headerHeight = useHeaderHeight();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={theme.colors.white} barStyle='dark-content' hidden={false} />
      <Stack.Screen
        options={{
          header: () => (
            <View style={styles.headerSearchBar}>
              <SearchBar value="" onChangeText={() => {}} onSearch={() => {}} />
            </View>
          ),
          headerTitle: "",
          headerTransparent: true,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      />

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
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 20 : 50,
    borderBottomColor: theme.colors.gray[100],
    backgroundColor: theme.colors.white,
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    position: "relative",
    paddingHorizontal: 15,
    marginTop: 44,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 1,
    marginVertical: 10,
  },
});
