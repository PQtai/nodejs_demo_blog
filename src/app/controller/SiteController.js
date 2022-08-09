import Product from "../models/product.js";
import {mutipleMongooseToObject , mongooseToObject} from "../../util/mongoose.js";
class SiteController{
    // [GET] /home
    index(req, res , next) {
        Product.find({})
            .then(products=>res.render('home', {
                products : mutipleMongooseToObject(products),
            }))
            .catch(next)
        // res.render('home')
    }
     // [GET] /search
    search(req, res) {
        res.send('search')
    }
}
const siteController = new SiteController();
export default siteController;