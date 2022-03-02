import { createRequire } from "module";
import { v4 as uuidv4 } from 'uuid';
const require = createRequire(import.meta.url);
const products = require("../data/users.json");

export const getProducts = (req, res) => {
  res.send(products);
};
