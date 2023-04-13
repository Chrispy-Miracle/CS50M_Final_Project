import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

export const manipAndUseImage = async (image, imageHeight, imageWidth) => {
    let imgArr = []
    const croppedImage = await manipulateAsync(
        image,
        [
            { crop: {
                height: imageHeight,
                width: imageHeight,
                originX: 0,
                originY: 0
            }}
        ],
    {compress: 1, format: SaveFormat.JPEG }
    )
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
    return imgArr
}