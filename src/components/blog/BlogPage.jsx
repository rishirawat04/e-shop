import HeadingPage from "../shared/HeadingPage"

// import images
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Satya",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: Img3,
    aosDelay: "400",
  },
];


const BlogPage = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section  */} 
        <HeadingPage title={"Recent News"} subtitle={"Explore Our Blogs"} />

        {/* Blog Section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-6 sm:gap-4 md:gap-7">
            {BlogData.map((data) => (
               <>
                <div className="overflow-hidden rounded-2xl mb-2 ">
                    {/* Image section  */}
                    <div className="overflow-hidden rounded-2xl mb-2">
                        <img src={data.image}
                        className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                        alt="" />
                    </div>
                    {/* content section  */}
                    <div className="space-y-2">
                        <p className="text-xs text-gray-300">{data.published}</p>
                        <p className="font-bold line-clamp-1 ">{data.title}</p>
                        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                    </div>
                </div>
               </>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
