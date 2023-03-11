// import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const TakePhoto = () => {
    const [image, setImage] = useState(null)
    // const [type, setType] = useState(CameraType.back)
    // const [permission, requestPermission] = Camera.useCameraPermissions()

    const takePhotoAsync = async () => {
        let result = await ImagePicker.launchCameraAsync()
        
        console.log(result)
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    const navigation = useNavigation()

    const useImage = () => {
        console.log(image)
        navigation.navigate('Home', { image: image})
    }

    return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={takePhotoAsync}>
            <Text style={styles.btnText}>Take a Photo!</Text>
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
    },
    image: {
        width: 300,
        height: 300,
        margin: 30,
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 5
    },
  });