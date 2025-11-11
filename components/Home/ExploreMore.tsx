import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '@/constants/theme'

const ExploreMore = () => {
  const exploreBtn = [
    {
        "name": "All",
        "icon": "bookshelf"
    },
    {
        "name": "Top Rating",
        "icon": "medal"
    },
    {
        "name": "New Release",
        "icon": "book-clock"
    }
  ]

  const handleExploreBtn = (index : number) => {};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>ExploreMore</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.btnBox}>
        {exploreBtn.map((btn, index) => (
          <TouchableOpacity key={index} style={styles.btnStyle} onPress={() => handleExploreBtn(index)}>
            <MaterialCommunityIcons name={btn.icon as any} size={20} color={theme.colors.primary} />
            <Text style={styles.btnTxt}>{btn.name}</Text>
        </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default ExploreMore

const styles = StyleSheet.create({
  container:{
    width: '100%',
    marginVertical: 10,
    paddingVertical: 5,
  },
  title:{
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
    color: theme.colors.primary,
  },
  btnBox:{
    gap: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  btnStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: theme.borderRadius.sm,
    ...Platform.select({
      ios: theme.shadows.md,
      android: theme.shadows.md,
    }),
    minWidth: 90,
    gap: 10,
  },
  btnTxt:{
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.black,
  }
})