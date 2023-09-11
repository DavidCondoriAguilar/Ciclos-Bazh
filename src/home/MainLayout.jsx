import MainNav from "../common/MainNav";

export default function MainLayout() {
  return (
    <>
      <div className="grid grid-cols-2 sm-">
        <MainNav/>
        <div className="bg-blue-300 p-4 w-[100%] h-[532px] text-white text-center">
          01
        </div>
        <div className="bg-green-300 p-4 w-[100%] h-[532px] text-white text-center">
          02
        </div>
        <div className="bg-red-300 p-4 w-[100%] h-[532px] text-white text-center">
          03
        </div>
        <div className="bg-yellow-300 p-4 w-[100%] h-[532px] text-white text-center">
          04
        </div>
        <div className="bg-purple-300 p-4 w-[100%] h-[532px] text-white text-center">
          05
        </div>
        <div className="bg-pink-300 p-4 w-[100%] h-[532px] text-white text-center">
          06
        </div>
        <div className="bg-cyan-300 p-4 w-[100%] h-[532px] text-white text-center">
          07
        </div>
        <div className="bg-orange-300 p-4 w-[100%] h-[532px] text-white text-center">
          08
        </div>
      </div>
    </>
  );
}
 