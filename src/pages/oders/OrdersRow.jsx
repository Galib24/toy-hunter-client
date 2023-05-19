/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const OrdersRow = ({ order,handleDelete }) => {
    const { _id, customerName, toyname, photo, price, quantity, subCategory } = order

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>

            </td>
            <td>
                {customerName}

            </td>
            <td>{toyname}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrdersRow;