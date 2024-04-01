const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_HOST, {
    useNewUrlParser: true,
});

// App Initialization
const app = express();

// CORS Habilitation
app.use(cors());

// Body Parser Habilitation
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// App Listener
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto: ' + process.env.PORT);
});