// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {


    if (req.method == "POST") {
        
      
        console.log(req.body)
            let p= await Product.findOneAndReplace({_id:req.body.pid},req.body.data[0])
            res.status(200).json({ success: true })
        
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);

