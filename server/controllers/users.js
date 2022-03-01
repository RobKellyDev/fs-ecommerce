import { createRequire } from "module";
import { v4 as uuidv4 } from 'uuid';
const require = createRequire(import.meta.url);
const users = require("../data/users.json");

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  let userFound = users.find((user) => user.id === id);
  res.send(`Found user with id: ${userFound.id}`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const delUser = users.filter((user) => user.id !== id);
  res.send(`User with id of: ${delUser.id} deleted`);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`Added user ${user.username}`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { username,firstname,lastname } = req.body;
  const user = users.find((usr) => usr.id === id);
  
  if (username) user.username = username;
  if (firstname) user.firstname = firstname;
  if(lastname) user.lastname = lastname;
  
  res.send(`User with id of ${id} has been updated`);
};
