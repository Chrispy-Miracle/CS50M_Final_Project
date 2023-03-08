import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const IconHeader = ({iconName, text, color}) => {
    return (
        <View style={styles.container}>
            <Ionicons style={[styles.icon, {color: color}]} name={iconName} size={30} />
            <Text style={[styles.text, {color: color}]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'},
    // icon: {paddingLeft: 20},
    text: {fontSize: 25, paddingLeft: 10},
})