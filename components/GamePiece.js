
import { View, Image, Text, StyleSheet } from 'react-native';

export const GamePiece = () => {
    return (
            <Image style={styles.image} source={require('../assets/icon.png')} />
    )
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        borderRadius: 2,
    },
})