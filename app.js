require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const apiKey = process.env.STRIPE_API_KEY;

console.log("Conectando a la base de datos...");
