import { Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown } from 'react-native-reanimated';


const Splash = () => {
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
    
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} backgroundColor="transparent" translucent />
      
      <View style={[styles.imgContainer, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }]}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.pinimg.com/736x/18/db/e1/18dbe1269281a46f9064eb5efae42dbc.jpg',
          }}
        />
        <View style={styles.overlayImg} />
      </View>
      <Animated.View entering={FadeInDown.duration(400).delay(200).springify()} style={[styles.contentBox, { top: SCREEN_HEIGHT * 0.35 }]}>
        <View style={styles.txtContainer}>
          <Text style={styles.brandTxt}>eBook Reader</Text>
          <Text style={styles.sloganTxt}>Your Library, Anytime, Anywhere</Text>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(700).delay(400).springify()} style={styles.getStartBtnContainer}>
        <Pressable
          style={styles.getStartBtn}
          onPress={() => router.push('/(tabs)')}
          accessibilityLabel="Get Started"
          accessibilityRole="button"
        >
          <Text style={styles.btnTxt}>Get Started</Text>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: theme.colors.white,
      },
    imgContainer: {
        ...StyleSheet.absoluteFillObject,
      },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
    overlayImg: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
    contentBox: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        padding: 10,
        width: '90%',
        alignSelf: 'center',
      },
      txtContainer: {
        textAlign: 'left',
        marginTop: 40,
      },
    sloganTxt: {
        fontSize: 12,
        color: theme.colors.white,
        fontWeight: '300',
      },
    brandTxt: {
        fontSize: 52,
        fontWeight: 'bold',
        color: theme.colors.white,
      },
    getStartBtnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 80,
        alignItems: 'center',
      },
    getStartBtn: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
      },
    btnTxt: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
      },
})