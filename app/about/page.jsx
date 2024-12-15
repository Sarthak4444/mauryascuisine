
import About from "./About";

export const metadata = {
  title: "About Us | Maurya's Rest, Bar & Banquet",
  description:
    "Learn about Maurya's journey, mission, and dedication to serving the best dining experiences. Discover our story and what makes us unique.",
  keywords:
    "about us, restaurant story, dining experience, mission, restaurant history, Maurya's Rest, Bar & Banquet",
  openGraph: {
    title: "About Us | Maurya's Rest, Bar & Banquet",
    description:
      "Get to know Maurya's, our story, mission, and values. Discover how we bring unique dining experiences to our community.",
    url: "https://www.mauryascuisine.com/about",
    siteName: "Maurya's Rest, Bar & Banquet",
    images: [
      {
        url: "https://www.cactusclubcafe.com/wp-content/uploads/2022/11/112522_STSQ_1600x647.jpg",
        width: 1200,
        height: 630,
        alt: "Inside view of Your Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Maurya's Rest, Bar & Banquet",
    description:
      "Discover the journey and mission of Maurya's. Learn about our dedication to serving the finest dining experiences.",
    images: [
      "https://www.cactusclubcafe.com/wp-content/uploads/2022/11/112522_STSQ_1600x647.jpg",
    ],
  },
};

export default function page() {
  return (
    <>
      <About />
    </>
  );
}
