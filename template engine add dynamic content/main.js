import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
const app = express();
const port = 8000;
const __dirname = dirname(fileURLToPath(
    import.meta.url));
// console.log(__dirname);

// const staticPath = path.join(__dirname, '/public')
// console.log(staticPath);
// set view engine 
app.set('view engine', 'hbs');
// template engine route
app.get('/', (req, res) => { res.render('index', { name: "Nabeel" }) });

// app.use(express.static(staticPath));
app.listen(port, () => { console.log(`listening to port ${port}`); })