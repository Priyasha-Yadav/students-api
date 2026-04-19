require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { initializeDatabase } = require('./config/db');
const studentRouter = require('./routes/student.router');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use('/students', studentRouter);

async function startServer() {
    try {
        await initializeDatabase();
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Error starting server:', err.message);
        process.exit(1);
    }
}

startServer();
