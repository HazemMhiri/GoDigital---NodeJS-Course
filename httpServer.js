const http = require("http");

const server = http.createServer();

function fallbackController(req, res) {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Please use /hello or /goodbye !",
    })
  );
}

function sayHelloController(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Hello GoDigital",
    })
  );
}

function sayGoodbyeController(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Goodbye GoDigital" }));
}

function getHtmlController(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
        <head>
            <title>Hello</title>
        </head>
        <body>
            <h1>Hello world!</h1>
            <h2>GoDigital is learning NodeJS</h2>
        </body>
    </html>
  `);
}

function router(req, res) {
  const url = req.url;
  switch (url) {
    case "/hello":
      sayHelloController(req, res);
      break;
    case "/goodbye":
      sayGoodbyeController(req, res);
      break;
    case "/html":
      getHtmlController(req, res);
      break;
    default:
      fallbackController(req, res);
      break;
  }
}

server.on("request", (req, res) => {
  router(req, res);
});

server.listen(8080);
