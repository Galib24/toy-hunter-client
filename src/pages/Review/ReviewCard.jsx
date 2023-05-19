/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const ReviewCard = ({ review }) => {
    const { image, name, comment, rating } = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{comment}</p>
                <div className='flex'>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    <h7>{rating} </h7>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;