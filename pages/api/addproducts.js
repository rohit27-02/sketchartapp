// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
     
        for (let i = 0; i < req.body.length; i++) {
            var sub = false;
            if(req.body[i].subcategory !==null){
              sub=true
            }

            let p = new Product({
                title: req.body[i].title,
                tagline: req.body[i].tagline,
                desc: req.body[i].desc,
                slug:req.body[i].slug,
                care: req.body[i].care,
                gallery: req.body[i].gallery,
                variants:req.body[i].variants.map((j)=>{return{color:j.color,colorcode:j.colorcode,img:j.img,  price: j.price}}),
                category: req.body[i].category,
                subcategory: req.body[i].subcategory,
               // height: req.body[i].height,
              //  width: req.body[i].width,
              
                poster: req.body[i].poster,
                sub:sub,

                
            })
            await p.save()
            
        }
       
        res.status(200).json({ success: true })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);

