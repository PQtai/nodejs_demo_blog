class SiteController{
    // [GET] /home
    index(req, res) {
        res.render('home')
    }
     // [GET] /search
    search(req, res) {
        res.send('search')
    }
}
const siteController = new SiteController();
export default siteController;