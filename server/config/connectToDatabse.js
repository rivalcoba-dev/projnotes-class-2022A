import mongoose from 'mongoose';

export default () => {
  // Conectando la base de datos
  mongoose.connect('mongodb://projnotes:123123@mongo:27017/?authSource=admin').then(() => {
    console.log('Conexion exitosa a la base de datos');
  }).catch((error)=>{
    console.log(`Error when connecting database: ${error}`);
  });
}