const http = require('http');
const { readFile } = require('fs').promises;
const path = require('path');

const port = 8081

const server = http.createServer(async (req, res) => {
    if(req.url.startsWith("/images/")) {
        const imageFilePath = './assets' + req.url;
        const imageFileContents = await readFile(imageFilePath);

        const fileExtension = path.extname(req.url)

        const imageType = 'image/' + fileExtension.substring(1)

        res.statusCode = 200;
        res.setHeader('Content-Type', imageType);
        res.end(imageFileContents)
        return;

    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('I have items')

});

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

