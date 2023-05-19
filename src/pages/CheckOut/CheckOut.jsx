/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const category = useLoaderData();
    const { title, _id, price, Rating } = category;
    const { user } = useContext(AuthContext)



    const handleConfirmOrder = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyname = form.toyname.value;
        const subCategory = form.subCategory.value;
        const ratings = form.ratings.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;

        const orderInfo = {
            customerName: name,
            toyname,
            email,
            subCategory,
            ratings,
            price,
            quantity,
            photo,
            category: title,
            category_id: _id,
        }
        console.log(orderInfo);


        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('order confirm successfully!')
                }
            })


    }





    return (
        <div>
            <h3>buy now: {title}</h3>
            <form onSubmit={handleConfirmOrder}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" defaultValue={title} name="toyname" placeholder="Toy Name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name="subCategory" placeholder="Sub Category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name="ratings" defaultValue={Rating} placeholder="Ratings" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} name="price" placeholder="price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-primary btn-block" type="submit" value='Order Confirm' />
                   <br />
                   <Link to='/' className="mt-5"> <input  className="btn btn-accent btn-block" type="submit" value='Back To Home' /></Link>
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default CheckOut;