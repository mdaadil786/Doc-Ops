import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

export const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

            {/* // changed h  */}
            <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-auto scroll-smooth">
                {specialityData.map((item) => (
                    <Link
                        onClick={() => scrollTo(0, 0)}
                        key={item.speciality}
                        to={`/doctors/${item.speciality}`}
                        className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-500"
                    >
                        <img
                            src={item.image}
                            className="w-16 sm:w-24 mb-2"
                            alt={`${item.speciality} icon`}
                        />
                        <p className="text-black">{item.speciality}</p>
                    </Link>
                ))}
            </div>

        </div>
    )
}
