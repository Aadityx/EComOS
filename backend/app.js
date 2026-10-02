const connectDB = reqiure('./db');
const express = require('express');
const authRoutes = require('./auth');
const productRoutes = require('./products');
const orderRoutes = require('./order');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/order', orderRoutes);
connectDB();

const PORT = 5000;

app.get('/health', async(req,res) => {
    res.send('Server is running');
})

app.listen(PORT, () => {
    console.log('Server running at ${PORT}');
})