var fs = require('fs')

const runApplication = () => {

    fs.readFile('app/input.txt', 'ascii', function (err, data) {
        if (err) {
            console.log('File cannot be read.') 
        }
    
    // we split with \n as that is what is serparating them in the input.txt
    const inputArray = data.split('\n')
    // here, we remove any blank lines from the input
    inputArray.forEach( (element, index) => { 
        if (element === '') {
            inputArray.splice(index, 1)
        }
        })

    console.log(inputArray)
    })
}

runApplication()
