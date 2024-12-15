

import GiftCards from "./giftCards";

export const metadata = {
    title: "Gift Cards | Maurya's Rest, Bar & Banquet",
    description:
      "Give the gift of exceptional dining with a Maurya's Rest, Bar & Banquet gift card. Perfect for any occasion, our gift cards make every celebration special.",
    keywords: "restaurant gift cards, dining gift cards, gift vouchers, Maurya's Rest, Bar & Banquet gift cards, special occasion gifts, dining experiences, restaurant vouchers",
    openGraph: {
      title: "Gift Cards | Maurya's Rest, Bar & Banquet",
      description:
        "Looking for the perfect gift? A Maurya's Rest, Bar & Banquet gift card offers unforgettable dining experiences for friends and family.",
      url: "https://www.mauryascuisine.com/gift-cards",
      siteName: "Maurya's Rest, Bar & Banquet",
      images: [
        {
          url: "https://www.cactusclubcafe.com/wp-content/uploads/2023/10/110124_HolidayGC_WebBanners-3-1536x518.jpg",
          width: 1200,
          height: 630,
          alt: "Maurya's Rest, Bar & Banquet gift card on a table",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Gift Cards | Maurya's Rest, Bar & Banquet",
      description:
        "Celebrate any occasion with a Maurya's Rest, Bar & Banquet gift card. Perfect for sharing memorable dining experiences with loved ones.",
      images: ["https://www.cactusclubcafe.com/wp-content/uploads/2023/10/110124_HolidayGC_WebBanners-3-1536x518.jpg"],
    },
  };
  

export default function page() {
    return (
        <div>
            <GiftCards />
        </div>
    );
}