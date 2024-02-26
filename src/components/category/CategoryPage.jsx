import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/speaker.png";
import Image5 from "../../assets/category/vr.png";
import Image6 from "../../assets/category/gaming.png"
import HeroBtn from "../shared/button";

const CategoryPage = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/*First col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black text-white rounded-xl relative h-[320px]   flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <HeroBtn
                  text="Browser"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              className="w-[320px] rounded-full  absolute bottom-0 "
              alt=""
            />
          </div>
          {/*Second col */}
          <div className="py-10 pl-5 bg-yellow-500 rounded-xl text-white relative h-[320px]   flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Watch
                </p>
                <HeroBtn
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-yellow-500"}
                />
              </div>
            </div>
            <img
              src={Image2}
              className="w-[320px] rounded-full absolute top-0 -right-12 "
              alt=""
            />
          </div>
          {/*Third col */}
          <div className="py-10 pl-5 sm:col-span-2 bg-red-600 rounded-xl text-white relative h-[320px]  flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Laptop
                </p>
                <HeroBtn
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-red-500"}
                />
              </div>
            </div>
            <img
              src={Image3}
              className="w-[320px]   absolute bottom-0 right-0 "
              alt=""
            />
          </div>
        </div>

        {/*Second Items list */}
          <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <HeroBtn
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image4}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 overflow-hidden bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <HeroBtn
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img src={Image5} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <HeroBtn
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={Image6}
              alt=""
              className="w-[200px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
