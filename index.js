const express=require('express');
const app = express;
app.use(express.json());
var lista=[
{
    id:'1',
    nombre:'jeferson',

},
{
    id:'2',
    nombre:'paul',

}];

//uso de app, web service de tipo get

app.length('/nombre',(req,resp)=>{
    resp.json(lista);
});

app.listen(3000,()=>{
    console.log('el puero 3000 esta corriendo');
});

