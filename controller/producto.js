const data = [
    {
        id:201,
        nombre: "mesa"
    },
    {
        id:202,
        nombre: "cama"
    },
    {
        id:203,
        nombre: "silla"
    }
]

//=====
// Listar Usuarios
//======
let listarProducto = (req, res) => {

    res.json({
        data:data
    })
};


//=====
// Get Usuario
//======
//localhost:8080/usuario/123
let getProducto = (req,res) => {
    let id = req.params.id
    res.json({
        data: data.filter(item => item.id == id )
    })
}

//=====
// Guardar Producto
//======
let guardarProducto = (req, res) =>{

    data.push(req.body);
    res.json({
        data:data
    })

};

//=====
// Borrar Usuario
//======

let borrarProducto = (req, res)=>{
    
    let id = req.params.id;
    res.json({
        data: data.filter(item => item.id = id)
    })
}

module.exports = {
    listarProducto,
    getProducto,
    guardarProducto,
    borrarProducto
}