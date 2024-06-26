import Image from "next/image";

export default function Footer() {
    const bodys = [['Long distance movement',
        'Short distance movement',
       ' Interstate movement',
       ' Groceries shopping',
        'VIP Courier service',
       ' Parcel delivery'],['24/7 Customer support',
       'Secured orders, payments and privacy',
       'One time and fast delivery',
       'Hassle free and secured payments',
       'Experienced and Trained drivers/riders',
       'and lots more...'],['Delivery',
        'Driver/rider',
        'Language',
        'Support',
        'About us']]
    const socials = {instagram:{imageurl:'/instagram.png',link:'https://www.instagram.com'},apple:{imageurl:'/apple.png',link:'https://www.apple.com'},
    snapchat:{imageurl:'/snapchat.png',link:'https://www.snapchat.com'},tiktok:{imageurl:'/tiktok.png',link:'https://www.tiktok.com'},
    playstor:{imageurl:'/playstor.png',link:'https://www.playstor'},twitter:{imageurl:'/twitter.png',link:'https://www.twitter.com'},
    facebook:{imageurl:'/facebook.png',link:'https://www.facebook.com'},whatsapp:{imageurl:'/whatsapp.png',link:'https://www.whatsapp.com'}}
  return (
    <div className="bg-black">
    <div className="flex flex-col bg-black pb-24 max-w-[750px] lg:max-w-[1300px] w-full m-auto ">
      <div className="items-start px-10">
        <a href="./">
          <Image
            src="/GberuWhiteLogo.png"
            width={178}
            height={150}
            alt="profile picture"
          />
        </a>
      </div>
      <p className="text-white md:px-16 font-bold text-xl px-6"> Contact our customer support</p>
      <div className="flex flex-col lg:flex-row justify-between md:p-16 gap-8 p-6">
        <FooterList title='Services' body= {bodys[0]} />
        <FooterList title='Features' body={bodys[1]}/>
        <FooterList title='Company' body={bodys[2]}/>
      </div>
      <div className="flex gap-6 lg:flex-row flex-col">
        <p className="text-white md:px-16 px-6">C 2024 All rights reserved </p>
        <div className="flex gap-2 md:pl-16 lg:p-0 pl-6">

        <FooterIcons imageurl={socials.instagram.imageurl} link={socials.instagram.link}/>
        <FooterIcons imageurl={socials.apple.imageurl} link={socials.apple.link}/>
        <FooterIcons imageurl={socials.snapchat.imageurl} link={socials.snapchat.link}/>
        <FooterIcons imageurl={socials.tiktok.imageurl} link={socials.tiktok.link}/>
        <FooterIcons imageurl={socials.playstor.imageurl} link={socials.playstor.link}/>
        <FooterIcons imageurl={socials.twitter.imageurl} link={socials.twitter.link}/>
        <FooterIcons imageurl={socials.facebook.imageurl} link={socials.facebook.link}/>
        <FooterIcons imageurl={socials.whatsapp.imageurl} link={socials.whatsapp.link}/>
        </div>
      </div>
    </div>
    </div>
  );
}

interface FooterListProps {
  title: string;
  body: string[];
}

function FooterList({ title, body }: FooterListProps) {
    
  return (
    <div>
      <p className="text-white flex font-bold text-xl pb-4"> {title}</p>
      {body.map((word)=>{
        return <p key={word} className="text-white pb-2"> {word}</p>
      })}
     
    </div>
  );
}

interface FooterIconProps{
    imageurl:string;
    link:string;
}

function FooterIcons({imageurl,link}:FooterIconProps){
    return(
        <a  href={link}>
        <Image
          src={imageurl}
          width={32}
          height={51}
          alt="profile picture"
        />
        </a>
    )
}