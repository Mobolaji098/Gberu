
import Image from "next/image";
import {ButtonColored,ButtonNoOutline} from "../ui/Button";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

interface MainNavProps{
  lscreen:boolean;
  Theme:string|undefined;
  SetTheme: (theme: Theme) => void;
}

export default function MainNav( {lscreen,Theme,SetTheme}:MainNavProps) {  

    const menus = [{name:'Delivery',routes:"./"},{name:'Driver/Rider',routes:"./"},{name:'About us',routes:"./"},{name:'support',routes:"./"}]
  const lightImagePath = '/GberuNormalLogo.png';
  const darkImagePath = '/GberuWhiteLogo.png';

  // Determine the image source based on the current theme
  const imagePath = Theme === 'dark' ? darkImagePath : lightImagePath;
  return (
    <div className={` flex flex-rol h-[56px] lg:px-8  items-center justify-between py-10  dark:bg-black bg-[#F9F9F9] flex-grow  lg:min-w-[1281px] overflow-hidden md:min-w-[780px] `}>
      <div className="flex gap-12">
      <div className="items-start">
        <a  href='./'>
        <Image
          src={imagePath}
          width={178}
          height={150}
          alt="profile picture"
        />
        </a>
      </div>
        <div className="flex justify-center items-center gap-10 ">
        {lscreen? menus.map((menu)=>{
             return  <ButtonNoOutline className={`font-semibold text-black dark:text-white`} as={Link} href = {menu.routes} key={menu.name}> {menu.name}</ButtonNoOutline>
            })
            : ''}
           

        </div>
        </div>
        <div className="flex gap-10">
        <ThemeToggleButton theme={Theme} setTheme={SetTheme}/>
        <ButtonColored className={`text-white bg-black dark:text-black dark:bg-white text-sm rounded-r-lg px-4 py-1 max-sm:hidden md:block`}> Login</ButtonColored>
        <ButtonColored  className="text-white text-sm bg-red-600 rounded-r-lg px-4 py-1 max-sm:hidden md:block"> Sign up</ButtonColored>
        {!lscreen?<svg className="cursor-pointer mx-5" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35704 1.58469H2.78561C1.75994 1.58469 0.928467 2.38886 0.928467 3.38085V8.76934C0.928467 9.76134 1.75994 10.5655 2.78561 10.5655H8.35704C9.38271 10.5655 10.2142 9.76134 10.2142 8.76934V3.38085C10.2142 2.38886 9.38271 1.58469 8.35704 1.58469Z" stroke="#E02419" stroke-width="1.85714" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.2142 1.58469H17.6428C16.6171 1.58469 15.7856 2.38886 15.7856 3.38085V8.76934C15.7856 9.76134 16.6171 10.5655 17.6428 10.5655H23.2142C24.2399 10.5655 25.0714 9.76134 25.0714 8.76934V3.38085C25.0714 2.38886 24.2399 1.58469 23.2142 1.58469Z" stroke="#000001" stroke-width="1.85714" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.35704 15.954H2.78561C1.75994 15.954 0.928467 16.7582 0.928467 17.7502V23.1387C0.928467 24.1307 1.75994 24.9348 2.78561 24.9348H8.35704C9.38271 24.9348 10.2142 24.1307 10.2142 23.1387V17.7502C10.2142 16.7582 9.38271 15.954 8.35704 15.954Z" stroke="#000001" stroke-width="1.85714" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.2142 15.954H17.6428C16.6171 15.954 15.7856 16.7582 15.7856 17.7502V23.1387C15.7856 24.1307 16.6171 24.9348 17.6428 24.9348H23.2142C24.2399 24.9348 25.0714 24.1307 25.0714 23.1387V17.7502C25.0714 16.7582 24.2399 15.954 23.2142 15.954Z" stroke="#E02419" stroke-width="1.85714" stroke-linecap="round" stroke-linejoin="round"/>
</svg>:''}

        </div>
    </div>
  );
}


interface ThemeContext {
  theme: string|undefined;
  setTheme: (theme: Theme) => void;
}


function ThemeToggleButton({theme, setTheme}:ThemeContext) {

  return (
    <span title={`Enable ${theme === 'dark' ? 'light' : 'dark'} theme`}>
      {theme === 'dark' ? (
        <Moon
          className="cursor-pointer text-red-500"
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <Sun
          className="cursor-pointer text-black"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </span>
  );
}

// if (theme === "dark")
// return (
//   <span title="Enable light theme">
//     <Moon
//       className="cursor-pointer text-red-500"
//       onClick={() => {
//         setTheme("light");
//       }}
//     />
//   </span>
// );

// return (
//   <span title="Enable dark theme">
//     <Sun
//       className="cursor-pointer text-black"
//       onClick={() => {
//         setTheme("dark");
//       }}
//     />
//   </span>
// );
