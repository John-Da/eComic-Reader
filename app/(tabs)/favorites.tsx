import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/constants/theme';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const FavScreen = () => {
  return (<>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <View
              style={{
                marginLeft: 20,
                marginBottom: 10,
                height: "100%",
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
                Favorites
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
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} backgroundColor="transparent" translucent />
    <View>
      <Text>FavScreen</Text>
    </View>
  </>);
};

export default FavScreen;

const styles = StyleSheet.create({});