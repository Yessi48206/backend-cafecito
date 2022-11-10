import express from 'express';

//creamos una instancia de express

const app= express();
//crear la variable que va a tener el puerto
//process es un objeto de node
app.set('port', process.env.PORT  || 4000)

//para usar el puerto o variable
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto' + app.get(' port'))
});


console.log('hola mundo')