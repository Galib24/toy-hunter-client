import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrdersRow from "./OrdersRow";


const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    const url = `http://localhost:5000/orders?email=${user?.email}`;



    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    },[])


    const handleDelete = id => {
        const proceed = confirm('Are tou sure you want to delete!');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining);
                }
            })
        }
    }



    return (
        <div>
            <h2>Your  orders: {orders.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Toy Photo</th>
                            <th>User Name</th>
                            <th>Toy Name</th>
                            <th>Toy Category</th>
                            <th>Toy Ratings</th>
                            <th>Toy Price</th>
                            <th>Toy Quantity</th>
                            <th>Details</th>
                           
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order => <OrdersRow
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        >

                        </OrdersRow>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;