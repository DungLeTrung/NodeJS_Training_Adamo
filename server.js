import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, world!")
})

const PORT = process.env.PORT ||3000;

function onServerStart() {
    console.log(`Server is running on port ${PORT}`);
}

app.listen(PORT, onServerStart);