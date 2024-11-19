import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme } from '@/constants/theme'

type Props = {
    title: string,
    books: BookType[],
}

const Listings = ({title, books} : Props) => {

    const [isPending, setIsPending] = useState(false);

    const onSeeMoreHandler = () => {};

    const Item = ({ item } : any) => {
        return (
            <View style={styles.item}>
                <Text numberOfLines={2} >{item.name}</Text>
            </View>
        )
    };


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTxt}>{title}</Text>
            <Pressable onPress={onSeeMoreHandler}>
                <FontAwesome5 name="arrow-right" size={20} />
            </Pressable>
        </View>
        <View style={styles.listBox}>
            <FlatList 
            data={books}
            renderItem={({item}) => <Item item={item} /> }
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </View>
    </View>
  )
}

export default Listings

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        width:'100%',
        marginVertical: 5,
    },
    header:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 10,
    },
    headerTxt:{
        fontSize: 20,
        fontWeight: '800',
        color: theme.colors.black,
    },
    listBox: {
        flex:1,
    },
    item:{
        marginHorizontal: 5,
    }
})