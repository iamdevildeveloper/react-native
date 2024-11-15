import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActionCards = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>ActionCards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer : {
        marginTop : 5,
        marginBottom : 5,
        paddingHorizontal : 8,
    },
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
    }
})

export default ActionCards;