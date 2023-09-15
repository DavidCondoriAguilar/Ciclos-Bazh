import ButtonB from "../button/ButtonB";

export default function CardNaming({
  tittle,
  text,
  img,
  colorButton,
  textButton,
}) {
  return (
    <div
      className="text-center h-full grid items-center justify-items-center 
        rounded-[20px] border-[#FCFCF1] shadow-lg
        py-[36px] px-[18px]"
    >
      <img className="mx-auto w-[96px]" src={img} alt="" />
      <h3 className="py-[24px]">{tittle}</h3>
      <p className="font-mulish text-[16px] text-black sm:text-[18px] pb-[32px]">
        {text}
      </p>
      <ButtonB text={textButton} color={colorButton} />
    </div>
  );
}
