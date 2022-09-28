// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Info from "../../models/Info"
import connectDb from "../../middleware/mongoose"
 
const handler = async (req,res)=>{
    let info = await Info.findOne()
    res.status(200).json(info )
}
export default connectDb(handler);
  
  