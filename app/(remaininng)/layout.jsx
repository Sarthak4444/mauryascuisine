
import "./../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Maps from "@/components/Maps";

export const metadata = {
  title: "Maurya's Rest, Bar & Banquet",
  description:
    "Welcome to Maurya's Rest, Bar & Banquet, where exquisite flavors meet exceptional ambiance. Explore our menu, reserve a table, and enjoy an unforgettable dining experience.",
  keywords:
    "restaurant, dining, fine dining, family dining, best restaurant, Maurya's, food and drinks, table reservations",
  openGraph: {
    title: "Maurya's Rest, Bar & Banquet",
    description:
      "Experience the perfect blend of flavors and ambiance at Maurya's Rest, Bar & Banquet. Browse our menu and reserve your table today!",
    url: "https://www.mauryascuisine.com",
    siteName: "Maurya's Rest, Bar & Banquet",
    images: [
      {
        url: "https://www.cactusclubcafe.com/wp-content/uploads/2024/11/HPCarousel_600x600_RedThaiCurry.jpg",
        width: 1200,
        height: 630,
        alt: "A delicious dish served at Maurya's Rest, Bar & Banquet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Maurya's Rest, Bar & Banquet | Best Dining Experience",
    description:
      "Discover the best dining experience at Maurya's Rest, Bar & Banquet. Exceptional food, cozy ambiance, and great service await you.",
    images: [
      "https://www.cactusclubcafe.com/wp-content/uploads/2024/11/HPCarousel_600x600_RedThaiCurry.jpg",
    ],
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="module"
          src="https://widgets.revue.us/2.0/rw-widget-grid.js"
        ></script>
      </head>

      <body>
         <Header />
        {children} 
         <Maps />
         <Footer />
      </body>
    </html>
  );
}
