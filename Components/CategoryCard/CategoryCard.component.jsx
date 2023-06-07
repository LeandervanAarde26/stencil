import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './CategoryCard.styles'
import { TextStyles } from '../../Utils/Text'
import { Colors } from '../../Utils/Colors'


export default function CategoryCard({category, image}) {
    const randomColors = [
        Colors.White,
        Colors.secondary,
        Colors.tertiary,
    ]
    const randomPosition = Math.floor(Math.random() * randomColors.length)


  return (
    <View style={styles.cardContainer}>
        {/* <Text>{category}</Text> */}
        <Image source={{uri: image}} style={styles.image}/>
        <Text style={[TextStyles.headingFive, {width: '100%', textAlign: 'center', color: randomColors[randomPosition]}]}>{category}</Text>
    </View>
  )
}

