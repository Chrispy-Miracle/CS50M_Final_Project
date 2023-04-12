
import { View, ImageBackground, Text, StyleSheet, Pressable } from 'react-native';

export const GamePiece = (props) => {
    const img = props.image ? { uri: props.image } : require('../assets/pherkad.jpg')
    const handleBadPress = () => {
        alert('Please press a square adjacent to empty square to move tiles')
    }

    console.log(props.id, ": ", props.row, props.index)
    if (props.emptySquare === props.orderOfTiles.indexOf(props.id)) {
        return (
            <Pressable onPress={handleBadPress} >
                <View style={[styles.image, { backgroundColor: 'black'}]}></View>
            </Pressable>
        )
    } else {
        return (
            <Pressable onPress={() => props.handleTilePress(props.id)} >
                <ImageBackground style={styles.image} source={img}>
                    <Text>{props.id}</Text>
                </ImageBackground>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
})