export default function CardWork({ img, subTittle, text }) {
  return (
    <div className="h-full grid justify-items-start">
      <img
        className="w-[384px] h-[276px] rounded-[16px] mb-[16px] "
        src={img}
      />
      <h2 className="py-[7px] text-[21px] text-[#ffd600] hover:text-pink-700 transition duration-700 cursor-pointer">
        {subTittle}
      </h2>
      <p className="text-[13px] font-nunito text-white pb-[32px]">{text}</p>
    </div>
  );
}
