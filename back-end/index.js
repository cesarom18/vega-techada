import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes/index.js';

// Connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_HOST)
    .catch((error) => console.log(error));

// App Initialization
const app = express();

// CORS Habilitation
app.use(cors());

// Body Parser Habilitation
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router Habilitation
app.use('/api', router);

// App Listener
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto: ' + process.env.PORT);
});