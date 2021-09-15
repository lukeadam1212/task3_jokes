import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import Model from './models/modelModel.js';
import Vehicle from './models/vehicleModel.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

let models = [
    {
        model: "Tesla Model X",
        price: 12.55
    },
    {
        model: "Honda Id",
        price: 10.11
    },
    {
        model: "BWM i3",
        price: 15.22
    }
]


let vehicles = [
    {
        model_id: "NNA333",
        registration: "ABC 111",
        location: "LT"
    },
    {
        model_id: "2dfs22",
        registration: "CBA 222",
        location: "EST"
    },
    {
        model_id: "DGAee444",
        registration: "FGT 777",
        location: "LV"
    }
]

// Connection to Mongo DB
mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Mongo DB connected from seeder`.rainbow);
    Model.insertMany(models);
    Vehicle.insertMany(vehicles);
}).catch(err => console.log(err));

