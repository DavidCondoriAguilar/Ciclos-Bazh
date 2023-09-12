import Logo from "./../../public/images/logo-bazh.svg";
import Facebook from "./../../public/images/facebook.jpg";
import Instagram from "./../../public/images/instagram.jpg";
import Linkedin from "./../../public/images/linkedin.jpg";

export default function MainNav() {
   return (
      <header className="bg-black py-4">
         <nav className="w-full px-[4%]
         xl:max-w-[1200px] xl:px-0 xl:mx-auto
         flex justify-between items-center">
            <img src={Logo} title="Logo Bazh" />

            <div className="flex gap-[24px]">
               <img src={Facebook} alt="" />
               <img src={Linkedin} alt="" />
               <img src={Instagram} alt="" />
            </div>
         </nav>
      </header>
   );
}
