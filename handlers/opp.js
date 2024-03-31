import { client, connectiondb } from "../data.js"
import axios from "axios"


const productslink = await axios.get('https://server-20s1.onrender.com/products')
const productdata = productslink.data
export const find = async(req,res)=>
{ 
    try{
        await connectiondb()
        
        const database=client.db('dummy_json');
        const collections=database.collection('dummy');

        const result=await collections.findOne({id:1})
        res.send(result)
        console.log("findone");

       

        let findresult=[];
        if(result){
            findresult.push(result);
        }
        const cursor=collections.find({ title: "Huawei P30" });
        for await (const doc of cursor){
            findresult.push(doc)
        }
        res.send(findresult)
        console.log("find");
        
        const query ={ title:  "Samsung Galaxy Book"};
        const update = {$set:{title : "samsung book"}};
        const options={};
        await collections.updateOne(query, update, options)
        console.log("updateone");
    
        const queries={ brand:"Samsung"};
        const resultdel=await collections.deleteOne(queries);

        if(resultdel.deletedCount === 1){
            console.log("deletion done");
        }else{
                console.log("no data delte");
            }
            console.log("deleteone");
      }
      
    catch(error) {
        console.log(error)
        res.send(error)
    } 


}