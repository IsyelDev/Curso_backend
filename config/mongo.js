import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DBS_URI = process.env.DB_URI; // Accede a la URI de la base de datos desde las variables de entorno
    if (!DBS_URI) {
      throw new Error("MONGO_URI no está definida en las variables de entorno");
    }

    // Conecta a MongoDB usando mongoose
    await mongoose.connect(DBS_URI);

    console.log("Conexión exitosa a la base de datos");
  } catch (e) {
    console.error("Error al conectar con la base de datos:", e.message);
    process.exit(1); // Finaliza el proceso si no se puede conectar a la base de datos
  }
};


 export default connectDB;