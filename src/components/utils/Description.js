const ServiceDescription = ({ title, subtitle, description }) => {
  return (
    <div className="text-center my-5 w-[717px] mx-auto">
      <h4 className="text-red-500 text-xl font-semibold">---- {subtitle} ----</h4>
      <h2 className="font-bold text-[45px]">{title}</h2>
      <p className="text-gray-500 text-[16px] tracking-wide">{description}</p>
    </div>
  );
};

export default ServiceDescription;
