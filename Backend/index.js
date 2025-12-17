const express=require("express")
const dotenv=require('dotenv')
const connectToDB = require("./Db/db")
const userRoutes=require("./routes/userRoutes")
const productRoutes=require("./routes/productRoutes")
const orderRoutes=require("./routes/orderRoutes") 
const cors=require("cors")
const Product = require("./models/productModel");

const app=express()
 
app.use(cors());

app.use(express.json())
app.use('/public', express.static('public'))
dotenv.config()
const port=process.env.port || 4000

function updateProductImage() {
const products = {
  Watches: [
    "https://luxe-lane-backend.vercel.app/public/watch1.png", // Apple Watch
    "https://luxe-lane-backend.vercel.app/public/watch2.png", // Apple Watch
    "https://luxe-lane-backend.vercel.app/public/watch3.png", // Apple Watch
    "https://luxe-lane-backend.vercel.app/public/watch4.png", // Apple Watch
  ],
  Speakers: [
    "https://luxe-lane-backend.vercel.app/public/speaker1.png", // Bluetooth Speaker
    "https://luxe-lane-backend.vercel.app/public/speaker2.png", // JBL Speaker
    "https://luxe-lane-backend.vercel.app/public/speaker3.png", // Sonos Speaker
    "https://luxe-lane-backend.vercel.app/public/speaker4.png"  // Portable Speaker
  ],
  Earbuds: [
    "https://luxe-lane-backend.vercel.app/public/earbuds1.png",
    "https://luxe-lane-backend.vercel.app/public/earbuds2.png", 
    "https://luxe-lane-backend.vercel.app/public/earbuds3.png",
    "https://luxe-lane-backend.vercel.app/public/earbuds4.png" 
  ],
  Headphones: [
    "https://luxe-lane-backend.vercel.app/public/headphone1.png",
    "https://luxe-lane-backend.vercel.app/public/headphone2.png", // Beats Headphonest
    "https://luxe-lane-backend.vercel.app/public/headphone3.png", // Beats Headphonest
    "https://luxe-lane-backend.vercel.app/public/headphone4.png",
  ]
};

}

//Routes
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/order",orderRoutes) 

app.listen(port,()=>{
    console.log(`Backend started succesfully at http://localhost:${port}`)  
})

connectToDB();

