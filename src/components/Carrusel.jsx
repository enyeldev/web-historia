import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Btn } from './Btn'
import { slides } from '../constants/constants'
export const Carrusel = () => {

    const [indice, setIndice] = useState(0);

    const nextImg = () => {
        const lastImg = indice === (slides.length - 1);

        const passImg = lastImg ? 0 : indice + 1;

        setIndice(passImg);
    }

    const prevImg = () => {

        const firstImg = indice === 0;

        const passImg = firstImg ? slides.length - 1 : indice - 1;

        setIndice(passImg);
    }

    return (
        <div className="max-w-[1000px]  w-[95%] relative my-4">
            <div className="w-full h-[350px] md:h-[400px] rounded-xl bg-center bg-no-repeat bg-cover duration-500"
                style={{ backgroundImage: `url(${slides[indice].url})` }}></div>

            <div className="w-full h-[350px] md:h-[400px] rounded-xl bg-gradient-to-b from-transparent via-[#00000036] to-[#0000004d] absolute top-0 flex justify-between items-center px-4 overflow-hidden ">

                <div className="text-green-400 cursor-pointer transition-colors duration-400 hover:bg-gray-50 rounded-full flex justify-center items-center p-2" onClick={prevImg}>
                    <IoIosArrowBack size={30} />
                </div>



                <div className="text-green-400 cursor-pointer transition-colors duration-400 hover:bg-gray-50 rounded-full flex justify-center items-center p-2" onClick={nextImg}>
                    <IoIosArrowForward size={30} />
                </div>

                <div className=" w-full absolute bottom-0 left-0  text-center py-10 flex flex-col items-center gap-4">
                    <h1 className='text-white font-black md:text-2xl '>{slides[indice].titulo}</h1>
                    {slides[indice].btnRuta && <Btn ruta={slides[indice].ruta} />}

                </div>

            </div>
        </div>
    )
}
