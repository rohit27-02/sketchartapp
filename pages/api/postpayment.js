
import CryptoJS from "crypto-js";

export default async function handler(req, res) {
  if (req.method === "POST") {
   console.log(req.body)
    const generated_signature = CryptoJS.HmacSHA256(req.body.orderid + "|" + req.body.payid,process.env.RAZORPAY_SECRET);

    if (generated_signature == req.body.sign) {
        console.log("yes")
        res.status(200).json({
          success:true
          });
    }
    else{
        res.status(400).json({err:Error});
    }

}
}