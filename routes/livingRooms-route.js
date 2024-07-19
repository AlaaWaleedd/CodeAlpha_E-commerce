const express=require('express');
const router=express.Router();

const{getProducts}=require('../controllers/livingRoomsPage-Ctrl');


router.get('/',getProducts);

module.exports=router;