import ContentArea from "@/components/ContentArea";
import Hero from "@/components/Hero";
import RegisterFooter from "@/components/RegisterFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFT Workshop - Book Event",
  description: "Learn how to buy NFT in India. All about NFT marketplaces",
  openGraph: {
    title: "NFT Workshop - Book Event",
    description: "Learn how to buy NFT in India. All about NFT marketplaces",
    images: [
      {
        url: "https://raw.githubusercontent.com/StDensity/Book-Event-JY/refs/heads/master/public/images/hero.png",
        width: 1200,
        height: 630,
        alt: "NFT Workshop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NFT Workshop - Book Event",
    description: "Learn how to buy NFT in India. All about NFT marketplaces",
    images: ["https://raw.githubusercontent.com/StDensity/Book-Event-JY/refs/heads/master/public/images/hero.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <div className="w-full pb-40">
        <Hero />
        <ContentArea />
      </div>
      <div>
        <RegisterFooter />
      </div>
    </div>
  );
}
