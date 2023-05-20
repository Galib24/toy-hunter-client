/* eslint-disable react/prop-types */




import { useNavigate } from "react-router-dom";


const CategoryCard = ({category}) => {
   
    const navigate = useNavigate()
   
    const {img,title,price,Rating,_id} = category
    return (
        <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <figure><img className="w-full" src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title"> {title}</h2>
            <p>Price: ${price}</p>
            <p>Rating: {Rating}</p>
            <div className="card-actions justify-end">
                <button onClick={()=> navigate(`viewDetails/${_id}`)} className="btn btn-accent">View Details</button>
            </div>
        </div>
    </div>
    );
};

export default CategoryCard;