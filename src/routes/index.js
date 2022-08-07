import newsRouter from "./news.js";
import siteRouter from "./site.js";
const routes = (app) =>{
    // news route
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}
export  default routes;