import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const { detailsId } = useParams();
    const details = useLoaderData();
    const [categoryDetails, setCategoryDetails] = useState({})
    useEffect(() => {
        if (details) {
            const detailsData = details.find(dt => dt._id == detailsId);
            setCategoryDetails(detailsData)
        }
    }, [])
    const { _id, title, img, price, description, Rating } = categoryDetails;
    console.log(_id);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="ml-6">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-2">Price: ${price}</p>
                    <p className="py-1">Rating: {Rating}</p>
                    <p className="py-1">{description}</p>
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-accent">Proceed CheckOut</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;