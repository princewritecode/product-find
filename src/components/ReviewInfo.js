import React from 'react';

const ReviewInfo = ({ reviewMain }) =>
{
    return (
        <div>
            <p className='font-bold text-left'>Rating {reviewMain.rating} ⭐️</p>
            <p className='font-light text-left'>Review: {reviewMain.comment}</p>
            <p className='font-light text-left'>Date: {reviewMain.date}</p>
        </div>
    );
};

export default ReviewInfo;