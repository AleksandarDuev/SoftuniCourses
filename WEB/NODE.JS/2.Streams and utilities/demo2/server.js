const http = require("http");

http
  .createServer((req, res) => {
    console.log("Request");
    if (req.method === "GET") {
      res.write("OK");
      res.end();
    } else if (req.method === "POST") {
      let body = ""; // buffer for store the Chunks
      req.on("data", (data) => {
        console.log("Chunk>>>", data.toString());
        body += data.toString();
      });
      req.on("end", () => {
        console.log("Body:", JSON.parse(body));
        const bodyAsObject = JSON.parse(body);
        res.writeHead(200,{
            'Content-Type': "application/json"
        })
        bodyAsObject.Price++;
        res.write(JSON.stringify(bodyAsObject));
        res.end();
      });
    }
  })
  .listen(3000);
