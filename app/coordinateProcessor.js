module.exports = (coordinates) => {


        assignedCoordinates = {}
        // split the coordinates into individual values
        const elements = coordinates.split(' ')
        // assigns the coordinates to x or y based on their index
        elements.forEach((value, index) => {
            if (index === 0) {
                assignedCoordinates['x'] = value
            } else {
                assignedCoordinates['y'] = value
            }
        })
        return assignedCoordinates

}