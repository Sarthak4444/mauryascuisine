


"use client";
import React from 'react'
import { useState } from "react";

function FAQs({faqs}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };
  return (
    <section className='h-fit max-w-[1250px] mx-auto md:p-20 p-6 pb-10'>
        <p className='md:text-5xl text-3xl font-[600] mb-8'>Frequently Asked Questions</p>
        {faqs.map((faq, index) => (
        <div key={index} className="border-b-[1px] border-stone-500 mb-5 cursor-pointer">
          <div className="text-2xl flex justify-between" onClick={() => handleToggle(index)}>
            <span>{faq.question}</span>
            <i className={`fa-solid fa-chevron-down ${activeIndex === index ? '-rotate-180' : ''}`}></i>
          </div>
            <div style={{
                maxHeight: activeIndex === index ? '100vh' : '0',
                opacity: activeIndex === index ? '1' : '0',
                transition: 'max-height 0.4s, opacity 0.5s',
              }}>
              <p className='text-xl text-neutral-600'>{faq.answer}</p>
            </div>
        </div>
      ))}
    </section>
  )
}

export default FAQs