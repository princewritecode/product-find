import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import ProductReviews from './ProductReviews';
const ProductsInfo = () =>
{
    const { resId } = useParams();
    const [prodData, setProdData] = useState({}); // Initialize as an empty object

    try
    {
        useEffect(() =>
        {
            fetchProductInfo();
        }, []);

    }
    catch (err)
    {
        console.log(err);
    }

    const fetchProductInfo = async () =>
    {

        const response = await fetch(`https://dummyjson.com/products/${resId}`);
        if (!response.ok)
        {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProdData(data);

    };
    try
    {
        const reviews = prodData.reviews;


        return (
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">
                    {prodData.title || 'Product title not available'}
                </h1>
                <h4 className="text-lg font-bold">{prodData.shippingInformation}</h4>
                <h3 className="">{prodData.warrantyInformation || 'Warranty information not available'}</h3>
                <h4>{prodData.description}</h4>
                {/* reviews of the products  accordian*/}

                <p className='font-bold text-2xl my-8'>Reviews</p>
                {
                    reviews.map(
                        (productReview, index) =>
                        {
                            return <ProductReviews key={index} review={productReview}></ProductReviews>;
                        })
                }
                <button className="" >Add to Cart</button>
            </div>
        );
    }
    catch (err)
    {
        console.log(err);
    }
};


export default ProductsInfo;
