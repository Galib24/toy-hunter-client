/* eslint-disable react/prop-types */


const CategoryCard = ({category}) => {
    const {img,title,price,Rating} = category
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="w-full" src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title"> {title}</h2>
            <p>Price: ${price}</p>
            <p>Rating: {Rating}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    </div>
    );
};

export default CategoryCard;