import React, { useState } from 'react';
import { useParams } from "react-router";
import { useEffect } from 'react';
const ProductsInfo = () =>
{
    const { resId } = useParams();
    const [prodData, setProdData] = useState('');
    useEffect(() =>
    {
        fetchProductInfo();
    }, []);

    const fetchProductInfo = async () =>
    {

        const data = await fetch(`https://dummyjson.com/products/${resId}`);
        const response = await data.json();
        setProdData(response);
        console.log(response);
    };

    return (
        <div>
            <h1>{prodData.warrantyInformation}</h1>
            <h2>{prodData.title}</h2>
        </div>
    );
};

export default ProductsInfo;