//backend server for thrift happens online shop
//imports
import express, {response, type Express} from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import ClothesItem from "./models/clothesItem";

//consts
const server: Express = express();
const port: Number = 3000;
const {MONGO_URI} = process.env;

//middleware
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(cors());

//connect to db and start server

if(!MONGO_URI){
    throw new Error("Mongo URI is not found in .env file");
}

mongoose.connect(MONGO_URI).then(() => server.listen(port, () => {
    console.log(`Connected to DB\nServer is listening on port ${port}`);
})).catch((error) => console.log(error));

//routes
//root route
server.get("/", (request, response) => {
    response.send("Server is Live");
});

//GET data api route
server.get("/data", async (request, response) => {
    try {
        const data = await ClothesItem.find();
        response.status(200).send(data);
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});

//POST route to add a clothing items to database
server.post("/data", async (request, response) =>{
    const {
        id,
        name,
        image,
        fit,
        category,
        size,
        color,
        description,
        price,
        quantity,
        itemQuantity}
        = request.body;
    const newArticle = new ClothesItem({
        id,
        name,
        image,
        fit,
        category,
        size,
        color,
        description,
        price,
        quantity,
        itemQuantity,
    });
    try{
        await newArticle.save();
        response.status(201).send({message: `The new item with id ${id} has been added successfully`,
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
})