require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const orderRoutes = require('./routes/orderRoutes');
app.use('/order', orderRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Executando serviço na porta ${process.env.PORT} [${process.env.NODE_ENV}]`);
});