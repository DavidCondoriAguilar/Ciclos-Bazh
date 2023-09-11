import Logo from "./../../public/images/logo-footer.svg";

export default function MainFooter() {
  return (
    <>
      <footer className="bg-[#27002D] h-[291px] text-white px-[129px] py-[75px]">
        <div className="flex justify-between items-center">
          <div className="">
          <img src={Logo} title="Logo Bazh" className="h-[102px] w-[280px]" />
          </div>
          <div className=" w-[200px]">
            <p className="textFooter">+ 51 948027441</p>
            <p className="textFooter"> holasoybazh@gmail.com</p>
            <p className="textFooter"> Lima-Perú</p>
          </div>
        </div>
        <div className="text-center ">
            <p className="text-[#fff] font-inter text-base font-normal">
                Design by <a className="underline" href="https://ciclos.studio/" target="_blank" rel="noreferrer">CICLOS STUDIO</a>
            </p>
        </div>
      </footer>
    </>
  );
}
