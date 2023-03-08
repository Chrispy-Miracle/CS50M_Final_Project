import { StyleSheet, Text, View, Pressable } from 'react-native';

export const Home = ({navigation}) => {
    return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('TabNavigator')}>
            <Text style={styles.btnText}>To New Page</Text>
        </Pressable>
        <Text style={styles.text}>This is my App's Name!</Text>
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
        padding: 10,
    },
    button: {backgroundColor: '#e1f4d3', margin: 10, padding: 5, borderRadius: 10, alignItems: 'center'},
    btnText: {color: 'teal', fontSize: 20, textShadowColor: 'black', textShadowOffset: {width: 2, height: 2}}
  });