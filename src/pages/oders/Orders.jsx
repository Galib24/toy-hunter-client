import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    const url = `http://localhost:5000/orders?email=${user.email}`;



    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    })



    return (
        <div>
            
        </div>
    );
};

export default Orders;