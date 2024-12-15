


import React from "react";
import Careers from "./careers";

export const metadata = {
    title: "Careers | Join Our Team at Maurya's Rest, Bar & Banquet",
    description:
      "Explore exciting career opportunities at Maurya's Rest, Bar & Banquet. Join our passionate team and help create memorable dining experiences for our guests.",
    keywords: "restaurant jobs, careers at Maurya's Rest, Bar & Banquet, hospitality careers, restaurant team jobs, kitchen staff, front-of-house jobs, food service careers",
    openGraph: {
      title: "Careers | Join Our Team at Maurya's Rest, Bar & Banquet",
      description:
        "Looking for a rewarding career in the restaurant industry? Join the team at Maurya's Rest, Bar & Banquet and be a part of our journey to deliver exceptional dining experiences.",
      url: "https://www.mauryascuisine.com/careers",
      siteName: "Maurya's Rest, Bar & Banquet",
      images: [
        {
          url: "https://www.cactusclubcafe.com/wp-content/uploads/2021/09/Careers_JoinOurTeam_Banner_V3_1800x370-1-1536x316.jpg",
          width: 1200,
          height: 630,
          alt: "Your Restaurant staff working together",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Careers | Join Our Team at Maurya's Rest, Bar & Banquet",
      description:
        "Explore career opportunities at Maurya's Rest, Bar & Banquet. Join a passionate team committed to delivering outstanding dining experiences.",
      images: ["https://www.cactusclubcafe.com/wp-content/uploads/2021/09/Careers_JoinOurTeam_Banner_V3_1800x370-1-1536x316.jpg"],
    },
  };
  

export default function page() {
    return (
        <>
            <Careers />
        </>
    );
}