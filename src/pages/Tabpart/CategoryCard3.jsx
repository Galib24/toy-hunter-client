/* eslint-disable react/prop-types */


const CategoryCard3 = ({ category3 }) => {
   
    const { img, price, Rating, _id,title } = category3;
    console.log(_id);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title} </h2>
                <p>Price: ${price}</p>
                <p>Rating: {Rating}</p>
               
            </div>
        </div>
    );
};

export default CategoryCard3;