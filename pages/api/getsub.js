// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
 
const handler = async (req,res)=>{
    var products=[];
    for(let i=0;i<data.length;i++)
    {
     products.push( await Product.find({category:req.body.data[i]}).distinct("subcategory"))
    }
    res.status(200).json( products )
}
export default connectDb(handler);
  
  