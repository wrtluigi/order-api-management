require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDB();

const orderRoutes = require('./routes/orderRoutes');
app.use('/order', orderRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Executando serviço na porta ${process.env.PORT} [${process.env.NODE_ENV}]`);
});