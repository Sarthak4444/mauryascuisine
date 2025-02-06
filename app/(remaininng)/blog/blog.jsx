"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Blog() {
  const [blog, setBlog] = useState(null);
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlogList(data.blogs.reverse());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };
    fetchBlog();
  }, []);

  const slicedBlogList = blogList.slice(2);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-[#d88728] w-16 h-16"></div>
      </div>
    );
  }

  return (
    <>
      <section>
        {!blog ? (
          <div className="h-fit max-w-[1250px] mx-auto p-6 md:p-16 pb-10 text-center">
            <p className="text-4xl sm:text-5xl mb-5">One dish. One drink.</p>
            <p className="text-4xl sm:text-5xl mb-5">
              One{" "}
              <span className="text-[#d88728] font-bold">
                unforgettable moment
              </span>{" "}
              at a time.
            </p>
            <div className="flex justify-center items-center lg:flex-row flex-col-reverse gap-10 mt-14">
              <div className="w-full md:w-1/2">
                <p className="text-xl font-semibold text-left tracking-wider pr-6 leading-10 text-neutral-600 mb-8">
                  Step Into The World Of Maurya’s, Where Culinary Traditions
                  Meet Modern Inspiration. From Unique Regional Flavors To
                  Expertly Crafted Cocktails, Explore Stories, Recipes, And
                  Insights That Bring Our Passion To Life.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="https://mauryascuisine.com/wp-content/themes/fresh-theme/assets/images/smoked-sour.jpg"
                  alt="drink"
                  className="w-full h-[600px] object-cover p-10"
                  width={500}
                  loading="lazy"
                  height={500}
                />
              </div>
            </div>
            <div className="h-fit max-w-[1250px] mx-auto p-0 lg:p-16 pb-10 text-center">
              <div className="flex justify-center items-center lg:flex-row flex-col gap-10 mt-14">
                <div className="w-full md:w-1/2">
                  <Image
                    src={blogList[0].img}
                    alt="blog"
                    className="w-full h-full object-cover p-10"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-6">
                  <p className="text-4xl font-bold tracking-wide">
                    {blogList[0].title}
                  </p>
                  <button
                    onClick={() => {
                      setBlog(blogList[0]);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="bg-[#d88728] mt-8 w-[200px] hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center lg:flex-row flex-col-reverse gap-10 mt-14">
                <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-6">
                  <p className="text-4xl font-bold tracking-wide">
                    {blogList[1].title}
                  </p>
                  <button
                    onClick={() => {
                      setBlog(blogList[1]);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="bg-[#d88728] mt-8 w-[200px] hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2"
                  >
                    LEARN MORE
                  </button>
                </div>
                <div className="w-full md:w-1/2">
                  <Image
                    src={blogList[1].img}
                    alt="blog"
                    className="w-full h-full object-cover p-10"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-fit max-w-[1250px] mx-auto p-8md:p-16 pb-10 text-center">
            <p className="text-5xl font-extrabold text-[#d88728] tracking-wide">
              {blog.title}
            </p>
            <Image
              src={blog.img}
              alt="blog"
              className="w-full h-[500px] object-cover p-3 md:p-10 my-8"
              width={500}
              height={500}
              loading="lazy"
            />
            <p className="text-xl font-semibold text-left tracking-wider pr-6 leading-10 text-neutral-600 mb-8">
              {blog.content}
            </p>
            <button
              onClick={() => {
                setBlog(null);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="bg-[#d88728] mt-12 hover:scale-105 transition-all duration-500 text-white px-8 text-xl font-extrabold tracking-wider py-2"
            >
              BACK TO BLOG
            </button>
          </div>
        )}
      </section>
      <section className="h-fit max-w-[1250px] mx-auto p-16 pb-10 text-center">
        <p className="text-4xl font-bold tracking-wide">Explore More</p>
        <p className="text-3xl mt-6 text-[#d88728] tracking-wide">
          Stories. Secrets. Inspirations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14">
          {slicedBlogList.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setBlog(item);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                key={index}
                className="flex justify-center hover:underline underline-offset-4 items-center cursor-pointer flex-col"
              >
                <Image
                  src={item.img}
                  alt="blog"
                  loading="lazy"
                  className="w-[400px] h-[300px] object-cover p-6"
                  width={400}
                  height={300}
                />
                <p className="text-2xl -mt-4 font-bold tracking-wide">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blog;
