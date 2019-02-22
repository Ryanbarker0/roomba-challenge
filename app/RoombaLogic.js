var coordinateProcessor = require('./coordinateProcessor')

module.exports = (roomDimensions, startCoords, directions, dirtCoords) => {

    let patchesCleaned = 0
    let roombaLocation = coordinateProcessor(startCoords)
    const xyDimensions = coordinateProcessor(roomDimensions)

    const directRoomba = (direction) => {
        const location = roombaLocation
        // switch statement to change the location of the roomba based on the direction given
        // checks to see if the coordinates will be outside room dimensions
        switch (direction) {
            case 'N':
                if (location['y'] < xyDimensions['y']) location['y']+=1
                roombaLocation = location
                break
            case 'E':
                if (location['x'] < xyDimensions['x']) location['x']+=1
                roombaLocation = location
                break
            case 'S':
                if (location['y'] > 0) location['y']-=1
                roombaLocation = location
                break
            case 'W':
                if (location['x'] > 0) location['x']-=1
                roombaLocation = location
                break
            default:
                console.log('Invalid input. Input must be a cardinal value ( N E S W ).')
        }
    }

    const checkForDirtPatch = () => {
        dirtCoords.forEach((dirtPatch, index) => {
            // converts location into matchable format
            const currentLocation = `${roombaLocation['x']} ${roombaLocation['y']}`
            // removes the dirt patch from the array and increments patches cleaned
            if (currentLocation === dirtPatch) {
                dirtCoords.splice(index)
                patchesCleaned++
            }
        })
    }

    // iterate over directions and move the roomba
    directions.forEach( direction => {
        directRoomba(direction)
        checkForDirtPatch()
    })

    console.log(`${roombaLocation['x']} ${roombaLocation['y']}`)
    console.log(patchesCleaned)
}