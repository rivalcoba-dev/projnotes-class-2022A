import mongoose from 'mongoose';
import configKeys from './configKeys';

const {MONGO_PORT} = configKeys;
const {MONGO_USER} = configKeys;
const {MONGO_PASSWORD} = configKeys;
const {MONGO_IP} = configKeys;

export default () => {
  // Conectando la base de datos
  mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
  .then(() => {
    console.log('Conexion exitosa a la base de datos');
  }).catch((error)=>{
    console.log(`Error when connecting database: ${error}`);
  });
}