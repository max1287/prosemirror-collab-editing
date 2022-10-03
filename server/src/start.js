const {createServer} = require("http")
const {handleCollabRequest} = require("./server")

const port = 8000

// The collaborative editing document server.
createServer((req, resp) => {
  if (req.method === 'OPTIONS') {
    resp.writeHead(200, {
			"Access-Control-Allow-Origin":"*", // CORS HEADER
			"Access-Control-Allow-Methods":"GET, POST, DELETE, PUT", // CORS HEADER
			"Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept" // CORS HEADER
		});
		resp.end();
    return true;
  }
  if (!handleCollabRequest(req, resp)) {
    resp.writeHead(404, {"Content-Type": "text/plain"})
    resp.end("Not found")
  }
}).listen(port, "127.0.0.1")

console.log("Collab demo server listening on " + port)
