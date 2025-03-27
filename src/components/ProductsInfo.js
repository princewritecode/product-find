import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

const ProductsInfo = () =>
{
    const { resId } = useParams();
    const [prodData, setProdData] = useState({}); // Initialize as an empty object

    useEffect(() =>
    {
        fetchProductInfo();
    }, []);

    const fetchProductInfo = async () =>
    {
        try
        {
            const response = await fetch(`https://dummyjson.com/products/${resId}`);
            if (!response.ok)
            {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProdData(data);
        } catch (error)
        {
            console.error('Fetch error:', error);
        }
    };

    return (
        <div className="my-6 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 mx-auto">
                {prodData.images && prodData.images.length > 0 && ( // Check if images exist
                    <img src={prodData.images[0]} alt={prodData.title} className="w-[300px] h-[300px] mb-4" />
                )}
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                    {prodData.title || 'Product title not available'}
                </h1>
                <h4 className="my-2 font-bold text-gray-900">{prodData.shippingInformation}</h4>
                <h3 className="my-2 font-bold text-gray-900">{prodData.warrantyInformation || 'Warranty information not available'}</h3>
                <h4>{prodData.description}</h4>
                <button className="hover:cursor-pointer my-2 p-3 bg-[#F3EEE8] w-77 rounded-[.5rem]">Add to Cart</button>

            </div>
        </div>
    );
};

export default ProductsInfo;
