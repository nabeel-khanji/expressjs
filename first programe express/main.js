import express from "express";
const app = express();
app.get('/',(req,res)=> {
res.send('hellow world from the home side')
});
app.get('/about',(req,res)=> {
res.send('about world from the home side')
});
app.listen(8000,()=>{
    console.log('listenting to the port 8000');
}) 


