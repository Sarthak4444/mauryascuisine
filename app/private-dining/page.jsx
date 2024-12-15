

import PrivateDining from "./privateDining";

export const metadata = {
    title: "Private Dining | Maurya's Rest, Bar & Banquet",
    description:
      "Discover the exclusive private dining options at Maurya's Rest, Bar & Banquet. Host intimate gatherings, special events, or corporate functions in a sophisticated and personalized setting.",
    keywords: "private dining, exclusive events, special occasions, corporate events, intimate gatherings, Maurya's Rest, Bar & Banquet",
    openGraph: {
      title: "Private Dining | Maurya's Rest, Bar & Banquet",
      description:
        "Experience exclusive private dining at Maurya's Rest, Bar & Banquet. Perfect for intimate gatherings, special occasions, or corporate events.",
      url: "https://www.mauryascuisine.com/private-dining",
      siteName: "Maurya's Rest, Bar & Banquet",
      images: [
        {
          url: "https://www.cactusclubcafe.com/wp-content/uploads/2024/11/111424_PDE_HolidayCampaign_PromoBlock_1200x800.jpg",
          width: 1200,
          height: 630,
          alt: "Private dining setup at Maurya's Rest, Bar & Banquet",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Private Dining | Maurya's Rest, Bar & Banquet",
      description:
        "Host special events or intimate gatherings in a private dining setting at Maurya's Rest, Bar & Banquet.",
      images: ["https://www.cactusclubcafe.com/wp-content/uploads/2024/11/111424_PDE_HolidayCampaign_PromoBlock_1200x800.jpg"],
    },
  };
  

export default function page() {
    return (
        <div>
            <PrivateDining />
        </div>
    );
}