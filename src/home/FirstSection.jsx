import reading from "./../../public/images/Group-240.svg";

export default function FirstSection() {
  return (
    <section className="grid grid-cols-2 gap-4 p-4 w-[1112px] h-[446.06px]">
      <article className="col-span-1 col-sm-span-1  p-16">
        <h3 className="font-poppins font-extrabold text-[36px] letter-spacing-[0.3px] ">
          <span className="text-[#FF0062]">Naming </span>profesional <br /> a
          medida y <span className="text-[#FF0062]">rápido</span>
        </h3>
        <div className="w-[455.92px] h-[116px]">
        <p className="text-[#2b2326]  text-[18px] font-mulish ">
          Somos el espacio digital que te ayudará a crear el nombre ideal para
          tus emprendimientos, marcas, tus hij@s, eventos, mascotas, lugares,
          etc.
        </p>
        <p className="text-[#2b2326] text-[18px] font-mulish py-[10px]">
          En menos de lo que canta un Gallo
        </p>
        </div>
        <h4 className="text-[#2B2326] text-[24px] font-extrabold line-height-normal w-[422px]">
          ¡Nombra o Renombra todo sin <br /> límites!
        </h4>
      </article>
      <article className="col-span-1 col-sm-span-1">
        <img src={reading} alt="Imagen" />
      </article>
    </section>
  );
}
