import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';

type Props = {
  title: string;
  books: BookType[];
};

const Listings = ({ title, books }: Props) => {
  const [isPending, setIsPending] = useState(false);

  const onSeeMoreHandler = () => {};

  const Item = ({ item }: any) => (
    <View style={styles.item}>
      <View style={styles.imgBox}>
        <Image
          source={{ uri: item.image || 'fallback-image-uri' }}
          style={styles.image}
        />
      </View>
      <View style={styles.nameBox}>
        <Text style={styles.itemTxt} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={18} color={theme.colors.primary} />
          <Text style={styles.itemRating}>{item.rating}</Text>
          <Text style={styles.itemReview}>({item.reviews})</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>{title}</Text>
        <Pressable onPress={onSeeMoreHandler}>
          <FontAwesome5 name="arrow-right" size={20} />
        </Pressable>
      </View>
      <FlatList
        data={books}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
    marginBottom: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: '800',
    color: theme.colors.black,
  },
  item: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginRight: 12,
    width: 150,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imgBox: {
    width: '100%',
    height: 160,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  nameBox: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.black,
    marginBottom: 8,
  },
  itemRating: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.black,
    marginLeft: 8,
  },
  itemReview: {
    fontSize: 12,
    color: '#999',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});
