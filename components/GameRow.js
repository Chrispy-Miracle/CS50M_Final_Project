import { View, StyleSheet } from 'react-native';


import { GamePiece } from './GamePiece'



export const GameRow = (props) => {
   
    // let pieceNums = []
    // let usedNums = []

    // Math.floor((Math.random() * 8) + 1)
    switch (props.id) {
        case 'rowOne':
            pieceNums = props.orderOfTiles.slice(0, 3)
            break
        case 'rowTwo':
            pieceNums = props.orderOfTiles.slice(3, 6)
            break
        case 'rowThree':
            pieceNums = props.orderOfTiles.slice(6, 9)
            break                           
    }

    return (
        <View style={styles.gameRow}>
            {pieceNums.map((item, index) => (
                <GamePiece 
                    id={item}
                    key={props.id + index}
                    row={props.id}
                    index={index}
                    emptySquare={props.emptySquare}
                    orderOfTiles={props.orderOfTiles}
                    handleTilePress={props.handleTilePress}
                    image={props.image[item - 1]} // : props.image}
                />
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