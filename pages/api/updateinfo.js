// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Info from "../../models/Info"
import connectDb from "../../middleware/mongoose"
const handler = async (req, res) => {
    if (req.method == "POST") { 
    
        let p= await Info.updateOne({},req.body)
            res.status(200).json({ success: "success" })
        }
    
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);

