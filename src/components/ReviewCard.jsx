// import React from 'react'

import {star} from "../assets/icons/index.js";

const ReviewCard = ({imgURL, customerName, ratting, feedback}) => {
    return (
        <div className="flex flex-col justify-center items-center text-center max-w-sm">
            <img src={imgURL} alt={customerName}  className="rounded-full w-[120px] h-[120px] object-cover"/>
            <p className="info-text mt-6">
                {feedback}
            </p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star} alt="rating" width={24} height={24} className="object-contain m-0"/>
                <p className="font-montserrat text-xl text-slate-gray">({ratting})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
        </div>
    )
}
export default ReviewCard
