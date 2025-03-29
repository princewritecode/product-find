import React, { useState } from 'react';
import ReviewInfo from './ReviewInfo';
const ProductReviews = ({ review }) =>
{

    const [showReview, setShowReview] = useState(false);

    const handleClick = () =>
    {
        console.log('clicked...');
        setShowReview(!showReview);
    };


    return (
        <>
            <div>


                <div className='font-bold w-6/12 m-auto my-6 shadow-lg p-4  '>
                    <div className='p-2 hover:cursor-pointer bg-#F3EEE8-800 flex justify-between' onClick={handleClick}>
                        <span className='text-2xl'> {review.reviewerName}</span>
                        <span>⬇️</span>
                    </div>

                    {showReview && <ReviewInfo reviewMain={review}></ReviewInfo>}
                </div>




            </div>

        </>
    );
};

export default ProductReviews;