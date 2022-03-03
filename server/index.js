import express from "express";
import cors from "cors";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

//app
const app = express();

//routes
import productRoute from "./routes/product.js";
// import homeRoute from "./routes/home.js";
import cartRoute from "./routes/cart.js";
// import userRoute from "./routes/user.js";
// import authRoute from "./routes/auth.js";

//port
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.disable("view cache");

app.use("/products", productRoute);

app.use("/carts", cartRoute);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

export default app;
