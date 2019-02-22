var coordinateProcessor = require('./coordinateProcessor')

module.exports = (roomDimensions, startCoords, directions, dirtCoords) => {

    let patchesCleaned = 0
    let roombaLocation = startCoords

    const directRoomba = (direction) => {
        const location = coordinateProcessor(roombaLocation)
        
    }
    directRoomba('N')
}