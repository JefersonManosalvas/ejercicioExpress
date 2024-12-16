const express = require('express'); 
const app = express(); 

app.use(express.json()); 


var lista = [
  {
    id: '1',
    nombre: 'Jeferson', 
  },
  {
    id: '2',
    nombre: 'Paul',
  },
];


app.get('/nombre', (req, resp) => {
  resp.json(lista);
});

app.get('/jeferson',(req, resp)=>{
    resp.send('Mi nombre es Manosalvas Jeferson tengo 21 años soy estudiante del 17 de julio de la carrera de softeare');
});

app.get('/suma',(req, resp)=>{
    let n1= 10;
    let n2 = 2;
    resp.send(''+(n1+n2));
});

app.get('/sumaCliente/:n1',(req, resp)=>{
    let num1= parseInt(req.params.n1);
    let n2 = 2;
    let suma=num1+n2;
    resp.send(''+suma);
});

// Iniciar servidor en el puerto 3000
app.listen(3000, () => {
  console.log('El puerto 3000 está corriendo'); 
});


