
import CategoryPage from "../../components/category/CategoryPage";
import HeroPage from "../../components/hero/HeroPage";
import ServicePage from "../../components/services/ServicePage";
import headphone from "../../assets/hero/headphone.png";
import ProductsPage from "../../components/products/ProductsPage";
import smartwatch2 from "../../assets/category/smartwatch2-removebg-preview.png";
import BlogPage from "../../components/blog/BlogPage";
import PartnersPage from "../../components/partners/PartnerPage";
import LayoutPage from "../../components/layout/LayoutPage";
import BannerPage from "../../components/banner/BannerPage";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <LayoutPage>
        <HeroPage />
        <CategoryPage />
        <ServicePage />
        <BannerPage data={BannerData} />
        <ProductsPage />
        <BannerPage data={BannerData2} />
        <BlogPage />
        <PartnersPage />
      </LayoutPage>
    </div>
  );
};

export default HomePage;
