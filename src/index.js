import express from 'express';
import morgan from 'morgan';
import {engine} from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
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
app.set('views',  path.join(__dirname, 'resources/views'));
// reouter
app.get('/', (req, res) => {
  res.render('home')
});
app.get('/news', (req, res) => {
  res.render('news')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});