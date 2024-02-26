import { useSelector, useDispatch } from "react-redux";
import LayoutPage from "../../components/layout/LayoutPage";
import { deleteTOCart } from "../../redux/cartSlice";
import Modal from "../../components/modal/ModalPage";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // Order total price //
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let prevValue = 0;
    cartItems.forEach((item) => {
      prevValue = prevValue + parseInt(item.price);
    });
    setPrice(prevValue);
  }, [cartItems]);

  const shipping = parseInt(100);
  const grandTotal = shipping + price;

  const handleRemoveFromCart = (product) => {
    dispatch(deleteTOCart(product));
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    localStorage.setItem("carts", JSON.stringify(updatedCartItems));
    toast.success("Product deleted");
  };


  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

   

    var options = {
      key: "rzp_test_nAdl50PadmvUWT",
      key_secret: "uqvPhnOtvDPxdP0riHOTxIgr",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "Just Aid",
      description: "for testing purpose",
     
        // console.log(respo nse);
        

       

       
      

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };

  return (
    <div>
      <LayoutPage>
       

        <div className={` bg-gray-100 pt-5`}>
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mb-10 ">
            <div className="rounded-lg md:w-2/3 overflow-y-auto h-[500px] no-scrollbar">
              {/* cart items */}
              {cartItems.map((items) => (
                <>
                  <div
                    className={`justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start`}
                  >
                    <img
                      src={items.img}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className={`mt-5 sm:mt-0 `}>
                        <h2 className={`text-lg font-bold text-gray-900`}>
                          {items.title}
                        </h2>
                        <h2 className={`text-sm  text-gray-900 `}>desc</h2>
                        <p
                          className={`mt-1 text-xs font-semibold text-gray-700  `}
                        >
                          ₹{items.price}
                        </p>
                      </div>
                    </div>
                    <div
                      className="my-2 cursor-pointer"
                      onClick={() => handleRemoveFromCart(items)}
                    >
                      <MdDelete size={24} color="red" />
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div
              className={`mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3  `}
            >
              <div className="mb-2 flex justify-between">
                <p className={`text-gray-700  `}>Subtotal</p>
                <p className={`text-gray-700  `}>{price}</p>
              </div>
              <div className="flex justify-between">
                <p className={`text-gray-700  `}>Shipping</p>
                <p className={`text-gray-700 `}>{shipping}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mb-3">
                <p className={`text-lg font-bold  `}>Total</p>
                <div className>
                  <p className={`mb-1 text-lg font-bold`}>{grandTotal}</p>
                </div>
              </div>

              {/* <Modal  /> */}
              <div className="">
                <Modal 
                name={name}
                address={address}
                pincode={pincode}
                phoneNumber={phoneNumber}
                setName={setName}
                setAddress={setAddress}
                setPincode={setPincode}
                setPhoneNumber={setPhoneNumber}
                buyNow={buyNow}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
};

export default CartPage;
