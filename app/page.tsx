import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FirstBody from "./components/FirstBody";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstBody />
    </>
  )
}
