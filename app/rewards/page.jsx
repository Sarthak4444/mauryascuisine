


import Rewards from "./rewards";

export const metadata = {
    title: "Rewards | Maurya's Restaurant, Bar & Banquet",
    description:
      "Join our rewards program at Maurya's Restaurant, Bar & Banquet and start earning points for every dollar spent. Redeem rewards for exclusive discounts, special offers, and more.",
    keywords: "restaurant rewards program, loyalty program, earn points, exclusive discounts, special offers, Maurya's Restaurant, Bar & Banquet rewards",
    openGraph: {
      title: "Rewards | Maurya's Restaurant, Bar & Banquet",
      description:
        "Unlock exciting rewards with Maurya's Restaurant, Bar & Banquet's loyalty program. Earn points and enjoy exclusive perks on your next visit.",
      url: "https://www.mauryascuisine.com/rewards",
      siteName: "Maurya's Restaurant, Bar & Banquet",
      images: [
        {
          url: "http://localhost:3000/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fearls-ws-prod%2Ffiler_public_thumbnails%2Ffiler_public%2F2022%2F03%2F07%2Fgiftcards_960x720px_1.png__773x583_crop-smart_subsampling-2_upscale.png%3FX-Goog-Algorithm%3DGOOG4-RSA-SHA256%26X-Goog-Credential%3Dearls-prod-storage%2540earls-website.iam.gserviceaccount.com%252F20241214%252Fauto%252Fstorage%252Fgoog4_request%26X-Goog-Date%3D20241214T171834Z%26X-Goog-Expires%3D86400%26X-Goog-SignedHeaders%3Dhost%26X-Goog-Signature%3Dbc904f718648c2ff5206616ab2225e49a78559dd22880eae8815e80e4f2e5bc377aa32113073b9a07e236342abe40bbd444ff200c04ea078b898cc70c1a459a7c22e303a86c0180d3a582091318310c56dd2eddf72985099e47ec3b0b8aafcaca6705c32b539a0d0b95c903a100d44380fdb873e65164c7bcbdfeb73a5d05d9bc2f1a756b237976d7c77f554d794d9192f05dd23f208e16c9f9cdf7448661091de34f9467ff3913a4880c781f27e6420ad6f3555f5411531d206091d5003452a2e4396cf53113a731e7be24f8a0b1f16f6314180329c77bc7905edd7e1243840f7c357362324165bfc651ecd68703c7feff37e389a975bfaece47e28ebd20cb4&w=640&q=75",
          width: 1200,
          height: 630,
          alt: "Maurya's Restaurant, Bar & Banquet rewards program benefits",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Rewards | Maurya's Restaurant, Bar & Banquet",
      description:
        "Join our rewards program at Maurya's Restaurant, Bar & Banquet and start earning exclusive discounts and perks.",
      images: ["http://localhost:3000/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fearls-ws-prod%2Ffiler_public_thumbnails%2Ffiler_public%2F2022%2F03%2F07%2Fgiftcards_960x720px_1.png__773x583_crop-smart_subsampling-2_upscale.png%3FX-Goog-Algorithm%3DGOOG4-RSA-SHA256%26X-Goog-Credential%3Dearls-prod-storage%2540earls-website.iam.gserviceaccount.com%252F20241214%252Fauto%252Fstorage%252Fgoog4_request%26X-Goog-Date%3D20241214T171834Z%26X-Goog-Expires%3D86400%26X-Goog-SignedHeaders%3Dhost%26X-Goog-Signature%3Dbc904f718648c2ff5206616ab2225e49a78559dd22880eae8815e80e4f2e5bc377aa32113073b9a07e236342abe40bbd444ff200c04ea078b898cc70c1a459a7c22e303a86c0180d3a582091318310c56dd2eddf72985099e47ec3b0b8aafcaca6705c32b539a0d0b95c903a100d44380fdb873e65164c7bcbdfeb73a5d05d9bc2f1a756b237976d7c77f554d794d9192f05dd23f208e16c9f9cdf7448661091de34f9467ff3913a4880c781f27e6420ad6f3555f5411531d206091d5003452a2e4396cf53113a731e7be24f8a0b1f16f6314180329c77bc7905edd7e1243840f7c357362324165bfc651ecd68703c7feff37e389a975bfaece47e28ebd20cb4&w=640&q=75"],
    },
  };
  

export default function page() {    
    return (
        <div>
            <Rewards /> 
        </div>
    );
}