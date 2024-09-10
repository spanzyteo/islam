import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="text-red-700 h-[200vh]">Hello everyone</div>
    </>
  )
}
