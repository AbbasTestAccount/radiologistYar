require('dotenv').config();

console.log('DB_SERVER:', process.env.DB_SERVER); // Add this line to debug

module.exports = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};
