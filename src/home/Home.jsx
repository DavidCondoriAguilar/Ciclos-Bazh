import { CardImg } from "../components/card/CardImg";

export default function Home() {
  return (
    <>
      <section
        className="container grid items-center
        py-[40px] gap-[24px]
        lg:grid-cols-[400px_1fr] lg:py-[72px]
        xl:grid-cols-[456px_1fr] xl:gap-[58px]"
      >
        <article className=" bg-green-200 ">
          <h1 className="lg:w-[380px]">
            <span className="text-rosaB">Naming </span> profesional a medida y{" "}
            <span className="text-rosaB">rápido</span>
          </h1>
          <p
            className="font-mulish font-[400] text-[#2b2326] 
            text-[16px] py-[24px]
            sm:text-[18px] sm:pt-[15px] sm:pb-[24px]"
          >
            Somos el espacio digital que te ayudará a crear el nombre ideal para
            tus emprendimientos, marcas, tus hij@s, eventos, mascotas, lugares,
            etc.
            <br /> <br />
            En menos de lo que canta un Gallo
          </p>
          <h2>¡Nombra o Renombra todo sin límites!</h2>
        </article>
        <img
          src="images/group-240.svg"
          alt="Imagen"
          className="w-[232px] mx-auto sm:w-full"
        ></img>
      </section>
      <section className="grid grid-cols-2">
        <CardImg number="01" logo="images/facebook.jpg" />
        <CardImg number="02" logo="images/instagram.jpg" />
        <CardImg number="03" logo="images/linkedin.jpg" />
        <CardImg number="04" logo="images/facebook.jpg" />
      </section>
    </>
  );
}
