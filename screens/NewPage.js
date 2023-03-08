import { StyleSheet, Text, View } from 'react-native';

export const NewPage = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>This is my App's New Page</Text>
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
    }
  });