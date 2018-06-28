const urlParser = require('url');
const path = require('path');
const express = require('express');
const appContentPath = path.join(__dirname, process.env.APP_LOCATION || 'app');

const port = process.env.PORT || 3001;


console.log(`Configure qualified static content to use ${appContentPath}`);

const app = express();

app.use(express.static(appContentPath));

app.get('/', (req, res) => res.sendfile(path.join(appContentPath, 'index.html')));


app.listen(port, () => console.log(
    '\nStarted' +
    '\nSERVER CONFIGURATION' +
    '\n---------------------' +
    '\n* application static files:   ' + appContentPath +
    '\n* port:                       ' + port +
    '\n---------------------\n'
));


