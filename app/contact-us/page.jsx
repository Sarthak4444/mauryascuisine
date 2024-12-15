

import ContactUs from "./contactUs";

export const metadata = {
    title: "Contact Us | Maurya's Rest, Bar & Banquet",
    description:
      "Get in touch with Maurya's Rest, Bar & Banquet for reservations, inquiries, feedback, or support. We're here to help you with all your dining needs.",
    keywords: "contact Maurya's Rest, Bar & Banquet, restaurant phone number, restaurant email, reservations, feedback, customer support, dining inquiries",
    openGraph: {
      title: "Contact Us | Maurya's Rest, Bar & Banquet",
      description:
        "Have questions or need assistance? Contact Maurya's Rest, Bar & Banquet for reservations, feedback, or support. We look forward to hearing from you.",
      url: "https://www.mauryascuisine.com/contact",
      siteName: "Maurya's Rest, Bar & Banquet",
      images: [
        {
          url: "https://www.cactusclubcafe.com/wp-content/uploads/2021/09/service-thumb.jpg",
          width: 1200,
          height: 630,
          alt: "Contact Maurya's Rest, Bar & Banquet",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | Maurya's Rest, Bar & Banquet",
      description:
        "Reach out to Maurya's Rest, Bar & Banquet for reservations, inquiries, or support. We're happy to assist you with your dining experience.",
      images: ["https://www.cactusclubcafe.com/wp-content/uploads/2021/09/service-thumb.jpg"],
    },
  };
  

export default function page() {
    return (
        <div>
            <ContactUs />
        </div>
    );
}