import { View, StyleSheet } from 'react-native';


import { GamePiece } from './GamePiece'



export const GameRow = (props) => {
   
    let pieceNums = []
    switch (props.id) {
        case 'rowOne':
            pieceNums = [1, 2, 3]
            break
        case 'rowTwo':
            pieceNums = [4, 5, 6]
            break
        case 'rowThree':
            pieceNums = [7, 8, 9] 
            break                           
    }

    return (
        <View style={styles.gameRow}>
            {pieceNums.map((item, key) => (
                <GamePiece id={item} key={key} emptySquare={props.emptySquare} handleTilePress={props.handleTilePress} image={props.image.length === 9 ? props.image[item - 1] : props.image} />
            ))}
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