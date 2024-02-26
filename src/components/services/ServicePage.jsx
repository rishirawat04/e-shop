import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All ",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money ",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Supoort 24/7",
    description: "Technical Support 24/7",
  },
];

const ServicePage = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4  text-center">
          {ServiceData.map((data) => (
            <>
            <div className="flex items-center space-x-10 py-2 px-3 bg-white dark:bg-gray-300 rounded-md">
              <span className="w-[20px]">{data.icon}</span>
              <div className="flex flex-col  gap-2 font-bold ">
                <h1>{data.title}</h1>
                <p className="text-gray-200 ">{data.description}</p>
              </div>
              <div></div>
            </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
