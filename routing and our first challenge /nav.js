import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.status(200).send('welcome from the homepage');
});
app.get('/about', (req, res) => {
    res.send('welcome from the aboutuspage');
});
app.get('/contact', (req, res) => {
    res.status(200).send('welcome from the contactpage');
});
app.get('/temp', (req, res) => {
    res.status(200).send('welcome from the temppage');
});
app.listen(8000, () => {
    console.log('listen to port 8000');
})