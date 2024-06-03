const { MongoClient } = require("mongodb");

const connectionString = "mongodb://localhost:27017";


// Синхронно:
// const connection = new MongoClient(connectionString, {
//   useUnifiedTopology: true,
// });

// connection.connect((err, result) => {
//   if (err != null) {
//     console.log("Database connection error");
//     process.exit(1);
//   };
//   console.log("Database connected");

//   const db = connection.db('testDb');  // connect to the testDb database

//   db.collection('collection name').find({}).toArray((err, data) => {   //finds a collection in testDB
//       console.log(data);
//   })
// });


// Асинхронно:
async function start(){
    const connection = new MongoClient(connectionString, {
        useUnifiedTopology: true,
      });
      
      await connection.connect(); 
      console.log("Database connected");
    
      const db = connection.db('testDb');  
    
      const data = await db.collection('collection name').find({}).toArray();
      console.log(data);
}

start()
