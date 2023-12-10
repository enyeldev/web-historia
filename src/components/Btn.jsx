/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
export const Btn = ({ ruta }) => {
    return (
        <Link to={ruta} className='w-max text-white bg-green-400 font-black px-4 py-1 rounded-md cursor-pointer hover:bg-green-500 duration-500'>Ver mas</Link>
    )
}
