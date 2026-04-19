
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

async function initializeDatabase() {
    if (!uri) {
        throw new Error("MONGO_URI is required in environment variables");
    }

    if (!dbName) {
        throw new Error("DB_NAME is required in environment variables");
    }

    await mongoose.connect(uri, { dbName });
    console.log("Connected to MongoDB");
}

function getStudentsCollection() {
    if (!mongoose.connection.db) {
        throw new Error("Database is not initialized");
    }

    return mongoose.connection.db.collection("students");
}

module.exports = {
    initializeDatabase,
    getStudentsCollection,
};
