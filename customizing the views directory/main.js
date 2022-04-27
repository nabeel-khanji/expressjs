import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
const __dirname = dirname(fileURLToPath(
    import.meta.url));
const setFilederName = path.join(__dirname, '/Screen');
console.log(setFilederName);
const app = express();
const port = 8000;
app.set('view engine', 'hbs');
app.set('views', setFilederName);
app.get('/', (req, res) => { res.render('index', { name: "Nabeel" }) });
app.get('/about', (req, res) => { res.render('about', { name: "Nabeel" }) });
app.listen(port, () => { console.log(`listening to the port ${port}`); });