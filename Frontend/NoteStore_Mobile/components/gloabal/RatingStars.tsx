import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const RatingStars = ({rating, size, color} : any) => {
    const maxStars = 5;
    const stars = [];

    for (let i = 0; i < maxStars; i++){
        if (rating >= i + 1){
            stars.push(
                <Ionicons key={i} name="star" size={size} color={color} />
            );
        } else if (rating >= i + 0.5){
            stars.push(
                <Ionicons key={i} name="star-half" size={size} color={color} />
            );
        } else {
            stars.push(
                <Ionicons key={i} name="star-outline" size={size} color={color} />
              );
        }
    }
  return (
    <View style={{flexDirection:'row', gap: 5, paddingVertical: 1}}>
        {stars}
    </View>
  )
}

export default RatingStars;