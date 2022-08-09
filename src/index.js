import express from 'express';
import morgan from 'morgan';
import {engine} from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import routes from './routes/index.js';
import db from './config/db/index.js';
// connect db
db.connect();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;
// static url
app.use(express.static(path.join(__dirname, 'public')));

// Http logger
app.use(morgan('combined'));
// templates engines
app.engine('hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views',  path.join(__dirname, 'resources' , 'views'));
// router
routes(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});