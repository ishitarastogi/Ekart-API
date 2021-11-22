const mongoose=require('mongoose')
//layout
const productSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    price:Number
});
//we can instantiate it and write data to db
module.exports=mongoose.model('Product',productSchema);
//name of the model
//schema which should be used as the blueprint for this model  
//mongoose will create and store data at a collection called Product