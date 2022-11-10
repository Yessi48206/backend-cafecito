import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//creamos una instancia de express

const app= express();
//crear la variable que va a tener el puerto
//process es un objeto de node
app.set('port', process.env.PORT  || 4100)

//para usar el puerto o variable
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto' + app.get(' port'))
});

//agregar las funciones q se ejecuta antes de las rutas
//midlewares

app.use(cors()); //permite conexiones remota
//permite interpretar el formato json
app.use(express.json());
app.use(express.urlencoded({extends:true}));

//las rutas 