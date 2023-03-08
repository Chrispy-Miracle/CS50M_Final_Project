import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const SelectPic = () => {
    // This should actually be done with redux in order to send info to store
    const [image, setImage] = useState(null) 

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {
            console.log(result)
            setImage(result.assets[0].uri)
        }
    }

    const navigation = useNavigation()

    const useImage = () => {
        
        console.log('useImage doesnt exist yet')
        navigation.navigate('Home', { image: image})
    }

    

    return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={pickImage}>
            <Text style={styles.btnText}>Click to Select an Image!</Text>
        </Pressable>
        {image && 
            <View>
                <Image source={{ uri: image }} style={styles.image} />
                <Pressable style={styles.button} onPress={useImage}>
                    <Text style={styles.btnText}>Use this Image</Text>
                </Pressable>
            </View>
        }
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#cccccc', 
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        padding: 10,
    },
    image: {
        width: 300,
        height: 300,
        margin: 30,
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 5
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