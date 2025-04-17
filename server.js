const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Configurar CORS para permitir solo tu dominio
app.use(cors({
  origin: ['https://lionsgym.online', 'https://lions-gym-dcec8.web.app']
}));

app.get('/', (req, res) => {
  res.send('¡Hola desde el backend con CORS funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
