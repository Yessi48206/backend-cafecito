import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
//llamar a la conexion a la DB
import './database'

//creamos una instancia de express

const app= express();
//crear la variable que va a tener el puerto
//process es un objeto de node
app.set('port', process.env.PORT  || 5500)

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
app.use(morgan('dev'));
//cargar un archivo estatico
//console.log(path.join(__dirname, '../public'));
app.use(express.static(path.join(__dirname, '../public')))

//las rutas 
//http://localhost:5500/prueba
app.get('/prueba',(req,res)=>{
res.send('esto es una prueba de una peticion get');

})
app.delete('/prueba',(req,res)=>{
    res.send('esto es una prueba de una peticion delete');
    
    })