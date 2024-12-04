import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({token}) => {

    const [list, setList] = useState([]);

    const fetchData = async () => {

        try {
            
            const {data} = await axios.get(backendUrl+"/api/product/list");
            if (data.success){
                setList(data.products);
                // console.log(data);
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }

    const removeProduct = async (id) => {

        try {
            
            const {data} = await axios.post(backendUrl+"/api/product/remove", {id}, {headers:{token}});

            if(data.success){
                toast.success(data.message);
                await fetchData();
            }else{
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
        <p className='mb-2'>All Product List</p>
        <div className='flex flex-col gap-2'>

            {/* List Table Title  */}

            <div className='hidden md:w-[60vw] md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2
            border bg-gray-100 text-sm'>
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b className='text-center'>Action</b>
            </div>

            {/* ------Product List -------- */}
            {list.map((item, index)=>{
                return (
                    <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr]
                    items-center gap-2 py-1 px-2 border text-sm'>
                        <img className='w-12' src={item.image[0]} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>{currency}{item.price}</p>
                        <p 
                            className='text-right md:text-center cursor-pointer text-sm text-red-600'
                            onClick={()=>removeProduct(item._id)}
                            >
                                X
                            </p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default List