import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '@/constants/AppColors'

const Loading = ({ isVisible, loadingText = 'Loading...', color = AppColors.whiteColor } : any) => {
    if (!isVisible) return null;
  return (
    <View style={styles.loadingOverlay}>
        <ActivityIndicator size="large" color={AppColors.whiteColor} />
        <Text style={styles.loadingText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 20,
      },
      loadingText: {
        marginTop: 10,
        color: AppColors.whiteColor,
        fontSize: 16,
        fontWeight: 'bold',
      },
})