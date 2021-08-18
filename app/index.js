"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const figlet = require("figlet");

const PORT = process.env.PORT || 3000;

require("dotenv").config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// doing some database stuff
const { MongoClient } = require("mongodb");

const url = `mongodb://abhishek:happysoul@mongodb:27017`;

const client = new MongoClient(url);

const dbName = "amsterdam";

async function main() {
  await client.connect();
  console.log("Connected successfull to mongo server.");
  const db = client.db(dbName);
  const collection = db.collection("dummy");

  await collection.insertMany([
    { a: Math.floor(Math.random() * 30) },
    { a: Math.floor(Math.random() * 100) },
    { a: Math.floor(Math.random() * 1000) },
  ]);
  const result = await collection.find({}).toArray();

  console.log(result);

  return `done.`;
}

main()
  .then((result) => console.table(result))
  .catch(console.error)
  .finally(() => client.close());

app.get("/", (req, res) => {
  res.status(200).send("<h1> RUNNING AMSTERDAM !!!</h1>");
});

app.listen(PORT, () => {
  figlet("amsterdam", (err, data) => {
    if (err) return;
    console.log(data);
    console.log(`Server is up and running at PORT:${PORT}`);
  });
});
