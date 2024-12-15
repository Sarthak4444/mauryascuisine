"use client";
import React, { useState } from "react";
import Image from "next/image";

function Blog() {
  const [blog, setBlog] = useState(null);
  const blogList = [
    {
      Title: "Our Family Run Business",
      Image:
        "https://mauryascuisine.com/wp-content/uploads/2024/02/Web-20-years-Mattar-Chaat-v2.jpg",
      Content:
        "At Maurya’s Craft Bar And Kitchen, Every Dish Tells A Story, Every Cocktail Carries Intention, And Every Experience Begins With A Connection. What Started As A Dream To Share The Rich Heritage Of Lucknowiee Cuisine Has Evolved Into Something Much Greater—A Place Where Tradition Meets Innovation, And Where Hospitality Becomes An Art. Our Journey Began With A Simple Idea: To Create More Than Just A Restaurant. Maurya’s Is Where Guests Become Friends And Meals Become Memories. Infused With The Spirit Of Canadian Comfort And Inspired By The Timeless Flavors Of Lucknow, We’ve Crafted A Dining Experience That Celebrates Culture, Community, And Creativity. At The Heart Of Maurya’s Lies Our Unwavering Dedication To Hospitality. It’s Not Just About Food Or Drinks—It’s About How They Make You Feel. Every Plate, Every Handcrafted Cocktail, And Every Interaction Is Designed With Genuine Care And Thoughtful Attention, Ensuring Each Visit Leaves A Lasting Impression. Whether You're Enjoying A Cozy Evening With Loved Ones, Celebrating Life’s Special Moments, Or Simply Unwinding With A Crafted Cocktail, Maurya’s Is Where You’ll Find An Experience Tailored To Your Senses. This Is More Than Just A Place To Dine—Maurya’s Is A Place To Connect, Savor, And Belong. From Our Kitchen To Your Table, We Invite You To Explore The Passion, Tradition, And Craftsmanship That Define Who We Are.",
    },
    {
      Title: "Maurya's Craft Visionary",
      Image:
        "https://mauryascuisine.com/wp-content/uploads/2023/01/platter.jpg",
      Content:
        "At Maurya’s Craft Bar And Kitchen, Every Dish Tells A Story, Every Cocktail Carries Intention, And Every Experience Begins With A Connection. What Started As A Dream To Share The Rich Heritage Of Lucknowiee Cuisine Has Evolved Into Something Much Greater—A Place Where Tradition Meets Innovation, And Where Hospitality Becomes An Art. Our Journey Began With A Simple Idea: To Create More Than Just A Restaurant. Maurya’s Is Where Guests Become Friends And Meals Become Memories. Infused With The Spirit Of Canadian Comfort And Inspired By The Timeless Flavors Of Lucknow, We’ve Crafted A Dining Experience That Celebrates Culture, Community, And Creativity. At The Heart Of Maurya’s Lies Our Unwavering Dedication To Hospitality. It’s Not Just About Food Or Drinks—It’s About How They Make You Feel. Every Plate, Every Handcrafted Cocktail, And Every Interaction Is Designed With Genuine Care And Thoughtful Attention, Ensuring Each Visit Leaves A Lasting Impression. Whether You're Enjoying A Cozy Evening With Loved Ones, Celebrating Life’s Special Moments, Or Simply Unwinding With A Crafted Cocktail, Maurya’s Is Where You’ll Find An Experience Tailored To Your Senses. This Is More Than Just A Place To Dine—Maurya’s Is A Place To Connect, Savor, And Belong. From Our Kitchen To Your Table, We Invite You To Explore The Passion, Tradition, And Craftsmanship That Define Who We Are.",
    },
    {
      Title: "Negroni Week",
      Image:
        "https://mauryascuisine.com/wp-content/uploads/2023/01/toast-to-a-new-chapter.jpg",
      Content:
        "At Maurya’s Craft Bar And Kitchen, Every Dish Tells A Story, Every Cocktail Carries Intention, And Every Experience Begins With A Connection. What Started As A Dream To Share The Rich Heritage Of Lucknowiee Cuisine Has Evolved Into Something Much Greater—A Place Where Tradition Meets Innovation, And Where Hospitality Becomes An Art. Our Journey Began With A Simple Idea: To Create More Than Just A Restaurant. Maurya’s Is Where Guests Become Friends And Meals Become Memories. Infused With The Spirit Of Canadian Comfort And Inspired By The Timeless Flavors Of Lucknow, We’ve Crafted A Dining Experience That Celebrates Culture, Community, And Creativity. At The Heart Of Maurya’s Lies Our Unwavering Dedication To Hospitality. It’s Not Just About Food Or Drinks—It’s About How They Make You Feel. Every Plate, Every Handcrafted Cocktail, And Every Interaction Is Designed With Genuine Care And Thoughtful Attention, Ensuring Each Visit Leaves A Lasting Impression. Whether You're Enjoying A Cozy Evening With Loved Ones, Celebrating Life’s Special Moments, Or Simply Unwinding With A Crafted Cocktail, Maurya’s Is Where You’ll Find An Experience Tailored To Your Senses. This Is More Than Just A Place To Dine—Maurya’s Is A Place To Connect, Savor, And Belong. From Our Kitchen To Your Table, We Invite You To Explore The Passion, Tradition, And Craftsmanship That Define Who We Are.",
    },
    {
      Title: "Regional Butter Chicken",
      Image:
        "https://mauryascuisine.com/wp-content/uploads/2024/02/2023-06-17.jpg",
      Content:
        "At Maurya’s Craft Bar And Kitchen, Every Dish Tells A Story, Every Cocktail Carries Intention, And Every Experience Begins With A Connection. What Started As A Dream To Share The Rich Heritage Of Lucknowiee Cuisine Has Evolved Into Something Much Greater—A Place Where Tradition Meets Innovation, And Where Hospitality Becomes An Art. Our Journey Began With A Simple Idea: To Create More Than Just A Restaurant. Maurya’s Is Where Guests Become Friends And Meals Become Memories. Infused With The Spirit Of Canadian Comfort And Inspired By The Timeless Flavors Of Lucknow, We’ve Crafted A Dining Experience That Celebrates Culture, Community, And Creativity. At The Heart Of Maurya’s Lies Our Unwavering Dedication To Hospitality. It’s Not Just About Food Or Drinks—It’s About How They Make You Feel. Every Plate, Every Handcrafted Cocktail, And Every Interaction Is Designed With Genuine Care And Thoughtful Attention, Ensuring Each Visit Leaves A Lasting Impression. Whether You're Enjoying A Cozy Evening With Loved Ones, Celebrating Life’s Special Moments, Or Simply Unwinding With A Crafted Cocktail, Maurya’s Is Where You’ll Find An Experience Tailored To Your Senses. This Is More Than Just A Place To Dine—Maurya’s Is A Place To Connect, Savor, And Belong. From Our Kitchen To Your Table, We Invite You To Explore The Passion, Tradition, And Craftsmanship That Define Who We Are.",
    },
    {
      Title: "Your Happy Hour!",
      Image:
        "https://mauryascuisine.com/wp-content/themes/fresh-theme/assets/images/gods-elixir.jpg",
      Content:
        "At Maurya’s Craft Bar And Kitchen, Every Dish Tells A Story, Every Cocktail Carries Intention, And Every Experience Begins With A Connection. What Started As A Dream To Share The Rich Heritage Of Lucknowiee Cuisine Has Evolved Into Something Much Greater—A Place Where Tradition Meets Innovation, And Where Hospitality Becomes An Art. Our Journey Began With A Simple Idea: To Create More Than Just A Restaurant. Maurya’s Is Where Guests Become Friends And Meals Become Memories. Infused With The Spirit Of Canadian Comfort And Inspired By The Timeless Flavors Of Lucknow, We’ve Crafted A Dining Experience That Celebrates Culture, Community, And Creativity. At The Heart Of Maurya’s Lies Our Unwavering Dedication To Hospitality. It’s Not Just About Food Or Drinks—It’s About How They Make You Feel. Every Plate, Every Handcrafted Cocktail, And Every Interaction Is Designed With Genuine Care And Thoughtful Attention, Ensuring Each Visit Leaves A Lasting Impression. Whether You're Enjoying A Cozy Evening With Loved Ones, Celebrating Life’s Special Moments, Or Simply Unwinding With A Crafted Cocktail, Maurya’s Is Where You’ll Find An Experience Tailored To Your Senses. This Is More Than Just A Place To Dine—Maurya’s Is A Place To Connect, Savor, And Belong. From Our Kitchen To Your Table, We Invite You To Explore The Passion, Tradition, And Craftsmanship That Define Who We Are.",
    },
    {
      Title: "Date Night",
      Image:
        "https://mauryascuisine.com/wp-content/uploads/2024/02/Web-20-years-Mattar-Chaat-v2.jpg",
      Content:
        "At Maurya’s Craft Bar And Kitchen, Every Dish Tells A Story, Every Cocktail Carries Intention, And Every Experience Begins With A Connection. What Started As A Dream To Share The Rich Heritage Of Lucknowiee Cuisine Has Evolved Into Something Much Greater—A Place Where Tradition Meets Innovation, And Where Hospitality Becomes An Art. Our Journey Began With A Simple Idea: To Create More Than Just A Restaurant. Maurya’s Is Where Guests Become Friends And Meals Become Memories. Infused With The Spirit Of Canadian Comfort And Inspired By The Timeless Flavors Of Lucknow, We’ve Crafted A Dining Experience That Celebrates Culture, Community, And Creativity. At The Heart Of Maurya’s Lies Our Unwavering Dedication To Hospitality. It’s Not Just About Food Or Drinks—It’s About How They Make You Feel. Every Plate, Every Handcrafted Cocktail, And Every Interaction Is Designed With Genuine Care And Thoughtful Attention, Ensuring Each Visit Leaves A Lasting Impression. Whether You're Enjoying A Cozy Evening With Loved Ones, Celebrating Life’s Special Moments, Or Simply Unwinding With A Crafted Cocktail, Maurya’s Is Where You’ll Find An Experience Tailored To Your Senses. This Is More Than Just A Place To Dine—Maurya’s Is A Place To Connect, Savor, And Belong. From Our Kitchen To Your Table, We Invite You To Explore The Passion, Tradition, And Craftsmanship That Define Who We Are.",
    },
    {
      Title: "Reasons to be at Patio",
      Image:
        "https://mauryascuisine.com/wp-content/uploads/2023/01/platter.jpg",
      Content:
        "At Maurya’s Craft Bar And Kitchen, Every Dish Tells A Story, Every Cocktail Carries Intention, And Every Experience Begins With A Connection. What Started As A Dream To Share The Rich Heritage Of Lucknowiee Cuisine Has Evolved Into Something Much Greater—A Place Where Tradition Meets Innovation, And Where Hospitality Becomes An Art. Our Journey Began With A Simple Idea: To Create More Than Just A Restaurant. Maurya’s Is Where Guests Become Friends And Meals Become Memories. Infused With The Spirit Of Canadian Comfort And Inspired By The Timeless Flavors Of Lucknow, We’ve Crafted A Dining Experience That Celebrates Culture, Community, And Creativity. At The Heart Of Maurya’s Lies Our Unwavering Dedication To Hospitality. It’s Not Just About Food Or Drinks—It’s About How They Make You Feel. Every Plate, Every Handcrafted Cocktail, And Every Interaction Is Designed With Genuine Care And Thoughtful Attention, Ensuring Each Visit Leaves A Lasting Impression. Whether You're Enjoying A Cozy Evening With Loved Ones, Celebrating Life’s Special Moments, Or Simply Unwinding With A Crafted Cocktail, Maurya’s Is Where You’ll Find An Experience Tailored To Your Senses. This Is More Than Just A Place To Dine—Maurya’s Is A Place To Connect, Savor, And Belong. From Our Kitchen To Your Table, We Invite You To Explore The Passion, Tradition, And Craftsmanship That Define Who We Are.",
    },
    {
      Title: "Restaurant Week",
      Image:
        "https://mauryascuisine.com/wp-content/themes/fresh-theme/assets/images/gods-elixir.jpg",
      Content:
        "At Maurya’s Craft Bar And Kitchen, Every Dish Tells A Story, Every Cocktail Carries Intention, And Every Experience Begins With A Connection. What Started As A Dream To Share The Rich Heritage Of Lucknowiee Cuisine Has Evolved Into Something Much Greater—A Place Where Tradition Meets Innovation, And Where Hospitality Becomes An Art. Our Journey Began With A Simple Idea: To Create More Than Just A Restaurant. Maurya’s Is Where Guests Become Friends And Meals Become Memories. Infused With The Spirit Of Canadian Comfort And Inspired By The Timeless Flavors Of Lucknow, We’ve Crafted A Dining Experience That Celebrates Culture, Community, And Creativity. At The Heart Of Maurya’s Lies Our Unwavering Dedication To Hospitality. It’s Not Just About Food Or Drinks—It’s About How They Make You Feel. Every Plate, Every Handcrafted Cocktail, And Every Interaction Is Designed With Genuine Care And Thoughtful Attention, Ensuring Each Visit Leaves A Lasting Impression. Whether You're Enjoying A Cozy Evening With Loved Ones, Celebrating Life’s Special Moments, Or Simply Unwinding With A Crafted Cocktail, Maurya’s Is Where You’ll Find An Experience Tailored To Your Senses. This Is More Than Just A Place To Dine—Maurya’s Is A Place To Connect, Savor, And Belong. From Our Kitchen To Your Table, We Invite You To Explore The Passion, Tradition, And Craftsmanship That Define Who We Are.",
    },
  ];

  const slicedBlogList = blogList.slice(2);

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
                    src={blogList[0].Image}
                    alt="blog"
                    className="w-full h-full object-cover p-10"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-6">
                  <p className="text-4xl font-bold tracking-wide">
                    {blogList[0].Title}
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
                    {blogList[1].Title}
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
                    src={blogList[1].Image}
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
            <p className="text-5xl font-extrabold text-[#d88728] tracking-wide">{blog.Title}</p>
            <Image
              src={blog.Image}
              alt="blog"
              className="w-full h-[500px] object-cover p-3 md:p-10 my-8"
              width={500}
              height={500}
              loading="lazy"
            />
            <p className="text-xl font-semibold text-left tracking-wider pr-6 leading-10 text-neutral-600 mb-8">
              {blog.Content}
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
                  src={item.Image}
                  alt="blog"
                  loading="lazy"
                  className="w-[400px] h-[300px] object-cover p-6"
                  width={400}
                  height={300}
                />
                <p className="text-2xl -mt-4 font-bold tracking-wide">
                  {item.Title}
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
