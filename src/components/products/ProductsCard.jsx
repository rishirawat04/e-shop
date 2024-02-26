import { addToCart } from "../../redux/cartSlice";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


// import images
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import { useEffect } from "react";

const ProductsData = [
  {
    id: 112,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 212,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 312,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 412,
    img: Img4,
    title: "Printed ",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 113,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 232,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 323,
    img: Img7,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 454,
    img: Img5,
    title: "Printed ",
    price: "220",
    aosDelay: "600",
  },
];

const ProductsCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  //console.log(cartItems);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    toast.success('Product added to cart')
  };

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(cartItems) )
  },[cartItems])

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 place-items-center">
        {/* card section  */}
        {ProductsData.map((data) => (
          <div className="group" key={data.id}>
            <div className="relative">
            <Link to={`/productdetails/${data.id}`}>
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md transform transition-transform hover:scale-105 duration-300 "
              />
              </ Link>
            </div>
            <div className="leading-7 flex justify-between mt-2">
              <span><h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">{data.price}</h2></span>
              <span>
              <button
                  className="bg-orange-400 p-1 text-white rounded-md"
                  onClick={() => addToCartHandler(data)}
                >
                  Add to cart
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
