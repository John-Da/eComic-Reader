import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useRef } from "react";
import { theme } from "@/constants/theme";
import { SearchBar } from "@/components/global/SearchBar";
import Listings from "@/components/Home/Listings";
import books from "@/data/books.json";
import ExploreMore from "@/components/Home/ExploreMore";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const sections = [
    { title: "Recommended for you", books: books },
    { title: "Most Viewed", books: books },
    { title: "Most Downloaded", books: books },
  ];

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: any) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    Animated.timing(scrollY, {
      toValue: currentOffset,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [theme.colors.primary, theme.colors.background.primary],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaProvider>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                marginLeft: 20,
                marginBottom: 10,
                height: "100%",
                alignItems: "center",
                paddingRight: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "900",
                  color: theme.colors.white,
                }}
              >
                Novle
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "900",
                  color: theme.colors.white,
                }}
              >
                Reader
              </Text>
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
              <Ionicons
                name="notifications"
                size={24}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />

      <StatusBar
        style={Platform.OS === "ios" ? "light" : "auto"}
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.shape,
            {
              backgroundColor: backgroundColor,
            },
          ]}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.contents}>
            <Text style={styles.headerTxt}>
              Let's Read,{"\n"}Books of The Day ...
            </Text>
            <SearchBar value="" onChangeText={() => {}} onSearch={() => {}} />

            <View style={{ flexDirection: "column", marginVertical: 5 }}>
              {sections.map((section, index) => (
                <Listings
                  title={section.title}
                  key={index}
                  books={section.books}
                />
              ))}
            </View>

            <ExploreMore />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    position: "relative",
  },
  shape: {
    height: 164,
    width: "100%",
    position: "absolute",
    borderBottomRightRadius: 130,
  },
  contents: {
    paddingHorizontal: 20,
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: "800",
    color: theme.colors.white,
    marginVertical: 16,
  },
});

export default Home;
