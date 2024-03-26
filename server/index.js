const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { MONGODB_URL, PORT } = process.env;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database Connected'))
    .catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log(`Server Connected PORT ${PORT}`);
});
app.use(
    cors({
        origin: ['http://localhost:4000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);

app.use(express.json());