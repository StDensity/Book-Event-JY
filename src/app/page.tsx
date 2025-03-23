import ContentArea from "@/components/ContentArea";
import Hero from "@/components/Hero";
import RegisterFooter from "@/components/RegisterFooter";

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
