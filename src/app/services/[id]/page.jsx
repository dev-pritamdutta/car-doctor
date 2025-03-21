import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function ServiceDetailsPage({ params }) {
  const p = await params;
  const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
  console.log(data);

  return (
    <div className="container mx-auto my-10">
      <section>
        <div className="hero  w-4/5 mx-auto">
          <figure>
            <Image
              src="/assets/images/checkout/checkout.png"
              alt="Checkout image"
              width="1250"
              height="300"
            ></Image>
          </figure>

          <div className="hero-overlay"></div>
          <div className=" text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Service Details</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div class="grid grid-cols-[4fr_2fr] gap-0">
          <div className="mx-auto">
            <Image
              src={data.img}
              alt="service details img"
              width={800}
              height={400}
            ></Image>
          </div>
          <div class="bg-[#F3F3F3] border-3 rounded-2xl  border-red-300 w-full p-10 text-center">
            <h1 className="text-3xl font-bold mb-8">Services</h1>
            <div>
              {data.facility.map((facilityItem, index) => (
                <div key={index}>
                  <button className="btn btn-outline btn-error cursor-auto my-3 w-[300px] h-[56px]">{facilityItem.name}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
}
