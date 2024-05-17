"use client"

import SendCarrier from "./components/landingpage/SendCarrier";
import EarnMoney from "./components/landingpage/EarnMoney";
import MainNav from "./components/landingpage/MainNav";
import OpeningPage from "./components/landingpage/OpeningPage";
import OurServices from "./components/landingpage/OurServices";
import MultipleCarrier from "./components/landingpage/MultipleCarrier";
import useWindowSize from "../hooks/useWindowSize";
import {mdBreakPoint} from "../lib/tailwind"
import {useTheme} from "next-themes";
import Reasons from "./components/landingpage/Reasons";
import Footer from "./components/landingpage/Footer";
import EnhancedFeatures from "./components/landingpage/EnhancedFeatures";

export default function Home() {

  const windowSize = useWindowSize();
  const isLargeScreen = windowSize.width >= mdBreakPoint;
  const { theme,setTheme } = useTheme();
  
  return (
    <main className="flex min-h-screen justify-center flex-col overflow-hidden ">
      <MainNav  lscreen={isLargeScreen} Theme={theme} SetTheme={setTheme}/>
      <OpeningPage/>
      <SendCarrier  />
      <EnhancedFeatures/>
      <EarnMoney />
      <OurServices />
      <MultipleCarrier/>
      <Reasons/>
      <Footer/>
    </main>
  );
}
