import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarStyle:{
        borderTopWidth: 0,
        padding: 0,
        paddingTop: 20,
        backgroundColor: theme.colors.white,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.gray[100],
    }}>

    <Tabs.Screen name='index' 
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={{
              backgroundColor: focused ? theme.colors.primary : 'transparent',
              paddingHorizontal: 16, paddingVertical: 12, borderRadius: 10, height: 50,
            }}>
              <Ionicons name='compass' size={28} color={focused ? theme.colors.white : theme.colors.gray[500]} />
            </View>
          )
        }}
      />
      <Tabs.Screen name='notes' 
      options={{tabBarIcon:({color, focused}) => (
          <View style={{
              backgroundColor: focused ? theme.colors.primary : 'transparent',
              paddingHorizontal: 16, paddingVertical: 12, borderRadius: 10, height: 50,
            }}>
              <Ionicons name='book' size={28} color={focused ? theme.colors.white : theme.colors.gray[500]}/>
          </View>
      )}} />
      <Tabs.Screen name='favorites' 
      options={{tabBarIcon:({color, focused}) => (
        <View style={{
              backgroundColor: focused ? theme.colors.primary : 'transparent',
              paddingHorizontal: 16, paddingVertical: 12, borderRadius: 10, height: 50,
            }}>
          <Ionicons name='heart' size={28} color={focused ? theme.colors.white : theme.colors.gray[500]}/>
        </View>
      )}} />
      <Tabs.Screen name='profile' 
      options={{tabBarIcon:({color, focused}) => (
        <View style={{
              backgroundColor: focused ? theme.colors.primary : 'transparent',
              paddingHorizontal: 16, paddingVertical: 12, borderRadius: 10, height: 50,
            }}>
          <Ionicons name='person' size={28} color={focused ? theme.colors.white : theme.colors.gray[500]}/>
        </View>
      )}} />
  </Tabs>
  );
}
