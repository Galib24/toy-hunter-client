/* eslint-disable react/prop-types */
import {  useNavigate } from "react-router-dom";

const CategoryCard2 = ({category2}) => {
    const navigate = useNavigate()
    const {img,price,Rating,_id} = category2;
    console.log(category2);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="w-full" src={img}  alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title"> </h2>
            <p>Price: ${price}</p>
            <p>Rating: {Rating}</p>
            <div className="card-actions justify-end">
                <button onClick={()=> navigate(`viewDetails/${_id}`)} className="btn btn-primary">View Details</button>
            </div>
        </div>
    </div>
    );
};

export default CategoryCard2;