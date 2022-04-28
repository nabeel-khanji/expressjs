import requests from 'requests';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import
express from 'express';
import hbs from 'hbs';
const port =
    8000;
const app = express();
const __dirname = dirname(fileURLToPath(
    import.meta.url));
const viewPath = path.join(__dirname, 'screens/views');
const partialsPath = path.join(__dirname, 'screens/partials');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);
app.get('/profile', function(req, res) {
    console.log(req.query.name);
    res.send();
});
app.get('/', (req, res) => {
    console.log(req.query.name);
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&callback=&appid=5064e39e4c4a34352a4691eda2db2627`, )
        .on('data', (chunkdata) => {
            // console.log(req.query.name);

            const objData = JSON.parse(chunkdata);
            const arrayData = [objData];
            // console.log(arrayData[0].main.temp);

            res.write(`name is ${arrayData[0].name} and temp is ${(arrayData[0].main.temp-273).toFixed(2)}`)
                // console.log(realTimeData);
        })
        .on('end', (err) => {
            if (err) {
                return console.log('connection closed due to error');
            }
            res.end()
        });
});
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})