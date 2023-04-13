import { View, Image, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

import { GameRow } from './GameRow';
import { randArrOfNine } from '../utils/randArrOfNine';

export const Gameboard = (props) => {
    const initialEmptySquare = Math.floor((Math.random() * 8) + 1)
    const [emptySquare, setEmptySquare] = useState(initialEmptySquare)
    // TODO create random tile ordering... 
    const [orderOfTiles, setOrderOfTiles] = useState(randArrOfNine())

    const rows = ['rowOne', 'rowTwo', 'rowThree']

    const handleTilePress = (id) => {
        console.log("You pressed gamepiece", id)
        if (orderOfTiles.indexOf(id) + 1 === emptySquare || orderOfTiles.indexOf(id) - 1 === emptySquare || orderOfTiles.indexOf(id) + 3 === emptySquare || orderOfTiles.indexOf(id) - 3 === emptySquare) {
            
            console.log(`Tile (${orderOfTiles.indexOf(id)}) is adjacent to empty square (${emptySquare})!  id=${id}`)
            
            let tempOrderOfTiles = [...orderOfTiles]
            console.log("temp: ", tempOrderOfTiles)
            let tempEmptySquare = tempOrderOfTiles[orderOfTiles.indexOf(id)]
            console.log("pre(index of id): ", tempOrderOfTiles[orderOfTiles.indexOf(id)], orderOfTiles[emptySquare])
            tempOrderOfTiles[orderOfTiles.indexOf(id)] = orderOfTiles[emptySquare]
            console.log("post(index of id): ", tempOrderOfTiles[orderOfTiles.indexOf(id)])
            console.log("pre(index of empty): ", tempOrderOfTiles[emptySquare])
            tempOrderOfTiles[emptySquare] = tempEmptySquare
            console.log("final: ", tempOrderOfTiles)
            setEmptySquare(orderOfTiles.indexOf(id))
            setOrderOfTiles(tempOrderOfTiles)
            
        }
        else {
            alert(`Tile (${orderOfTiles.indexOf(id)}) not adjacent to empty square (${emptySquare})!  id=${id}`)
        }
    }

    return (
        <View style={styles.container}>
            {rows.map((item, key) => (
                <GameRow 
                    id={item}
                    key={item + key}
                    emptySquare={emptySquare}
                    handleTilePress={handleTilePress}
                    image={props.image}
                    orderOfTiles={orderOfTiles}/>
            ))}
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