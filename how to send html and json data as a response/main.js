import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.write('<h1> welcome to my homepage </h1>');
    res.write('<h1> welcome to my homepage </h1>');
    res.send();
});
// app.get('/json', (req, res) => {
//     res.send([
//         { id: 1, name: 'Nabeel' },
//         { id: 1, name: 'Nabeel' },
//         { id: 1, name: 'Nabeel' },
//         { id: 1, name: 'Nabeel' },
//         { id: 1, name: 'Nabeel' },
//         { id: 1, name: 'Nabeel' },
//         { id: 1, name: 'Nabeel' },
//         { id: 1, name: 'Nabeel' },
//     ]);
// });
app.get('/json', (req, res) => {
    res.json([
        { id: 1, name: 'Nabeel' },
        { id: 1, name: 'Nabeel' },
        { id: 1, name: 'Nabeel' },
        { id: 1, name: 'Nabeel' },
        { id: 1, name: 'Nabeel' },
        { id: 1, name: 'Nabeel' },
        { id: 1, name: 'Nabeel' },
        { id: 1, name: 'Nabeel' },
    ]);
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