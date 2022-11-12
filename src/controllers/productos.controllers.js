import Producto from '../models/producto';


export const listarProducto= async(req,res)=>{
   try {
    //busca en la BD la collection de productos
    //traeme todos los documentos
  // const producto = Productos.find({categoria: 'Dulce'})
  const productos = await Producto.find();
  //envio la respuesta al frontend
  res.status(200).json(productos);

   } catch(error) {
    console.log(error);
    res.status(404).json({
        mensaje:'Error al buscar los productos'
    })
   }
}


 export const crearProducto= async (req,res)=>{
     try {
        console.log(req.body);
       
        //tomar los datos y validamos
    
        //guardo ese objeto en la BD
        const productoNuevo= new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: 'El producto fue creado correctamente'
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'ocurrio un error al intengar agregar un producto'
        });
    }

         }
