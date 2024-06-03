const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log("Request");
    if (req.method === "GET") {
      fs.createReadStream('./index.html').pipe(res);  // pipe example!!
    } else if (req.method === "POST") {
      let body = ""; // buffer for store the Chunks
      req.on("data", (data) => {
        console.log("Chunk>>>", data.toString());
        body += data.toString();
      });
      req.on("end", () => {
        console.log("Body:", JSON.parse(body));
        const bodyAsObject = JSON.parse(body);
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        bodyAsObject.Price++;
        res.write(JSON.stringify(bodyAsObject));
        res.end();
      });
    }
  })
  .listen(5000);
