const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";

console.log("Attempting to connect to MongoDB...");

MongoClient.connect(url)
  .then((client) => {
    console.log("Connected to MongoDB!");

    const db = client.db("website");
    console.log("Database selected:", db.databaseName);
    
    const collectionName = "users";
    return db.createCollection(collectionName)
      .then(() => {
        console.log(`Collection ${collectionName} created successfully`);
      })
      .finally(() => client.close()); // Ensures client closes after operation
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });

//under construction-------
