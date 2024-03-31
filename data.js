import { MongoClient } from "mongodb";
const url= "mongodb+srv://vela:vela@cluster0.mqqwh7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



export const client=new MongoClient(url);

export const connectiondb = async() => {
    try{
        await client.connect();
        console.log("connection made");
    } catch(error) {
        console.log(error)
    }
}