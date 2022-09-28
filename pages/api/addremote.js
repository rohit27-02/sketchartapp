// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Remotes2 from "../../models/Remotes2"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            console.log(req.body)
            let m = new Remotes2({
                title: req.body[i].title,
                slug: req.body[i].slug,
                features: req.body[i].features,
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

