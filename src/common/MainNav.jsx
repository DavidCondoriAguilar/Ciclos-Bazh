import Logo from "./../../public/images/logo-bazh.svg";
import Facebook from "./../../public/images/facebook.jpg";
import Instagram from "./../../public/images/instagram.jpg";
import Linkedin from "./../../public/images/linkedin.jpg";

export default function MainNav() {
  return (
    <>
      <header className="bg-black py-4">
        <nav className="container flex justify-between items-center">
          <img  src={Logo} title="Logo Bazh" />

          <ul className="flex gap-[24px]">
            <li>
              <a href="#">
                <img src={Facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
