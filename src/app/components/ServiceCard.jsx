import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, price, img } = service;
return (
    <div className="card w-96 shadow-sm mx-auto">
        <Image
            src={img}
            width={314}
            height={208}
            alt="The car repaire"
            className="mx-auto rounded-xl"
            style={{ width: "auto", height: "auto" }}
            priority
        />
        <div className="card-body">
            <h2 className="card-title text-2xl">{title}</h2>
            <p className="text-[#ff3811] text-xl">Price: ${price}</p>
            <div className="card-actions justify-center"></div>
                <button className="btn btn-outline btn-error">details</button>
            </div>
        </div>
   
);
};

export default ServiceCard;
