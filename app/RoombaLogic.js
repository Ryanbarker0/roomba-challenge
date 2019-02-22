var coordinateProcessor = require('./coordinateProcessor')

module.exports = (roomDimensions, startCoords, directions, dirtCoords) => {

    let patchesCleaned = 0
    let roombaLocation = coordinateProcessor(startCoords)

    const directRoomba = (direction) => {
        const location = roombaLocation
        // switch statement to change the location of the roomba based on the direction given
        switch (direction) {
            case 'N':
                location['y']+=1
                roombaLocation = location
                break
            case 'E':
                location['x']+=1
                roombaLocation = location
                break
            case 'S':
                location['y']-=1
                roombaLocation = location
                break
            case 'W':
                location['x']-=1
                roombaLocation = location
                break
            default:
                console.log('default output')
        }
    }
    directRoomba('E')

    console.log(roombaLocation)
}