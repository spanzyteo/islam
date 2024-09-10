import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FirstBody from "./components/FirstBody";
import SecondBody from "./components/SecondBody";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstBody />
      <SecondBody />
    </>
  )
}
