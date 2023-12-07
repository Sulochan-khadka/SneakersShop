import { useState } from 'react'
import Slide from './Slide'

const items = [
  { title: 'Stan Smith 1', imageUrl: '/assets/images/slide.jpg', link: '#' },
  { title: 'New Balance', imageUrl: '/assets/images/slide2.jpg', link: '#' },
  { title: 'Nike Air', imageUrl: '/assets/images/slide3.jpg', link: '#' }
]

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== items.length) setSlideIndex(slideIndex + 1)
    else if (slideIndex === items.length) setSlideIndex(1)
  }

  const prevSlide = () => {
    if (slideIndex !== 1) setSlideIndex(slideIndex - 1)
    else if (slideIndex === 1) setSlideIndex(items.length)
  }

  const showSlide = (num) => {
    const slides = items.map((slide, index) => {
      const isActive = index === num - 1 ? true : false
      return <Slide key={index} title={slide.title} imageUrl={slide.imageUrl} link={slide.link} isActive={isActive} />
    })

    return slides
  }

  return (
    <div className="slider">
      <div className="slider__inner">
        {showSlide(slideIndex)}
      </div>
      <div className="slider__buttons">
        <button className="slider__btn slider__btn--left" onClick={prevSlide}></button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}></button>
      </div>
    </div>
  )
}
