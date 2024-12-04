import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState(""); 
    const [showSearch, setShowSearch] = useState(false); 
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState("");

    const addToCart = async (itemId, size) =>{
        let cartData = structuredClone(cartItems);

        if(!size){
            toast.error("Please Select Product Size");
            return;
        }

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);

        if(token){
            try {
                
                const {data} = await axios.post(backendUrl+"/api/cart/add", {itemId, size}, {headers : {token}});

                if(data.success){
                    toast.success(data.message)
                }
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () =>{
        let totalCount = 0;

        for(const items in cartItems){
            for (const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }

        return totalCount;
    }

    const updateQuantity = async(itemId, size, quantity) =>{
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
        
        if(token){
            
            try {
                
               const {data} =  await axios.post(backendUrl + "/api/cart/update", {itemId, size}, {headers:{token}});

               if(data.success){
                toast.success(data.message);
               }
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartAmount = () =>{
        let totalAmount = 0;

        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);

            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
         try {
            
            const {data} = await axios.get(backendUrl + "/api/product/list");
            if(data.success){
                setProducts(data.products);
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
         }
    }

    const getUserCart = async ( token ) => {

        try {
            const {data} = await axios.post(backendUrl + "/api/cart/get",{}, {headers: {token}});

            if(data.success){
                setCartItems(data.cartData);
                console.log(data)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message) 
        }
    }

    // useEffect(()=>{
    //     console.log(cartItems);       
    // },[cartItems])

    useEffect(()=>{
        getProductsData();
    },[])

    useEffect(()=>{
        if(!token && localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            getUserCart(localStorage.getItem("token"));
        }
    }, [])

    const value = {
        backendUrl,
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,setCartItems,
        getCartCount,updateQuantity,
        getCartAmount,
        navigate,
        token, setToken,
    }


    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;