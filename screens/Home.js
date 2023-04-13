import { StyleSheet, Text, View, Pressable } from 'react-native';

import { GameboardContainer } from '../components/GameboardContainer';

export const Home = ({ route, navigation}) => {
    const { image } = route.params 

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Choose a Picture')}>
                <Text style={styles.btnText}>Choose a Different Picture</Text>
            </Pressable>
            <Text>or</Text>
            <Text style={styles.text}>Reorganize the tiles!</Text>
            <GameboardContainer image={image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#cccccc', 
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
        color: 'teal'
    },
    button: {
        backgroundColor: '#e1f4d3', 
        margin: 10, 
        padding: 5, 
        borderRadius: 10, 
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderTopWidth: 1,
        borderLeftWidth: 1,        
        borderColor: 'teal',
        alignItems: 'center',
    },
    btnText: {color: 'teal', 
        fontSize: 20, 
        textShadowColor: 'black', 
        textShadowOffset: {width: 2, height: 2}
    }
  });