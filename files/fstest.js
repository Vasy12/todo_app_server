var fs = require('fs');


const readF = filename=> {
    fs.readFile(
        filename,
        'utf8',
        (err, data) => {
            console.log(data);
            readF(data)
        }
    );
};

readF('filename1.txt');