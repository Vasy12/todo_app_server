const fs = require('fs');


const readFile = fileName => {
    fs.readFile(
        fileName,
        'utf8',
        function (err, contents) {
            readFile(contents)
        }
    )
};

readFile('file1.txt');