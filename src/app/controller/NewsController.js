class NewsController{
    // [GET] /news
    index(req, res) {
        res.render('news')
    }
     // [GET] /news/:slug
    show(req, res) {
        res.send('show')
    }
}
const newsController = new NewsController();
export default newsController;