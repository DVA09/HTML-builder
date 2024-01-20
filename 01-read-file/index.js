const fs = require('fs');
const path = require('path');

const strm = fs.createReadStream(path.resolve(__dirname, 'text.txt'));

strm.on('data', (chunk) => {
   console.log(chunk.toString());
});

strm.on('error', (e) => {
   console.log(e);
});

strm.on('end', () => {
    strm.close();
 });