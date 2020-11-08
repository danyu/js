var http = require("http");
var port = 3080;
var urlParser = require("url");

/**
 * create a server object.
 *
 * */
const server = http
  .createServer(null, function (req, res) {
    const urlObj = urlParser.parse(req.url, true);
    const { query } = urlObj;
    console.log(query);

    // setHeaders(res);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write(query.cb + '("hello")');
    res.end();

  }).listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });