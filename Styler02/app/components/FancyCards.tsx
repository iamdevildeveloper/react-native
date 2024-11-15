import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <ScrollView horizontal={true} style={styles.elevatedCardContainer}>
        <View style={styles.card}>
            <Image 
            style={styles.cardImage} 
            source={{ uri: 'https://i.pinimg.com/736x/c0/51/4a/c0514ad71f49a6f94b879b863184e621.jpg' }} 
            />
            <Text style={styles.cardTitle}>Goku</Text>
            <Text style={styles.cardDescription}>
                Goku, the protagonist of the Dragon Ball series created by Akira Toriyama, is one of the most iconic characters in anime history.
            </Text>
        </View>
        <View style={styles.card}>
            <Image 
            style={styles.cardImage} 
            source={{ uri: 'https://i.pinimg.com/originals/2a/d7/f3/2ad7f3553939ed187f8a6e95816ce2ea.jpg' }} 
            />
            <Text style={styles.cardTitle}>Vegeta</Text>
            <Text style={styles.cardDescription}>
            Vegeta is one of the central characters in the Dragon Ball series and is widely regarded as one of the most iconic and complex characters in anime.
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'flex-start',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 16,
        color: '#333',
    },
    elevatedCardContainer: {
        paddingHorizontal: 8,  
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 350,
        width: 250,
        borderRadius: 10,
        marginRight: 12,
        elevation: 6,
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowRadius: 8,
        backgroundColor: '#dddddd',
        overflow: 'hidden',
        marginTop: 0, 
        flexShrink: 0,
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        marginTop: 0,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
        marginHorizontal: 8,
        color: '#333', 
    },
    cardDescription : {
        fontSize: 14,
        marginTop: 5,  
        marginHorizontal: 8,
    }
});

export default FancyCards;