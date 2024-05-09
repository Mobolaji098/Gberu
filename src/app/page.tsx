"use client"

import Page2 from "@/components/Pages/Page2";
import Page3 from "@/components/Pages/Page3";
import MainNav from "../components/Pages/MainNav";
import Page1 from "../components/Pages/Page1";
import Page4 from "../components/Pages/Page4";
import Page5 from "../components/Pages/page5";
import useWindowSize from "../hooks/useWindowSize";
import {mdBreakPoint} from "../lib/tailwind"
import {useTheme} from "next-themes";
import Page6 from "../components/Pages/page6";
import Footer from "../components/Pages/Footer";

export default function Home() {

  const windowSize = useWindowSize();
  const isLargeScreen = windowSize.width >= mdBreakPoint;
  const { theme,setTheme } = useTheme();
  
  return (
    <main className="flex min-h-screen justify-center flex-col overflow-hidden ">
      <MainNav  lscreen={isLargeScreen} Theme={theme} SetTheme={setTheme}/>
      <Page1/>
      <Page2  />
      <Page3 />
      <Page4 />
      <Page5/>
      <Page6/>
      <Footer/>
    </main>
  );
}
