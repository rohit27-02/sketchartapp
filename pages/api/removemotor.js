import Motor from "../../models/Motor"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
    if (req.method == "POST") {
   
            let f= await Motor.deleteOne({"_id":req.body})
         
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);