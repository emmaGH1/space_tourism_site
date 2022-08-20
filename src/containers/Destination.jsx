import React, {useState} from 'react'

import data from '../assets/data.json'
import { MoonImage, MarsImage, EuropaImage, TitanImage} from '../assets/destination/images'

const Destination = () => {
  const [index, setIndex] = useState(0)
  const [planetImg, setPlanetImg] = useState(MoonImage)

  const { destinations } = data
 

  const handleClick = (planet, id) => {
    if (planet.name === 'Moon') {
      setIndex(0)
      setPlanetImg(MoonImage)
    } else if (planet.name === 'Mars') {
      setIndex(1)
      setPlanetImg(MarsImage)
    } else if (planet.name === 'Europa') {
      setIndex(2)
      setPlanetImg(EuropaImage)
    } else {
      setIndex(3)
      setPlanetImg(TitanImage)
    }
  }
  return ( 
    <div className='text-white'>
      <div className='uppercase font-Heading font text-center md:text-left md:ml-7 xl:ml-44 mb-6'>
        <span className='font-paragraph text-white/25 font-bold mr-2'>01</span>pick your destination
      </div>
      <div className='flex flex-col items-center xl:flex-row xl:w-[80%] xl:mx-auto xl:my-0 xl:justify-between'>
        <img src={planetImg} className='w-40 h-40 sm:w-52 sm:h-52 xl:w-72 xl:h-72 xl:ml-20' alt='planet' />
        <div className='flex flex-col w-[90%] xl:w-2/5'>
          <div className='flex justify-between w-3/5 mx-auto my-0 uppercase mt-5 font-paragraph sm:w-2/6  xl:w-3/6 xl:mx-0'>
            {destinations.map((planet, i) => {
            return (
               <div className={`${i === index ? 'border-b-4' : 'border-invisible'} 
               cursor-pointer hover:border-white/50 hover:border-b-4`} key={i} 
               onClick={() => handleClick(planet, i)}>{planet.name}
               </div>
              )
            })}
          </div>
          <div className='font-Heading text-6xl text-center mt-8 uppercase xl:text-left xl:text-8xl'>{destinations[index].name}</div>
          <div className='text-center text-color-2 xl:w-[100%] xl:text-left xl:text-lg'>{destinations[index].description}</div>
          <div className='bg-[#383B4B] h-[1px] w-[100%] my-7' />
          <div className='xl:flex xl:flex-row justify-between'>
            <div>
              <div className='text-color-2 font-paragraph text-sm uppercase tracking-[.2em] text-center'>avg. distance</div>
              <div className='font-Heading text-[28px] mt-2 uppercase text-center'>{destinations[index].distance}</div>
            </div>
            <div>
              <div className='text-color-2 font-paragraph text-sm uppercase tracking-[.2em] text-center'>est. time travel</div>
              <div className='font-Heading text-[28px] mt-2 uppercase text-center'>{destinations[index].travel}</div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Destination