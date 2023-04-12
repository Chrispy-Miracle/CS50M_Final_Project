export const randArrOfNine = () => {
    let randArr = []
    while (randArr.length < 9) {
        let randNum = Math.floor(Math.random() * 9) + 1
        if (randArr.indexOf(randNum) === -1) {
            randArr.push(randNum)
        }
    }
    
    return randArr
}