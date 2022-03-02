
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import productsRoutes from './routes/products.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());




// routes
app.use('/users', usersRoutes);

app.use('/products', productsRoutes);


// home
app.get('/', (req,res) => {
  res.send('Home page - products coming soon')
});



app.listen(PORT, () => console.log(
  `Server running on port: http://localhost:${PORT}`));