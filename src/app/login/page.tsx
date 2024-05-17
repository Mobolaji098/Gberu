"use client"

import MainNav from "../components/landingpage/MainNav";
import useWindowSize from "@/hooks/useWindowSize";
import {mdBreakPoint} from "@/lib/tailwind"
import {useTheme} from "next-themes";
import Footer from "../components/landingpage/Footer";
import ComingSoon from "../components/comingSoon/comingSoon";

export default function Home() {

  const windowSize = useWindowSize();
  const isLargeScreen = windowSize.width >= mdBreakPoint;
  const { theme,setTheme } = useTheme();


  
  return (
    <main className="flex min-h-screen justify-center flex-col overflow-hidden ">
      <MainNav  lscreen={isLargeScreen} Theme={theme} SetTheme={setTheme}/>
      <ComingSoon/>
      <Footer/>
    </main>
  );
}
