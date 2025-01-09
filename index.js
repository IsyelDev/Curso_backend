import express from "express";
import cors from "cors";
import dotenv from "dotenv"; // Importa dotenv para leer el archivo .env
import connectDB from "./config/mongo.js"; // Importa la función para conectar a MongoDB

// Configura dotenv para cargar las variables de entorno
dotenv.config();

const app = express();

// Accede al puerto desde las variables de entorno o usa 3000 como valor por defecto
const port = process.env.PORT || 3000;

// Usa el middleware CORS
app.use(cors());

// Define una ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Conexión exitosa al servidor!");
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Conecta a la base de datos
connectDB();
