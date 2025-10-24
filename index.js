require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas básicas de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API CommunityLink funcionando!' });
});

// Aquí añadirás tus rutas después
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});