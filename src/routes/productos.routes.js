import {Router} from 'express';
import { crearProducto, listarProducto, obtenerProducto } from '../controllers/productos.controllers';


//me creo un contante uq guarde el router
const router = Router();

router.route('/productos').get(listarProducto).post(crearProducto);
router.route('/productos/:id').get(obtenerProducto)

//app.get('/prueba',(req,res)=>{
  //  res.send('esto es una prueba de una peticion get');
 //      })
  //  app.delete('/prueba',(req,res)=>{
    //    res.send('esto es una prueba de una peticion delete');
//  })

export default router;