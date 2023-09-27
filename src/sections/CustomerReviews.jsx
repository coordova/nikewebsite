// import React from 'react'

import {reviews} from "../constants/index.js";
import ReviewCard from "../components/ReviewCard.jsx";

const CustomerReviews = () => {
    return (
        <section id="customer-reviews" className="max-container">
            <h3 className="font-palanquin font-bold text-center text-4xl">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say?
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>
            {/*Reviews Cards*/}
            <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
                {
                    reviews.map((review) => (
                        <ReviewCard
                            key={review.customerName}
                            imgURL={review.imgURL}
                            customerName={review.customerName}
                            ratting={review.rating}
                            feedback={review.feedback}
                        />
                    ))
                }
            </div>
        </section>
    );
}
export default CustomerReviews
