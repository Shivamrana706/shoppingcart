import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import DefaultData from './default.js';

import Connection from './database/db.js';




const app = express();
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_DB || `mongodb+srv://${username}:${password}@cluster0.rhlik7t.mongodb.net/?retryWrites=true&w=majority`

Connection(URL);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.use('/',routes);

//DefaultData();

app.listen(PORT, ()=> console.log(`Server running sucessfully on ${PORT} port`));
