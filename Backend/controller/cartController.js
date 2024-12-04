import userModel from "../models/userModel.js";


// API to add product to user cart

const addToCart = async (req, res) => {
    
    try {
        
        const { userId, itemId, size } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cart[itemId][size] +=1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success : true, message : "Product Added To Cart"});
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message});
    }
}

// API to update product to user cart

const updateCart = async (req, res) => {
    
    try {
        
        const {userId, itemId, size, quantity} = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success : true, message : "Updated To Cart"});
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message});
    }
}

// API to Get product to user cart

const getUserCart = async (req, res) => {

    try {
        
        const { userId } =req.body;

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({success : true, cartData : cartData})
    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message});
    }
}

export {addToCart, updateCart, getUserCart};