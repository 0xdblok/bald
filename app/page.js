import Image from "next/image";
import Hero from "./component/hero";
import Footer from "./component/footer";

export default function Home() {
  return (
    <main className="bg-[#010CFE]">
      <Hero />
      <Footer />
    </main>
  );
}
