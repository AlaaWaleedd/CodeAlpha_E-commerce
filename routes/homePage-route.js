const express=require('express');
const router=express.Router();

const{addProduct,getProducts}=require('../controllers/homePageCtrl');


router.get('/',getProducts);
router.post('/add',addProduct);

module.exports=router;