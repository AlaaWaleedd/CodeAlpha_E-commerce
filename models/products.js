const mongoose=require('mongoose');

const productsSchema=new mongoose.Schema(
    {
name:{
    type:String,
    required:[true,"please enter a product's name"],
},
image:{
    type:String,
    required:[true,"please enter a product's image"],
},
price:{
    type:Number,
    required:[true,"please enter a price"],
},
category:{
type:String,

},
components:{
    type:String,
},

colors:{
    type:String,
    require:[true,"please enter a color"],
},

},
);

const product=mongoose.model("E-commerce",productsSchema);
module.exports=product;