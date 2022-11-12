import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProducto,
  obtenerProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

//me creo un contante uq guarde el router
const router = Router();

router
  .route("/productos")
  .get(listarProducto)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es un dato obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
          "El nombre del producto debe ser entre 2 y 100 caracteres"
        ),
      check("precio")
        .notEmpty()
        .withMessage("El precio es un dato obligatorio")
        .isNumeric()
        .withMessage('El precio debe ser numero')
        .custom((value)=>{
          //logica de js
          if(value >= 1 && value <= 10000){
            return true
          }else{
            throw new Error('El precio debe estar entre 1 y 10000')
          }
        })

    ],
    crearProducto
  );
  // matches
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);
//app.get('/prueba',(req,res)=>{
//  res.send('esto es una prueba de una peticion get');
//      })
//  app.delete('/prueba',(req,res)=>{
//    res.send('esto es una prueba de una peticion delete');
//  })

export default router;
