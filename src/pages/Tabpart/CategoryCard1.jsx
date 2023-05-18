/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



const CategoryCard1 = ({category1}) => {
   
    const {img,price,Rating,_id} = category1;
    console.log(category1);
  
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="w-full" src={img}  alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title"> </h2>
            <p>Price: ${price}</p>
            <p>Rating: {Rating}</p>
           
        </div>
    </div>
    );
};

export default CategoryCard1;