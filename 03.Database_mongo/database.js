const { MongoClient } = require("mongodb");

// Local host
const URL = "mongodb://localhost:27017/";

// connecting to our localhost server
const client = new MongoClient(URL);

// Database name
const dbName = "Node";

async function main() {
  await client.connect();
  console.log("Connected succesfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // t data (documents)
  const data = {
    firstname: "RITIK",
    lastname: "RoSJAN",
    city: "Mumbai",
    phn: "1236547891",
  };

  // Inser data in db

//   const insertData = await collection.insertMany([data]);
//   console.log("Inserted documents => ", insertData);

  // Update data
//   const updateData = await collection.updateOne(
//     { firstname: "RITIK" },
//     { $set: { lastname: "RoshanJH" } },
//     {upsert:false}
//   );
//   console.log("updated documents => ", updateData);

  // Read data from database
//   const firstResult = await collection.find({}).toArray();
//   console.log("Found document => ", firstResult);

  const findResult = await collection.find({firstname:"RITIK"}).toArray();
  console.log("Found document => ", findResult);

  // deleteing
//   const lastDocument = await collection.find().sort({ _id: -1 }).limit(2).toArray();
// console.log("Last inserted document =>", lastDocument);

// Delete the last inserted document
// if (lastDocument.length > 0) {
//   const lastId = lastDocument[0]._id;
//   const deleteData = await collection.deleteOne({ _id: lastId });
//   console.log("Deleted document =>", deleteData);
// } else {
//   console.log("No documents found to delete.");
// }

// Two delete 

// const lastTwoDocuments = await collection.find().sort({ _id: -1 }).limit(2).toArray();
// console.log("Last two inserted documents =>", lastTwoDocuments);

// if (lastTwoDocuments.length === 2) {
//   // Option A: Delete using deleteMany()
//   const lastTwoIds = lastTwoDocuments.map(doc => doc._id);
//   const deleteData = await collection.deleteMany({ _id: { $in: lastTwoIds } });
//   console.log("Deleted documents =>", deleteData);

// } else {
//   console.log("Not enough documents to delete.");
// }



  return "done";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
