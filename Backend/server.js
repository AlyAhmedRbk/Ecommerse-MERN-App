import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./route/userRoute.js";
import productRouter from "./route/productRoute.js";
import cartRouter from "./route/cartRoute.js";
import orederRouter from "./route/orderRoute.js";



// APP CONFIG
const app = express();
const PORT = process.env.PORT || 4000;
connectDB()
connectCloudinary()

// APP  MIDDLEWARE
app.use(express.json())
app.use(cors());

// API ENDPOINTS
app.use("/api/user/", userRouter);
app.use("/api/product/", productRouter);
app.use("/api/cart/", cartRouter);
app.use("/api/order/", orederRouter);

// Listen The Backend
app.listen(PORT, ()=>{
    console.log(`App Listening on PORT ${PORT}`);
})