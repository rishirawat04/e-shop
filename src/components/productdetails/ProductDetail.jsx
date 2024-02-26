import { useState,useEffect } from "react";
import { Rating,  } from "@material-tailwind/react"
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";
import 'react-toastify/dist/ReactToastify.css';
import LayoutPage from "../layout/LayoutPage";

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

const ProductsData1 = [
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
    },]

const ProductDetail = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart)

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
        toast.success('Product added to cart')
      };
    
      useEffect(() => {
        localStorage.setItem('carts', JSON.stringify(cartItems) )
      },[cartItems])
    
    
    const { id } = useParams()

    // find the product data bases on the id

    const product = ProductsData.find((product) => product.id === parseInt(id));
    console.log(product);
  
    const handleImageClick = (img) => {
      setMainImage(img);
    };
    const [mainImage, setMainImage] = useState(product.img);
  
    return (
     <LayoutPage>
         <div className="mt-24">
        <div className="w-[80%] h-auto py-6 px-10 border flex flex-col md:flex-row mx-auto mt-10">
          <div className="flex flex-col w-full md:w-auto mr-4">
            <img src={mainImage} alt="Main" className="md:w-[400px] w-[400px] mx-auto" />
            <div className="grid grid-cols-4 mt-4 grid-rows-1  md:space-x-2 mx-auto">
              {ProductsData1.map((product) => (
                <img
                  key={product.id}
                  src={product.img}
                  className="w-[90px] h-[90px] object-cover cursor-pointer mb-2 md:mb-0 mr-2"
                  alt=""
                  onClick={() => handleImageClick(product.img)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between  mx-auto md:items-start  space-y-2 mt-4 md:mt-0">
            <div>
              <h1 className="text-2xl ">{product.title}</h1>
              
              <p>{product.price} </p>
              <div className="mb-10">
            <Rating value={4} readonly />
            </div>
            </div>
           
            <div className="">
              <button className="bg-orange-400 rounded-md p-2 max-md:w-full"
              onClick={() => addToCartHandler(product)}
              >ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
     </LayoutPage>
    );
  };
  
  export default ProductDetail;
