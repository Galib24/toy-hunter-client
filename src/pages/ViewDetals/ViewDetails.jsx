import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const {detailsId} = useParams();
    const details = useLoaderData();
    const [categoryDetails, setCategoryDetails] = useState({})
    useEffect(()=>{
        if(details){
            const detailsData = details.find(dt => dt._id == detailsId);
            setCategoryDetails(detailsData)
        }
    },[])
    const {_id, title} = categoryDetails;
    console.log(_id);
    return (
        <div>
            <h2>{_id}</h2>
            <h1>{title}</h1>
        </div>
    );
};

export default ViewDetails;