import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import books from '@/data/books.json';

const NoteDetail = () => {

  const { id } = useLocalSearchParams();

  const note = books.find((item) => item.id.toString() === id);

  if (!note) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Note not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{note.name}</Text>
    </View>
  )
}

export default NoteDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
    errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    },
})