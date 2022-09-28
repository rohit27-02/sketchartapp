// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Motor from "../../models/Motor";
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            let m = new Motor({
                title: req.body[i].title,
              
                slug: req.body[i].slug,
                features:req.body[i].features,
                specs:req.body[i].specs,
               
                category: req.body[i].category,
                subcategory: req.body[i].subcategory,
            
                price: req.body[i].price,
                poster: req.body[i].poster,
              
                
            })
            await m.save()

        }
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);

