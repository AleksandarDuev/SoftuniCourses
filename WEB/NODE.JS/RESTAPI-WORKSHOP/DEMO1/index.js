const express = require("express");

const data = [
  {
    id: "asd1",
    name: "first",
    color: "blue",
  },
  {
    id: "asd2",
    name: "second",
    color: "red",
  },
  {
    id: "asd3",
    name: "third",
    color: "green",
  },
];
const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE, OPTIONS, HEAD"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-type, X-Authorization"
  );
  next();
});

app.use(express.json()); // body parser

//app.get('/', (req, res) => res.send('Hello'))  return HTML

app.get("/", (req, res) => res.json({ message: "Hello" }));

//read all
app.get("/api/catalog", (req, res) => {
  res.json(data);
});

//create record
app.post("/api/catalog", (req, res) => {
  // generate new random id
  const id = "asd" + ((Math.random() * 9999) | 0);
  req.body.id = id;
  data.push(req.body);
  res.json(req.body);
});

//read record by id
app.get("/api/catalog/:id", (req, res) => {
  const id = req.params.id;
  const record = data.find((r) => r.id == id);
  res.json(record);
});

//edit record by id
app.put("/api/catalog/:id", (req, res) => {
  const id = req.params.id;
  let index;
  for (i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      index = i;
      break;
    }
  }
  req.body.id = id;
  data[index] = req.body;

  res.json(data[index]); // returns updated record
});

//delete record by id
app.delete("/api/catalog/:id", (req, res) => {
  const id = req.params.id;
  let index;
  for (i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      index = i;
      break;
    }
  }
  data.splice(index, 1);
  res.status(204).end();
});

app.listen(3000, () => console.log("Server listening on port 3000"));
