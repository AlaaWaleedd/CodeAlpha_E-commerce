const Product=require('../models/productsSchema');

const getProducts=async(req,res)=>{
try{
 const products=await Product.find();
 res.render('homePage',{products});
}catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
const addProduct=async(req,res)=>{
try{
    const{name,image,price,category,material,components,colors}=req.body;
 
    const newProduct=new Product({
        name,
        image,
        price,
        category,
        material,
        components,
        colors
    });
    await newProduct.save();
    res.status(201).send('Product Added');
  } catch (err) {
        console.log(err);
        res.status(500).send(' Failed to Product');
    }
};

module.exports={
    getProducts,
    addProduct};