import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/constants/theme'

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={styles.headerLeft}>
            <Text style={styles.headerTxtOne}>eBook</Text>
            <Text style={styles.headerTxtTwo}>Reader</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name='notifications' size={22} color={theme.colors.primary} />
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingBottom: 10,
    },
    headerTxtOne: {
        color: theme.colors.white,
        fontSize: 24,
        fontWeight:  'bold',
    },
    headerTxtTwo: {
        color: theme.colors.warning,
        fontSize: 24,
        fontWeight:  'bold',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationButton: {
        backgroundColor: theme.colors.white,
        padding: 7,
        borderRadius: 6,
        ...Platform.select({
            ios: theme.shadows.md,
            android: theme.shadows.md,
            }),
    },
})