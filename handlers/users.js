import { client, connectiondb } from "../data.js"
import axios from "axios"


const productslink = await axios.get('https://dummyjson.com/products?limit=10')
const productdata = productslink.data




export const createproduct = async(req, res) =>{
    
    try{
        await connectiondb();

        const database=client.db('dummy_json');
        const collections=database.collection('dummy');
       

       const dummydata=await collections.insertMany([productdata]);
       res.send(dummydata)
       console.log("data inserted");
    }
    catch(error) {
        console.log(error)
        res.send(error)
    } 
    
}