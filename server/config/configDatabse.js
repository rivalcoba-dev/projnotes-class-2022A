import mongoose from mongoose;

export default (app) => {
  // Conectando la base de datos
  mongoose.connect('mongodb://projnotes:123123@<ip-address>')
  return app;
}