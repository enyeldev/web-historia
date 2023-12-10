import { Carrusel } from '../components/Carrusel'
import blob from '../assets/blob.svg'
import imgHero from '../assets/img-hero.jpg'
import { Btn } from '../components/Btn'

export const Pantalla1 = () => {
    return (
        <>
            <div className="w-full h-[460px] flex justify-between overflow-hidden ">
                <div className=" w-full md:w-[50%] max-w-[1000px] p-4 flex flex-col justify-center items-center md:items-start relative gap-4">
                    <h1 className='text-black font-black  text-4xl md:text-5xl text-center md:text-start'>La <sapn className="text-green-400">Contaminacion </sapn> <br className='hidden' />Ambiental</h1>
                    <p className='w-[90%] text-center text-sm md:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla dolore nobis velit illum.</p>
                    <Btn ruta={'contaminacion-ambiental'} />
                    <img src={blob} alt="Blob" className='absolute w-[150px] top-[-1%] left-[80%] z-10 hidden md:block' />
                </div>

                <div className="w-[50%] h-full bg-center bg-cover bg-no-repeat hidden md:block" style={{ backgroundImage: `url(${imgHero})` }}></div>

            </div>
            <Carrusel />

        </>

    )
}
