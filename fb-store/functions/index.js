const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors')
const products = require("./data.json");

//admin
const admin = require("firebase-admin");
admin.initializeApp();

const authMiddleware = require("./authMiddleware");

//app
const app = express();

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//special route [SKIP/DELETE - Only for working with local data.json file]
app.get("/lot", (req, res) => {//data.json products file
  res.status(200).send(products);
});

//routes from here
app.get("/", authMiddleware, async (req, res) => {//get all products from db
  const snapshot = await admin.firestore().collection("products").get();
  let products = [];
  snapshot.forEach((doc) => {
    let id = doc.id;
    let data = doc.data();
    products.push({ id, ...data });
  });
  res.status(200).send(JSON.stringify(products));
});

app.get("/:id", authMiddleware, async (req, res) => {//get product from db
  const snapshot = await admin
    .firestore()
    .collection("products")
    .doc(req.params.id)
    .get();
  const productId = snapshot.id;
  const productData = snapshot.data();
  res.status(200).send(JSON.stringify({ id: productId, ...productData }));
});

app.put("/:id", authMiddleware, async (req, res) => {//edit/update product off db
  const product = req.body;
  await admin
    .firestore()
    .collection("products")
    .doc(req.params.id)
    .update({
      ...product
    });
  res.status(200).send("product updated");
});

app.delete("/:id", authMiddleware, async (req, res) => {//delete a product from db
    await admin.firestore().collection("products")
        .doc(req.params.id).delete();
    res.status(200).send("Product has been deleted");
})

app.post("/", authMiddleware, async (req, res) => {//add product to db products
  const product = req.body;
  await admin.firestore().collection("products").add(product);
  res.status(201).send("Product created successfully");
});

exports.products = functions.https.onRequest(app);
