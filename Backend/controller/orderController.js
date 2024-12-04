import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing Orders using COD Method

const placeOrder = async (req, res) => {

    
    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            PaymentMethod : "COD",
            payment : false,
            date : Date.now()
        }    

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData : {}});
        
        res.json({success : true, message : "Order Placed"})
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

// Placing Orders using Stripe Method

const placeOrderStripe = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}

// ALL ORDERS DATA FOR ADMIN PANEL
const allOrders = async (req, res) => {

    try {
        
        const orders = await orderModel.find({});
        res.json({success : true, orders});
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

// ORDERS DATA FOR User PANEL
const userOrders = async (req, res) => {

    try {
        
        const { userId } = req.body;
        
        const orders = await orderModel.find({ userId });
        
        res.json({success : true, orders})
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

// Update Order Status
const updateStatus = async (req, res) => {

    try {
        
        const {orderId, status} = req.body;

        await orderModel.findByIdAndUpdate(orderId, {status});

        res.json({success : true, message : "Status Updated"})
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

export {placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus}