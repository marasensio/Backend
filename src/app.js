import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();
const port = 8080;
app.use(express.urlencoded({extended: true}));

pp.get('/products', async (req, res) => {
    const myManager = new ProductManager("./src/products.json");
    const products = await myManager.getProducts();
    const countLimit = req.query.limit;
    if(countLimit){
        const limit = parseInt(countLimit);
        const result = products.slice(0, limit);
        res.send(result);
    } else res.send(products); 
})
app.get('/products/:pid', async (req, res) => {
    const myManager = new ProductManager("./src/products.json");
    const productId = req.params.pid;
    if(productId){
        const id = parseInt(productId)
        const result = await myManager.getProductById(id);
        res.send(result);
    } 

})

app.listen(port, () => {
    console.log("Servidor escuchando en el puerto ${port}")
})

