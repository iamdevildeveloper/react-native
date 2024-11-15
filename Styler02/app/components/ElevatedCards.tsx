import { ScrollView, StyleSheet, Text, View } from "react-native"

const ElevatedCards = () => {
    return(
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.elevatedCardContainer}>
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
                <View style={[styles.card, styles.blue]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.blue]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.blue]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.blue]}>
                    <Text>Blue</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    elevatedCardContainer : {

    },
    card : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        height: 100,
        width: 100,
        borderRadius : 4,
        margin : 8,
        elevation : 4,
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : 'red'
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

export default ElevatedCards;