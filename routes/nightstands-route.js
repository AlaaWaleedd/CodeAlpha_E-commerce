const express=require('express');
const router=express.Router();

const{getProducts}=require('../controllers/nightstandsCtrl');


router.get('/',getProducts);

module.exports=router;