// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
 
const handler = async (req,res)=>{
var idea = [];
var subproduct = [];
    let products = await Product.distinct("category")
    for(let i=0;i<products.length;i++){
        let sub = await Product.findOne({category:products[i]})
        idea.push(sub.sub)
        if(sub.sub == true){
            let a = await Product.find({category:products[i]}).distinct("subcategory")
            subproduct.push(a)
        }   
    }
    
    res.status(200).json( {products ,idea,subproduct})
}
export default connectDb(handler);
  
  