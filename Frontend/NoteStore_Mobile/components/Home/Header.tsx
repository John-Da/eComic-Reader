import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppColors from '@/constants/AppColors'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={styles.headerTxt}>
            <Text style={styles.headerTxtOne}>Note</Text>
            <Text style={styles.headerTxtTwo}>Store</Text>
        </View>
        <TouchableOpacity style={styles.notiBtn}>
            <Ionicons name='notifications' size={20} color={AppColors.blackColor} />
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 2,
    },
    headerTxt: {
        flexDirection: 'row',
    },
    headerTxtOne: {
        color: AppColors.whiteColor,
        fontSize: 22,
        fontWeight:  'bold',
    },
    headerTxtTwo: {
        color: AppColors.secondaryColor,
        fontSize: 22,
        fontWeight:  'bold',
    },
    notiBtn: {
        padding:5,
        borderRadius:10,
        shadowColor:'#171717',
        shadowOffset:{width:2, height:4},
        shadowOpacity:0.2,
        shadowRadius:3,
        backgroundColor:AppColors.whiteColor,
    },
    hero: {
        width: '50%',
        flexDirection: 'row',
        height: 56,
    }
})