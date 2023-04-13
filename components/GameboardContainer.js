import { View, Text, StyleSheet } from 'react-native';

import { Gameboard } from './Gameboard';

export const GameboardContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Click a tile adjacent to the empty space</Text>
            <Text style={styles.text}> to scoot it into the empty space.</Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>(and help get the band back together!)</Text>
            <Gameboard image={props.image} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: .9,
        width: '95%',
        alignItems: 'center',
        backgroundColor: '#e1f4d3',
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 16
    }
})