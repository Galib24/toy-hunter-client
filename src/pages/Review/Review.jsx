import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div>
            <h1 className="text-5xl text-violet-600 font-bold text-center my-28">The Review Sections</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
         {
                reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                >

                </ReviewCard>)
            }
         </div>
        </div>
    );
};

export default Review;