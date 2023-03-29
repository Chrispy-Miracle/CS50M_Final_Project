// import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';


export const TakePhoto = () => {
    const navigation = useNavigation()
    const [image, setImage] = useState(null)
    const [imageHeight, setImageHeight] = useState(null)
    const [imageWidth, setImageWidth] = useState(null)    
    // const [type, setType] = useState(CameraType.back)
    // const [permission, requestPermission] = Camera.useCameraPermissions()

    const takePhotoAsync = async () => {
        let result = await ImagePicker.launchCameraAsync()
        
        if (!result.canceled) {
            // TODO create caviat for if height or width is larger
            setImageHeight(result.assets[0].width) 
            setImageWidth(result.assets[0].width)
            setImage(result.assets[0].uri)
        }
    }

    const manipAndUseImage = async () => {
        let imgArr = []
        const croppedImage = await manipulateAsync(
            image,
            [
                { crop: {
                    height: imageWidth,
                    width: imageWidth,
                    originX: 0,
                    originY: 0
                }}
            ],
        {compress: 1, format: SaveFormat.JPEG }
        )
        console.log("cropped", croppedImage)
        // divide into 9 images
        for (let i = 0; i <= 8; i++) {
            // Top row ? origin 0 else Botttom row ? 2/3 imageheight, otherwise middle ....
            const originY = i <= 2 ? 0 : i >= 6 ? (imageHeight / 3) * 2 : imageHeight / 3
            // Right column? 0 : mid column ? 1/3 image width : otherwise 3rd row
            const originX = i === 0 || i === 3 || i === 6 ? 0 : i === 1 || i === 4 || i === 7 ? imageWidth / 3 : (imageWidth / 3) * 2
            
            let manipResult = await manipulateAsync(
                croppedImage.uri,
                [   
                    { crop: {
                        height: imageHeight / 3 ,
                        width: imageWidth / 3,
                        originX: originX, 
                        originY: originY
                      }
                    }
                ],
                {compress: 1, format: SaveFormat.JPEG }
            )
            imgArr.push(manipResult.uri)
        }
        navigation.navigate('Home', { image: imgArr })
    }

    // const useImage = () => {
    //     // console.log(image)
    //     navigation.navigate('Home', { image: image})
    // }

     
    return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={takePhotoAsync}>
            <Text style={styles.btnText}>Take a Photo!</Text>
        </Pressable>
        {image &&
            <View>
                <Image source={{ uri: image }} style={styles.image} />
                <Pressable style={styles.button} onPress={manipAndUseImage}>
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