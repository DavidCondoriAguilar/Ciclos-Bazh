import { CardImg } from "../components/card/CardImg";
import CardNaming from "../components/card/CardNaming";
import CardWork from "../components/card/CardWork";
import read from "./../../public/images/Group-240.svg";

export default function Home() {
  return (
    <>
      <section
        className="container grid items-center
        py-[40px] gap-[24px]
        lg:grid-cols-[400px_1fr] lg:py-[72px]
        xl:grid-cols-[456px_1fr] xl:gap-[58px]"
      >
        <article>
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
          src={read}
          alt="Imagen"
          className="w-[232px] mx-auto sm:w-full"
        ></img>
      </section>

      <section>
        <div className="containerCard mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[82px] py-[72px]">
          <CardNaming
            tittle="ACELERADORA"
            text="Postula tu proyecto para ser parte de nuestra aceleradora y recibir hasta S/ 85.000"
            img="images/aceleradoraIcon.png"
            colorButton="rojo"
            textButton="Postular"
          />

          <CardNaming
            tittle="DONACIONES"
            text="Accede a la plataforma de financiamiento colaborativo para elegir los proyectos a los que quieres aportar."
            img="images/comunidadIcon.png"
            colorButton="verde"
            textButton="Acceder"
          />

          <CardNaming
            tittle="COMUNIDAD"
            text="Conoce más sobre las iniciativas nacionales que están buscando mitigar los efectos de la pandemia."
            img="images/donacionesIcon.png"
            colorButton="morado"
            textButton="Ver más"
          />
        </div>
      </section>

      <section className="containerWork bg-[#2b2326ff]">
          <h2 className="text-[35px] font-700 text-center text-[#fff] pt-[45px]">Nuestros proyectos más recientes</h2>
        <div className="containerWork mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ] py-[72px]">
          <CardWork
            img="images/work1.jpg"
            subTittle="Nombres Profesionales"
            text="Naming Design"
          />
          <CardWork
            img="images/work2.jpg"
            subTittle="Congreso de biología ICBAR"
            text="ICBAR | LINWSW"
          />
          <CardWork
            img="images/work3.jpg"
            subTittle="Potenciando jugadores"
            text="WILD BOOSTING"
          />
        </div>
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
