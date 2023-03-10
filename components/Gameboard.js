import { View, Image, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { GameRow } from './GameRow';

export const Gameboard = (props) => {
    const initialEmptySquare = Math.floor((Math.random() * 8) + 1)
    const [emptySquare, setEmptySquare] = useState(initialEmptySquare)
    // TODO create random tile ordering... 

    const rows = ['rowOne', 'rowTwo', 'rowThree']

    const handleTilePress = (id) => {
        console.log("You pressed gamepiece", id)
        if (id + 1 === emptySquare || id - 1 === emptySquare || id + 3 === emptySquare || id - 3 === emptySquare) {
            console.log(`square ${id} is adjacent to empty square`)
            setEmptySquare(id)
        }
        else {
            alert("Tile not adjacent to empty square!")
        }
    }

    return (
        <View style={styles.container}>
            {rows.map((item, key) => (
                <GameRow id={item} key={item + key} emptySquare={emptySquare} handleTilePress={handleTilePress} image={props.image} />
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