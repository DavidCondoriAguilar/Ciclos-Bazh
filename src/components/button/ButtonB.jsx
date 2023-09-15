// eslint-disable-next-line react/prop-types
function ButtonB({ text, color }) {
  const getColorClass = () => {
    switch (color) {
      case "rojo":
        return "bg-[#FA7072]";
      case "morado":
        return "bg-[#7D73EB]";
      case "verde":
        return "bg-[#6BDBBC]";
      default:
        return "bg-gray-300 text-gray-700";
    }
  };

  const buttonClasses = `text-white font-bold font-poppins text-base rounded-full p-3 h-auto w-[195.47px] ${getColorClass()}`;
  
  return <button className={buttonClasses}>{text}</button>;
}

export default ButtonB;
