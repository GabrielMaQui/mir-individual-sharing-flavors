import mongoose from 'mongoose';

//const dbURL = process.env.DB_URL || "mongodb+srv://Gabriel_Steven:GABRIEL29pros@cluster1.fbb65zu.mongodb.net/sharing-flavors?retryWrites=true&w=majority&appName=Cluster1";
const dbURL =
  process.env.DB_URL ||
  'mongodb+srv://wlupacat:abDMuMnuKa2Ynks2@cluster0.i2e1x.mongodb.net/sharing-flavors?retryWrites=true&w=majority&appName=Cluster0';
console.log(process.env.DB_URL);
async function connectDB() {
  await mongoose
    .connect(dbURL)
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => console.error(error));
}

export default connectDB;
