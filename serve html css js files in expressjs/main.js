const path = require('path');
const express = require('express');
const app = express();
// console.log(__dirname);
const statusicPath = path.join(__dirname, '/public');
console.log(statusicPath);
app.use(express.static(statusicPath));
// app.get('/', (req, res) => {
//     res.send('hellow world from the home side')
// });
// app.get('/about', (req, res) => {
//     res.send('about world from the home side')
// });
app.listen(8000, () => {
    console.log('listenting to the port 8000');
})