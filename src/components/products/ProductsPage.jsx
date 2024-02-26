import HeadingPage from "../shared/HeadingPage"
import ProductsCard from "./ProductsCard"





const ProductsPage = () => {
  return (
    <div>
      <div className="container">
        {/*Header Section  */}
        <HeadingPage title="Our Products"
        subtitle={"Explore Our Products"} />
        {/*Body Section  */}
        <ProductsCard />
      </div>
    </div>
  )
}

export default ProductsPage
