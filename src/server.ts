import * as http from 'http';

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
  const { url, method } = request;

  if (url === "/" && method === "GET") {
    console.log("Someone is visiting home route...");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Welcome to my server!</h1>");
    return;
  }

  if (url === "/about" && method === "GET") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>About</h1>");
    return;
  }

  if (url === "/my-account" && method === "GET") {
    response.writeHead(403, { "Content-Type": "text/plain" });
    response.end("You have no access to this page");
    return;
  }

  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("Page not found");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
