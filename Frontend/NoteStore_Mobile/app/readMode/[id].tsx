import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import books from '@/data/books.json';
import { theme } from '@/constants/theme';
import CustomStatusBar from '@/components/global/CustomStatusBar';

const ReadMode = () => {
    const {id} = useLocalSearchParams();

    const note = books.find((item) => item.id.toString() === id);

    if (!note) {
        return (
        <View style={styles.container}>
            <Text style={styles.errorText}>Note not found</Text>
        </View>
        );
    }
  return (<>
    <CustomStatusBar backgroundColor={theme.colors.white} barStyle='light-content' hidden={false} />
    <Stack.Screen options={{
        headerTitle: note.name,
        headerTransparent: true,
        headerRight: () => (
            <View style={styles.chapterNumBox}>
                <Text style={[styles.chTxt, theme.typography.body2]}>Ch</Text>
                <Text style={[styles.chTxt, theme.typography.body2]}>{note.pages}</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: '700',
            color: theme.colors.white,
            fontSize: 20,
        },
    }}
    />

    <View style={styles.container}>
      <Text>ReadMode</Text>
    </View>
  </>)
}

export default ReadMode

const styles = StyleSheet.create({
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
      },
    chapterNumBox:{
        flexDirection:'row', 
        alignItems:'center', 
        gap: 5,
        backgroundColor: theme.colors.gray[100],
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: theme.borderRadius.md,
    },
    chTxt:{
        fontWeight: '300',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})