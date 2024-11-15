import { View, Text, StyleSheet } from "react-native"

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards </Text>
            <View style={styles.flatCardsContainer}>
                <View style={[styles.card, styles.red]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.green]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.blue]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.blue]}>
                    <Text>Blue</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    flatCardsContainer: {
        flex : 1,
        flexDirection: 'row',  
        justifyContent: 'center',  
        alignItems: 'center',  
    },
    card : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        height: 100,
        width: 100,
        borderRadius : 4,
        margin : 8,
    },
    red : {
        backgroundColor : '#EF5354',
    },
    green : {
        backgroundColor : '#66D474',
    },
    blue : {
        backgroundColor : '#5A94E6',
    }
});
export default FlatCards;