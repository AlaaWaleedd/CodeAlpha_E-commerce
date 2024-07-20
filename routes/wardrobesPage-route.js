const express=require('express');
const router=express.Router();

const{getProducts}=require('../controllers/wardrobesPage-Ctrl');


router.get('/',getProducts);

module.exports=router;