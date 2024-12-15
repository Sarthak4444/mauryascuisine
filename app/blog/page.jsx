
import Blog from "./blog";

export const metadata = {
    title: "Blog | Maurya's Rest, Bar & Banquet",
    description:
      "Stay updated with the latest news, recipes, dining tips, and events from Maurya's Rest, Bar & Banquet. Discover behind-the-scenes stories and culinary insights.",
    keywords: "restaurant blog, dining tips, recipes, food stories, Maurya's Rest, Bar & Banquet blog, culinary news, food events",
    openGraph: {
      title: "Blog | Maurya's Rest, Bar & Banquet",
      description:
        "Explore the latest updates, recipes, dining trends, and stories from Maurya's Rest, Bar & Banquet. Stay inspired and informed about the world of food and hospitality.",
      url: "https://www.mauryascuisine.com/blog",
      siteName: "Maurya's Rest, Bar & Banquet",
      images: [
        {
          url: "https://mauryascuisine.com/wp-content/themes/fresh-theme/assets/images/smoked-sour.jpg",
          width: 1200,
          height: 630,
          alt: "Delicious food and a cozy atmosphere",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Maurya's Rest, Bar & Banquet",
      description:
        "Get the latest recipes, dining tips, and stories from Maurya's Rest, Bar & Banquet. Discover culinary insights and exciting updates from the team.",
      images: ["https://mauryascuisine.com/wp-content/themes/fresh-theme/assets/images/smoked-sour.jpg"],
    },
  };
  

export default function page() {
    return (    
        <>
            <Blog />
        </>
    );
}