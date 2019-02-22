var fs = require('fs')
var roombaLogic = require('./roombaLogic')

const runApplication = () => {

    fs.readFile('app/input.txt', 'utf8', function (err, data) {
        if (err) {
            console.log('Invalid input - the file is unreadable.') 
        }
    
        // get an array of coordinates and directions
        // we split with \n as that is what is serparating them in the input.txt
        const inputArray = data.split('\n')
        // the room dimensions are always the first input
        const roomDimensions = inputArray[0]
        // the starting coordinates are always the 2nd input
        const startCoords = inputArray[1]
        // the roomba directions are always the final input
        // we split them into individual directions
        const directions = [...inputArray].pop().split('')
        // here we copy the original array
        // then we remove the first 2 and last input from the array to leave the coordinates for the dirt patches only
        const inputCopy = [...inputArray]
        inputCopy.splice(0, 2)
        inputCopy.splice(-1, 1)
        // only the dirt coordinates remain
        const dirtCoords = inputCopy

        console.log({roomDimensions, startCoords, directions, dirtCoords})

        roombaLogic(roomDimensions, startCoords, directions, dirtCoords)

    })
}

runApplication()
