import reading from "./../../public/images/Group-240.svg";

export default function FirstSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-[auto] h-[auto]">

      <article className="col-span-1 col-sm-span-1  p-10 p-sm-5">
        <h3 className="first-section-h3 sm:text-[24px]">
          <span className="text-[#FF0062]">Naming </span>profesional <br /> a
          medida y <span className="text-[#FF0062]">rápido</span>
        </h3>
        <div className="w-[auto] h-[auto] text-[18px] font-mulish font-[400] text-[#2b2326] tracking-[0.3px] py-[24px] ">
        <p className=" sm:text-[#a55398] ">
          Somos el espacio digital que te ayudará a crear el nombre ideal para
          tus emprendimientos, marcas, tus hij@s, eventos, mascotas, lugares,
          etc.
        </p>
        <p className="py-[10px] ">
          En menos de lo que canta un Gallo
        </p>
        </div>
        <h4 className="text-[#2B2326] text-[24px] font-extrabold line-height-normal w-[auto] py-[28px] mt-[12px] sm-hidden">
          ¡Nombra o Renombra todo sin <br /> límites!
        </h4>
      </article>

      <article className="col-span-1 col-sm-span-1">
        <img src={reading} alt="Imagen" />
      </article>
    </section>
  );
}
