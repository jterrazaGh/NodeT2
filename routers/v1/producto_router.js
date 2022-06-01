const router = require('express').Router();

const {
    listarProducto,
    getProducto,
    guardarProducto,
    borrarProducto
} = require('../../controller/producto')


router.get('/producto' ,listarProducto);
router.get('/producto/:id', getProducto);
router.post('/producto', guardarProducto);
router.delete('/producto/:id', borrarProducto);


module.exports = router;