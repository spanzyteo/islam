import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FirstBody from "./components/FirstBody";
import SecondBody from "./components/SecondBody";
import ThirdBody from "./components/ThirdBody";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstBody />
      <SecondBody />
      <ThirdBody />
    </>
  )
}
