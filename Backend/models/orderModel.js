import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {type : String, requuired : true, },
    items : {type : Array, requuired : true, },
    amount : {type : Number, requuired : true, },
    address : {type : Object, requuired : true, },
    status : {type : String, requuired : true, default : "Order Placed"},
    paymentMethod : {type : String, requuired : true, default : "COD"},
    payment : {type : Boolean, requuired : true, default : false },
    date : {type : Number, required : true},
})


const orederModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orederModel;