import ServiceDescription from "@/components/utils/Description";
import React from "react";
import ServiceCard from "./ServiceCard";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export default async function ServiceSection() {
  const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <div>
      <ServiceDescription
        subtitle="Service"
        title="Our Service Area"
        description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className="grid grid-cols-12 container mx-auto gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </div>
  );
}
