import { Image, View, Pressable, Text, StyleSheet } from 'react-native'

import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

export const StartGame = ({ navigation }) => {
    const bandImgSource = Image.resolveAssetSource(require('../assets/pherkad.jpg'))  // has uri,height and width
    
    const manipAndUseImage = async () => {
        let imgArr = []
        const croppedImage = await manipulateAsync(
            bandImgSource.uri,
            [
                { crop: {
                    height: bandImgSource.height,
                    width: bandImgSource.height,
                    originX: 280,
                    originY: 0
                }}
            ],
        {compress: 1, format: SaveFormat.JPEG }
        )
        // divide into 9 images
        for (let i = 0; i <= 8; i++) {
            // Top row ? origin 0 else Botttom row ? 2/3 imageheight, otherwise middle ....
            const originY = i <= 2 ? 0 : i >= 6 ? (bandImgSource.height / 3) * 2 : bandImgSource.height / 3
            // Right column? 0 : mid column ? 1/3 image width : otherwise 3rd row
            const originX = i === 0 || i === 3 || i === 6 ? 0 : i === 1 || i === 4 || i === 7 ? bandImgSource.height / 3 : (bandImgSource.height / 3) * 2
            
            let manipResult = await manipulateAsync(
                croppedImage.uri,
                [   
                    { crop: {
                        height: bandImgSource.height / 3 ,
                        width: croppedImage.height / 3,
                        originX: originX, 
                        originY: originY
                      }
                    }
                ],
                {compress: 1, format: SaveFormat.JPEG }
            )
            imgArr.push(manipResult.uri)
        }
        navigation.navigate('Home', {image: imgArr})
    }
       

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={manipAndUseImage}>
                <Text style={styles.btnText}>Start a Game!</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc'
    },
    button: {
        backgroundColor: '#e1f4d3', 
        margin: 10, 
        padding: 20, 
        borderRadius: 10, 
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderTopWidth: 1,
        borderLeftWidth: 1,        
        borderColor: 'teal',
        alignItems: 'center',
    },
    btnText: {color: 'teal', 
        fontSize: 40, 
        textShadowColor: 'black', 
        textShadowOffset: {width: 2, height: 2}
    }
})