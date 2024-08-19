const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const e = require("express");

app.use(express.json());
app.use(cors());

//Database connection with mongoDB VfPRkfPw3I7Kn5CM
mongoose.connect('mongodb+srv://brandingdisplays:VfPRkfPw3I7Kn5CM@cluster0.glub1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

//API creation
app.get("/",(req,res)=>{
    res.send("express App is Running")
})

//Image Storage Engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})
//creating upload endpoints for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating product
const Product = mongoose.model("Product",{
    id:{
        type : Number,
        required : true,
    },
    name: {
        type : String,
        required : true,
    },
    image: {
        type : String,
        required : true,
    },
    category:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length > 0)
    {
        let last_product_array = products.slice(-1);
        let last_product  = last_product_array[0];
        id = last_product.id +1;

    }
    else{
        id =1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name: req.body.name,
    })
})

//Creating API for add product
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed")
    res.json({
        success: true,
        name: req.body.name,
    })
})

app.get('/homeproducts',async(req,res)=>{
    let products = await Product.find({category:"home"});
    let homeproducts = products.slice(0,15);
    console.log("Home products fetched");
    res.send(homeproducts);
})

//creating endpoint for popular products
app.get('/popularproducts',async(req,res)=>{
    let products = await Product.find({category:"products"});
    let popularproducts = products.slice(0,15);
    console.log("popular products fetched");
    res.send(popularproducts);
})

//creating endpoint for AboutUs
app.get('/aboutusproducts',async(req,res)=>{
    let products = await Product.find({category:"aboutus",});
    let aboutusproducts = products.slice(0,15);
    console.log("About Us products fetched");
    res.send(aboutusproducts);
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on port " + port);
    }
    else{
        console.log("Error: "+error);
    }
})