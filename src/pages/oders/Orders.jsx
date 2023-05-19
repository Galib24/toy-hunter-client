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



    return (
        <div>
            <h2>your orders: {orders.length}</h2>
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
                            <th>Toy Price</th>
                            <th>Toy Quantity</th>
                            <th>Toy Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order => <OrdersRow
                        key={order._id}
                        order={order}
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