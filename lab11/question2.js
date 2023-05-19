let http = require("http");
let fs = require('fs');

const server = http.createServer((request, response) => {

    const filePath = './prob3.pdf';
    const pdfReader = fs.readFileSync(filePath);

    response.setHeader('Content-Type', 'application/pdf');

    response.write(pdfReader);
    response.end();
});

const port = 8000; // Specify the desired port number
server.listen(port, '127.0.0.1', () => {
    console.log(`Server running on port ${port}`);
});