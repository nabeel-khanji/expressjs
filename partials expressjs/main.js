import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import path from 'path';
import hbs from 'hbs';
const port = 8000;
const app = express();
const __dirname = dirname(fileURLToPath(
    import.meta.url));
const viewPath = path.join(__dirname, '/Screen/views');
const partialsPath = path.join(__dirname, '/Screen/partials');

console.log(viewPath);
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);
app.get('/', (req, res) => {
    res.render('index', { name: "Nabeel" })
});
app.get('/about/', (req, res) => {
    res.render('about', { name: "Nabeel" })
});
app.get('/products/', (req, res) => {
    res.render('products', { name: "Nabeel" })
});
app.listen(port, () => {
    console.log(`listing to port ${port}`);
});