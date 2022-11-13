import mongoose from 'mongoose';

//const url = 'mongodb://localhost:27017/cafecito'
//const url = 'mongodb://127.0.0.1:27017/cafecito'; BAS DE DATO LOCAL
const url = 'mongodb+srv://Yessi1999:Jorge1999@cluster0.olmkxwt.mongodb.net/cafecito-c8i';
mongoose.connect(url);

const conexion= mongoose.connection;
 conexion.once('open',()=>{
    console.log('DB conectada');
    
 })