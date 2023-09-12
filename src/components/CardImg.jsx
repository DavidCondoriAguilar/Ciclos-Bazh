export const CardImg = ({number, logo}) => {
    return (
        <div className="bg-blue-300 hover:bg-red-500 p-4 w-[100%] h-[532px] text-white text-center">
            <h2> Titulo 2 </h2>
            <p className='textH2'>texto del heading 2</p>
            {number}
            <img src={logo} alt="" />
        </div>
    )
}
