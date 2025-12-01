import Image from "next/image";
import Hero from "./Pages/Hero";
import OurServices from "./Pages/OurServices";
import Fiction from "./Pages/fiction";
import Choose from "./Pages/Choose";
import Explore from "./Pages/Explore";
import Reviews from "./Pages/Reviews";
import Footer from "@/components/nexoneComponents/Footer";

export default function Home() {
  return (
   <div>
    <Hero/>
    <OurServices/>
    <Fiction/>
    <Choose/>
    <Explore/>
    <Reviews/>
    <Footer/>
   </div>
  );
}
