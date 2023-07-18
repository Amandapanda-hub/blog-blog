import React from 'react'
// import Carousel from './components/Carousel/Carousel'
import EmblaCarousel from './components/Carousel/EmblaCarousel'
import '../../../css/embla.css'
import QuadrupleBox from './components/TrioBox/QuadrupleBox';


const SLIDE_COUNT = 100;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Hero() {
  return (
  <div className=''>
   <EmblaCarousel slides={SLIDES}/>
   <QuadrupleBox/>
   </div>
  )
}