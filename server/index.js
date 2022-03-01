import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// routes
app.use('/users', usersRoutes);


// home
app.get('/', (req,res) => {
  res.send('Home page - products coming soon')
});



app.listen(PORT, () => console.log(
  `Server running on port: http://localhost:${PORT}`));