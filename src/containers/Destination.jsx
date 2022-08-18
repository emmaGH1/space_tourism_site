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
      <div className='uppercase font-Heading font text-center mb-6'>
        <span className='font-paragraph text-white/25 font-bold mr-2'>01</span>pick your destination
      </div>
      <div className='flex flex-col items-center'>
        <img src={planetImg} className='w-40 h-40 sm:w-52 sm:h-52' alt='planet' />
        <div className='flex flex-col w-[90%]'>
          <div className='flex justify-between w-3/5 mx-auto my-0 uppercase mt-5 font-paragraph sm:w-2/6'>
            {destinations.map((planet, i) => {
            return (
               <div className={`${i === index ? 'border-b-4' : 'border-none'} cursor-pointer`} key={i} onClick={() => handleClick(planet, i)}>{planet.name}</div>
              )
            })}
          </div>
          <div className='font-Heading text-6xl text-center mt-8 uppercase'>{destinations[index].name}</div>
          <div className='text-center text-color-2'>{destinations[index].description}</div>
          <div className='bg-[#383B4B] h-[1px] w-[100%] my-7' />
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
  )
}

export default Destination