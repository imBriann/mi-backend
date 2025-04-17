const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Habilitar CORS para todas las rutas y orígenes
app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Hola desde el backend en Render con CORS habilitado!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
