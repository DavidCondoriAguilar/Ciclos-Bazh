import Logo from "./../../public/images/logo-bazh.svg";
import Facebook from "./../../public/images/facebook.jpg";
import Instagram from "./../../public/images/instagram.jpg";
import Linkedin from "./../../public/images/linkedin.jpg";

export default function MainNav() {
  return (
    <>
      <nav className="bg-transparent py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img className="mx-10" src={Logo} title="Logo Bazh" />
          <input type="checkbox" className="hidden" id="menu-toggle" />
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer text-white text-xl lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </label>

          <ul className="hidden lg:flex  space-x-4 mx-20">
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
        </div>
      </nav>
    </>
  );
}
