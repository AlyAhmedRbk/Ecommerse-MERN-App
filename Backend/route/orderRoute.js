import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import { allOrders, placeOrder, placeOrderStripe, updateStatus, userOrders } from "../controller/orderController.js";
import authUser from "../middleware/auth.js";

const orederRouter = express.Router();

// Admin Features
orederRouter.post("/list", adminAuth, allOrders);
orederRouter.post("/status", adminAuth, updateStatus);

// Payment Features
orederRouter.post("/place", authUser, placeOrder);
orederRouter.post("/stripe", authUser, placeOrderStripe);

// User Features
orederRouter.post("/userorder", authUser, userOrders);

export default orederRouter;