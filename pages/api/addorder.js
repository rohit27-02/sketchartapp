// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
 
    if (req.method == "POST") { 
      
            let f = new Order({
            name:req.body.name,
            pincode:req.body.pin,
            products: Object.keys(req.body.product).map((j)=>{return{color:req.body.product[j].variant,size:`${req.body.product[j].height} X ${req.body.product[j].width}`,productId:req.body.product[j].name,quantity:req.body.product[j].qty,img:req.body.product[j].img}}),
            email:req.body.email,
            amount:req.body.subTotal,
            status:req.body.status,
            address:req.body.address,
            phone:req.body.phone,
            paymentinfo:{
                payid:req.body.payinfo.payid,
                orderid:req.body.payinfo.orderid,
                date:new Date()
            }
            })
            await f.save()
            res.status(200).json({ success: "success" })
        }
    
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);

