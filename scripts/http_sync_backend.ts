
const webdav = require('webdav-server').v2;
const express = require('express');
const server = new webdav.WebDAVServer({
  rootFileSystem: new webdav.PhysicalFileSystem('C:\\Users\\nexus\\WebDav')
});
var app = express();




app.use(express.static("./"));
app.listen(180);
app.use(webdav.extensions.express('/fs', server));
