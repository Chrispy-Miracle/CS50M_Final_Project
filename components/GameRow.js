import { View, StyleSheet } from 'react-native';

import { GamePiece } from './GamePiece'

export const GameRow = () => {
    return (
        <View style={styles.gameRow}>
            <GamePiece />
            <GamePiece />
            <GamePiece />
        </View>
    )
}
const styles = StyleSheet.create({
    gameRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'space-between',
        rowGap: 2,
    }
})