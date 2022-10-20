// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {


    if (req.method == "POST") {
        
      
        console.log(req.body)
        try {
            let p= await Product.updateOne({"_id":req.body.i2,"variants._id":req.body.pid},{"$set":{"variants.$.price":req.body.data[0].price,"variants.$.color":req.body.data[0].color,"variants.$.colorcode":req.body.data[0].colorcode,"variants.$.img":req.body.data[0].img}})
            
        } catch (error) {
            console.log(error)
        }
          
            res.status(200).json({ success: true })
        
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);

