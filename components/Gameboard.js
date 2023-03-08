import { View, Image, Text, StyleSheet } from 'react-native';

import { GameRow } from './GameRow';

export const Gameboard = () => {
    return (
        <View style={styles.container}>
            <GameRow />
            <GameRow />
            <GameRow />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 325,
        width: 325,
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 7,
        borderColor: 'teal',
        paddding: 5,
        marginTop: 25,
        columnGap: 2,
        justifyContent: 'space-around'
    },
})