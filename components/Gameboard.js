import { View, Alert, Modal, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { GameRow } from './GameRow';
import { randArrOfNine } from '../utils/randArrOfNine';

export const Gameboard = (props) => {
    const initialEmptySquare = Math.floor((Math.random() * 8) + 1)
    const [emptySquare, setEmptySquare] = useState(initialEmptySquare)
    const [orderOfTiles, setOrderOfTiles] = useState(randArrOfNine())
    const [winner, setWinner] = useState(false)

    const navigation = useNavigation()
    
    const rows = ['rowOne', 'rowTwo', 'rowThree']    

    const handleTilePress = (id) => {
        if (orderOfTiles.indexOf(id) + 1 === emptySquare || orderOfTiles.indexOf(id) - 1 === emptySquare || orderOfTiles.indexOf(id) + 3 === emptySquare || orderOfTiles.indexOf(id) - 3 === emptySquare) {
            let tempOrderOfTiles = [...orderOfTiles]
            let tempEmptySquare = tempOrderOfTiles[orderOfTiles.indexOf(id)]
            tempOrderOfTiles[orderOfTiles.indexOf(id)] = orderOfTiles[emptySquare]
            tempOrderOfTiles[emptySquare] = tempEmptySquare
            setEmptySquare(orderOfTiles.indexOf(id))
            setOrderOfTiles(tempOrderOfTiles)
            let orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            if (JSON.stringify(tempOrderOfTiles) === JSON.stringify(orderedArray)) {
                setEmptySquare(null)
                setWinner(true)
            }
        }
        else {
            alert(`Tile (${orderOfTiles.indexOf(id)}) not adjacent to empty square (${emptySquare})!`)
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
            {/* {winner &&   */}
                <Modal
                    style={styles.modal}
                    animationType="slide"
                    visible={winner}
                    transparent={true}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        // setModalVisible(!modalVisible);
                    }}>
                        <View style={styles.modalCont}>
                            <Text style={styles.text}>You Won!!!</Text> 
                            <Button title="Go back" onPress={() => navigation.navigate('Start a Game')} /> 
                        </View> 
                </Modal>
                
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
    text: {
        color: 'white',
        fontSize: 50,
    },
    modalCont: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 300,
        backgroundColor: 'teal',
        top: 120,
        left: 35,
        padding: 15,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
    }
})